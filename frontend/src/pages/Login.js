


import React, { useState } from 'react';
import { ethers } from 'ethers';
import AuthABI from '../contracts/AuthContract.json'; // ABI as array
import './Login.css';
import { generateHash } from '../utils/hash';

const CONTRACT_ADDRESS = '0xc63E962e210B9F2e3a23cE22DdB603aB24d3fF46'; // ⬅️ Replace this

function Login() {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hash = await generateHash(email, password);
    setLoading(true);
    setMessage('');

    try {
      if (!window.ethereum) {
        throw new Error('MetaMask is not installed! Please install MetaMask to continue.');
      }

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (!accounts || accounts.length === 0) {
        throw new Error('MetaMask is not connected. Please connect your wallet.');
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const network = await provider.getNetwork();

      let contract;

      if (Number(network.chainId) !== 11155111) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xaa36a7' }],
          });
        } catch (switchError) {
          if (switchError.code === 4902 || switchError.message.includes('Unrecognized chain ID')) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: '0xaa36a7',
                    chainName: 'Sepolia Testnet',
                    rpcUrls: ['https://sepolia.infura.io/v3/bf9531dea07e4c8d8f280ec62b10db93'], // ⬅️ Replace with real project ID
                    nativeCurrency: {
                      name: 'Sepolia ETH',
                      symbol: 'SEP',
                      decimals: 18,
                    },
                    blockExplorerUrls: ['https://sepolia.etherscan.io'],
                  },
                ],
              });
            } catch (addError) {
              throw new Error('Failed to add Sepolia network. Please add it manually in MetaMask.');
            }
          } else if (switchError.code === 4001) {
            throw new Error('Network switch canceled. Please switch to Sepolia manually in MetaMask.');
          } else {
            throw new Error(`Failed to switch to Sepolia: ${switchError.message}.`);
          }
        }

        // Refresh provider after network switch
        const updatedProvider = new ethers.BrowserProvider(window.ethereum);
        const updatedSigner = await updatedProvider.getSigner();

        contract = new ethers.Contract(CONTRACT_ADDRESS, AuthABI, updatedSigner);
      } else {
        contract = new ethers.Contract(CONTRACT_ADDRESS, AuthABI, signer);
      }

      if (!contract) {
        throw new Error('Failed to initialize contract. Check ABI and contract address.');
      }

      if (activeTab === 'register') {
        const tx = await contract.register(email, hash, { gasLimit: 300000 });
        await tx.wait();
        setMessage('✅ Successfully registered on the blockchain!');
      } else if (activeTab === 'login') {
        const loginSuccess = await contract.login(email, hash);
        if (loginSuccess) {
          setMessage('✅ Login successful!');
        } else {
          setMessage('❌ Invalid email or password!');
        }
      }
    } catch (error) {
      console.error('Contract interaction error:', error);
      setMessage(`❗ Error: ${error.message}. Check MetaMask & console.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="logo-circle">PB</div>
        <h1 className="brand-name">policybazaar</h1>

        <div className="welcome-text">
          <h2>Welcome to policybazaar</h2>
          <p>Login or create an account to manage your scheduling journey</p>
        </div>

        <div className="tabs">
          <button
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <span className="input-icon">📧</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> I agree to the terms and conditions
            </label>
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            <span className="button-icon">🔓</span>
            {loading ? 'Processing...' : activeTab === 'login' ? 'Login' : 'Create account'}
          </button>
        </form>

        {message && (
          <p
            style={{
              textAlign: 'center',
              color: message.includes('✅') ? 'green' : 'red',
              marginTop: '10px',
            }}
          >
            {message}
          </p>
        )}

        <div className="footer">
          <p>
            By using policybazaar, you agree to our{' '}
            <a href="#terms">Terms of Service</a> and{' '}
            <a href="#privacy">Privacy Policy</a>.
          </p>
        </div>

        <div className="tags">
          <span className="tag">Secure login</span>
          <span className="tag">Data privacy</span>
          <span className="tag">Personalized scheduling</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
