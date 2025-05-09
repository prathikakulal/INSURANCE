
  

// export const generateHash = async (email, password) => {
//     const msg = `${email}:${password}`;
//     const msgBuffer = new TextEncoder().encode(msg);
//     const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
//     const hashArray = Array.from(new Uint8Array(hashBuffer));
//     const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
//     return hashHex;
//   };
  

// import { ethers } from 'ethers';

// export async function generateHash(email, password) {
//   const data = email + password;
//   const hash = ethers.keccak256(ethers.toUtf8Bytes(data)); // Returns a string like '0x...'
//   return hash; // Ensure the '0x' prefix is kept
// }


import { ethers } from 'ethers';

export async function generateHash(email, password) {
  const data = email + password;
  const hash = ethers.keccak256(ethers.toUtf8Bytes(data));
  return hash;
}