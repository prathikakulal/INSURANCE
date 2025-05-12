// // import React, { useState } from 'react';
// // import './InsuranceSelection.css';

// // const membersList = [
// //   { id: 'self', label: 'Self' },
// //   { id: 'wife', label: 'Wife' },
// //   { id: 'son', label: 'Son', quantity: true },
// //   { id: 'daughter', label: 'Daughter', quantity: true },
// //   { id: 'father', label: 'Father' },
// //   { id: 'mother', label: 'Mother' }
// // ];

// // const InsuranceSelection = () => {
// //   const [gender, setGender] = useState('male');
// //   const [selectedMembers, setSelectedMembers] = useState({});
  
// //   const toggleMember = (id) => {
// //     setSelectedMembers(prev => ({
// //       ...prev,
// //       [id]: prev[id] ? undefined : membersList.find(m => m.id === id).quantity ? 1 : true
// //     }));
// //   };

// //   const adjustQuantity = (id, delta) => {
// //     setSelectedMembers(prev => {
// //       const count = prev[id] || 1;
// //       const newCount = Math.max(1, count + delta);
// //       return { ...prev, [id]: newCount };
// //     });
// //   };

// //   return (
// //     <div class="insurance-selection-page">
// //   <header>
// //     <div class="logo">policybazaar<span>.com</span></div>
// //     <div class="tagline">HAR FAMILY HOGI INSURED</div>
// //     <button class="help-btn">📞 Help</button>
// //   </header>

// //   <div class="progress-bar">
// //     <div class="progress" style="width: 0%;"></div>
// //   </div>

// //   <main>
// //     <h1>
// //       Find top plans for you with up to <span class="highlight">25% discount</span>
// //     </h1>

// //     <div class="gender-toggle">
// //       <button class="active">Male</button>
// //       <button>Female</button>
// //     </div>

// //     <h3>Select members you want to insure</h3>

// //     <div class="members-grid">
// //       <div class="member-card selected">
// //         <div class="avatar"></div>
// //         <div>Self</div>
// //       </div>
// //       <div class="member-card">
// //         <div class="avatar"></div>
// //         <div>Wife</div>
// //       </div>
// //       <div class="member-card selected">
// //         <div class="avatar"></div>
// //         <div>Son</div>
// //         <div class="quantity-control">
// //           <button>-</button>
// //           <span>1</span>
// //           <button>+</button>
// //         </div>
// //       </div>
// //       <div class="member-card">
// //         <div class="avatar"></div>
// //         <div>Daughter</div>
// //       </div>
// //       <div class="member-card">
// //         <div class="avatar"></div>
// //         <div>Father</div>
// //       </div>
// //       <div class="member-card">
// //         <div class="avatar"></div>
// //         <div>Mother</div>
// //       </div>
// //     </div>

// //     <div class="more-members">More members ⌄</div>

// //     <button class="continue-btn">Continue ›</button>

// //     <div class="footer-text">
// //       By clicking on "Continue", you agree to our
// //       <a href="#">Privacy Policy</a>,
// //       <a href="#">Terms of Use</a> & 
// //       <a href="#">*Disclaimer</a>
// //     </div>
// //   </main>
// // </div>
// //   );
// // };

// // export default InsuranceSelection;



// import React, { useState } from 'react';
// import './InsuranceSelection.css';

// const membersList = [
//   { id: 'self', label: 'Self' },
//   { id: 'wife', label: 'Wife' },
//   { id: 'son', label: 'Son', quantity: true },
//   { id: 'daughter', label: 'Daughter', quantity: true },
//   { id: 'father', label: 'Father' },
//   { id: 'mother', label: 'Mother' }
// ];

// const InsuranceSelection = () => {
//   const [gender, setGender] = useState('male');
//   const [selectedMembers, setSelectedMembers] = useState({});

//   const toggleMember = (id) => {
//     setSelectedMembers(prev => ({
//       ...prev,
//       [id]: prev[id] ? undefined : membersList.find(m => m.id === id).quantity ? 1 : true
//     }));
//   };

//   const adjustQuantity = (id, delta) => {
//     setSelectedMembers(prev => {
//       const count = prev[id] || 1;
//       const newCount = Math.max(1, count + delta);
//       return { ...prev, [id]: newCount };
//     });
//   };

//   return (
//     <div className="insurance-selection-page">
//       <header>
//         <div className="logo">policybazaar<span>.com</span></div>
//         <div className="tagline">HAR FAMILY HOGI INSURED</div>
//         <button className="help-btn">📞 Help</button>
//       </header>

//       <div className="progress-bar">
//         <div className="progress" style={{ width: '0%' }}></div>
//       </div>

//       <main>
//         <h1>
//           Find top plans for you with up to <span className="highlight">25% discount</span>
//         </h1>

//         <div className="gender-toggle">
//           <button className="active">Male</button>
//           <button>Female</button>
//         </div>

//         <h3>Select members you want to insure</h3>

//         <div className="members-grid">
//           <div className="member-card selected">
//             <div className="avatar"></div>
//             <div>Self</div>
//           </div>
//           <div className="member-card">
//             <div className="avatar"></div>
//             <div>Wife</div>
//           </div>
//           <div className="member-card selected">
//             <div className="avatar"></div>
//             <div>Son</div>
//             <div className="quantity-control">
//               <button>-</button>
//               <span>1</span>
//               <button>+</button>
//             </div>
//           </div>
//           <div className="member-card">
//             <div className="avatar"></div>
//             <div>Daughter</div>
//           </div>
//           <div className="member-card">
//             <div className="avatar"></div>
//             <div>Father</div>
//           </div>
//           <div className="member-card">
//             <div className="avatar"></div>
//             <div>Mother</div>
//           </div>
//         </div>

//         <div className="more-members">More members ⌄</div>

//         <button className="continue-btn">Continue ›</button>

//         <div className="footer-text">
//           By clicking on "Continue", you agree to our{' '}
//           <a href="#">Privacy Policy</a>,{' '}
//           <a href="#">Terms of Use</a> &{' '}
//           <a href="#">*Disclaimer</a>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default InsuranceSelection;

import React, { useState } from 'react';
import './InsuranceSelection.css';

const InsuranceSelection = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [childrenCount, setChildrenCount] = useState({
    son: 1,
    daughter: 1
  });

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleMemberSelect = (member) => {
    if (selectedMembers.includes(member)) {
      setSelectedMembers(selectedMembers.filter(m => m !== member));
    } else {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  const handleChildCountChange = (childType, increment) => {
    setChildrenCount(prev => ({
      ...prev,
      [childType]: Math.max(1, prev[childType] + (increment ? 1 : -1))
    }));
  };

  const getAvatar = (member) => {
    const avatars = {
      self: '👤',
      wife: '👩',
      son: '👦',
      daughter: '👧',
      father: '👴',
      mother: '👵'
    };
    return avatars[member.toLowerCase()] || '👤';
  };

  return (
    <div className="insurance-selection">
      <header className="insurance-selection-header">
        <div className="insurance-selection-logo-container">
          <div className="insurance-selection-logo">PB</div>
          <div className="insurance-selection-slogan">HAR FAMILY HOGI INSURED</div>
        </div>
        <button className="insurance-selection-help-button">Help</button>
      </header>

      <div className="insurance-selection-progress-bar">
        <div className="insurance-selection-progress" style={{ width: '0%' }}></div>
      </div>

      <h1 className="insurance-selection-headline">
        Find top plans for you with up to <span className="insurance-selection-discount">25% discount</span>
      </h1>

      <div className="insurance-selection-gender">
        <h3 className="insurance-selection-section-title">Gender</h3>
        <div className="insurance-selection-gender-options">
          <button
            className={`insurance-selection-gender-button ${selectedGender === 'male' ? 'insurance-selection-gender-selected' : ''}`}
            onClick={() => handleGenderSelect('male')}
          >
            Male
          </button>
          <button
            className={`insurance-selection-gender-button ${selectedGender === 'female' ? 'insurance-selection-gender-selected' : ''}`}
            onClick={() => handleGenderSelect('female')}
          >
            Female
          </button>
        </div>
      </div>

      <div className="insurance-selection-members">
        <h3 className="insurance-selection-section-title">Select members you want to insure</h3>
        <div className="insurance-selection-members-grid">
          {['Self', 'Wife', 'Son', 'Daughter', 'Father', 'Mother'].map((member) => (
            <div
              key={member}
              className={`insurance-selection-member-card ${selectedMembers.includes(member) ? 'insurance-selection-member-selected' : ''}`}
              onClick={() => handleMemberSelect(member)}
            >
              <div className="insurance-selection-member-avatar">{getAvatar(member)}</div>
              <div className="insurance-selection-member-name">{member}</div>
              {(member === 'Son' || member === 'Daughter') && (
                <div className="insurance-selection-child-counter">
                  <button 
                    className="insurance-selection-counter-button" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleChildCountChange(member.toLowerCase(), false);
                    }}
                  >
                    −
                  </button>
                  <span>{childrenCount[member.toLowerCase()]}</span>
                  <button 
                    className="insurance-selection-counter-button" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleChildCountChange(member.toLowerCase(), true);
                    }}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="insurance-selection-more-members">
        <button className="insurance-selection-more-members-button">More members ➤</button>
      </div>

      <button className="insurance-selection-continue-button">Continue</button>

      <footer className="insurance-selection-footer">
        By clicking on "Continue", you agree to our Privacy Policy, Terms of Use & Disclaimer
      </footer>
    </div>
  );
};

export default InsuranceSelection;
