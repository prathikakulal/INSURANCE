
// import React, { useState } from 'react';
// import './InsuranceSelection.css';

// const InsuranceSelection = () => {
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [selectedMembers, setSelectedMembers] = useState([]);
//   const [showAllMembers, setShowAllMembers] = useState(false);
//   const [childrenCount, setChildrenCount] = useState({
//     son: 1,
//     daughter: 1
//   });

//   const handleGenderSelect = (gender) => {
//     setSelectedGender(gender);
//   };

//   const handleMemberSelect = (member) => {
//     if (selectedMembers.includes(member)) {
//       setSelectedMembers(selectedMembers.filter(m => m !== member));
//     } else {
//       setSelectedMembers([...selectedMembers, member]);
//     }
//   };

//   const handleChildCountChange = (childType, increment) => {
//     setChildrenCount(prev => ({
//       ...prev,
//       [childType]: Math.max(1, prev[childType] + (increment ? 1 : -1))
//     }));
//   };

//   const toggleShowAllMembers = () => {
//     setShowAllMembers(!showAllMembers);
//   };

//   const getAvatar = (member) => {
//     const avatars = {
//       self: '👤',
//       wife: '👩',
//       son: '👦',
//       daughter: '👧',
//       father: '👴',
//       mother: '👵',
//       grandfather: '👴',
//       grandmother: '👵',
//       'father-in-law': '👴',
//       'mother-in-law': '👵'
//     };
//     return avatars[member.toLowerCase()] || '👤';
//   };

//   const basicMembers = ['Self', 'Wife', 'Son', 'Daughter', 'Father', 'Mother'];
//   const additionalMembers = ['Grandfather', 'Grandmother', 'Father-in-law', 'Mother-in-law'];
//   const allMembers = [...basicMembers, ...additionalMembers];

//   return (
//     <div className="insurance-selection">
//       <header className="insurance-selection-header">
//         <div className="insurance-selection-logo-container">
//           <div className="insurance-selection-logo">PB</div>
//           <div className="insurance-selection-slogan">HAR FAMILY HOGI INSURED</div>
//         </div>
//         <button className="insurance-selection-help-button">Help</button>
//       </header>

//       <div className="insurance-selection-progress-bar">
//         <div className="insurance-selection-progress" style={{ width: '0%' }}></div>
//       </div>

//       <h1 className="insurance-selection-headline">
//         Find top plans for you with up to <span className="insurance-selection-discount">25% discount™</span>
//       </h1>

//       <div className="insurance-selection-gender">
//         <div className="insurance-selection-gender-options">
//           <button
//             className={`insurance-selection-gender-button ${selectedGender === 'male' ? 'insurance-selection-gender-selected' : ''}`}
//             onClick={() => handleGenderSelect('male')}
//           >
//             Male
//           </button>
//           <button
//             className={`insurance-selection-gender-button ${selectedGender === 'female' ? 'insurance-selection-gender-selected' : ''}`}
//             onClick={() => handleGenderSelect('female')}
//           >
//             Female
//           </button>
//         </div>
//       </div>

//       <div className="insurance-selection-members">
//         <h3 className="insurance-selection-section-title">Select members you want to insure</h3>
//         <div className="insurance-selection-members-grid">
//           {(showAllMembers ? allMembers : basicMembers).map((member) => (
//             <div
//               key={member}
//               className={`insurance-selection-member-card ${selectedMembers.includes(member) ? 'insurance-selection-member-selected' : ''}`}
//               onClick={() => handleMemberSelect(member)}
//             >
//               <div className="insurance-selection-member-avatar">{getAvatar(member)}</div>
//               <div className="insurance-selection-member-name">{member}</div>
//               {(member === 'Son' || member === 'Daughter') && (
//                 <div className="insurance-selection-child-counter">
//                   <button 
//                     className="insurance-selection-counter-button" 
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleChildCountChange(member.toLowerCase(), false);
//                     }}
//                   >
//                     −
//                   </button>
//                   <span>{childrenCount[member.toLowerCase()]}</span>
//                   <button 
//                     className="insurance-selection-counter-button" 
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleChildCountChange(member.toLowerCase(), true);
//                     }}
//                   >
//                     +
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="insurance-selection-more-members">
//         <button 
//           className="insurance-selection-more-members-button"
//           onClick={toggleShowAllMembers}
//         >
//           {showAllMembers ? 'Show less ▲' : 'More members ▼'}
//         </button>
//       </div>

//       <button className="insurance-selection-continue-button">Continue ▼</button>

//       <footer className="insurance-selection-footer">
//         By clicking on "Continue", you agree to our Privacy Policy, Terms of Use & "Disclaimer"
//       </footer>

//       <div className="insurance-selection-stats">
//         <div className="insurance-selection-stat">
//           <div className="insurance-selection-stat-number">9.7 crore</div>
//           <div className="insurance-selection-stat-label">Registered Consumers</div>
//         </div>
//         <div className="insurance-selection-stat">
//           <div className="insurance-selection-stat-number">51</div>
//           <div className="insurance-selection-stat-label">Insurance Partners</div>
//         </div>
//         <div className="insurance-selection-stat">
//           <div className="insurance-selection-stat-number">4.9 crore</div>
//           <div className="insurance-selection-stat-label">Policies Sold</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InsuranceSelection;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './InsuranceSelection.css';

const InsuranceSelection = () => {
  // Member selection state
  const navigate = useNavigate();

  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [showAllMembers, setShowAllMembers] = useState(false);
  const [childrenCount, setChildrenCount] = useState({
    son: 1,
    daughter: 1
  });

  // Age selection state
  const [showAgeSelection, setShowAgeSelection] = useState(false);
  const [memberAges, setMemberAges] = useState({
    Self: 28,
    Wife: 30,
    Son: 5,
    Daughter: 5,
    Father: 60,
    Mother: 58,
    Grandfather: 75,
    Grandmother: 72,
    'Father-in-law': 65,
    'Mother-in-law': 63
  });

  // Member selection handlers
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

  const toggleShowAllMembers = () => {
    setShowAllMembers(!showAllMembers);
  };

  // Age selection handlers
  const handleAgeChange = (member, age) => {
    setMemberAges(prev => ({
      ...prev,
      [member]: parseInt(age) || 0
    }));
  };

  const handleContinueFromMemberSelection = () => {
    if (selectedMembers.length === 0) {
      alert('Please select at least one member to insure');
      return;
    }
    setShowAgeSelection(true);
  };

  const handleContinueFromAgeSelection = () => {
    // Here you would typically navigate to the next page or submit the data
    console.log('Selected members with ages:', {
      members: selectedMembers,
      ages: memberAges,
      gender: selectedGender
    });
    navigate('/select-city');
    // For demo purposes, we'll just go back to member selection
    setShowAgeSelection(false);
  };

  const handleBackFromAgeSelection = () => {
    setShowAgeSelection(false);
  };

  const getAvatar = (member) => {
    const avatars = {
      self: '👤',
      wife: '👩',
      son: '👦',
      daughter: '👧',
      father: '👴',
      mother: '👵',
      grandfather: '👴',
      grandmother: '👵',
      'father-in-law': '👴',
      'mother-in-law': '👵'
    };
    return avatars[member.toLowerCase()] || '👤';
  };

  const basicMembers = ['Self', 'Wife', 'Son', 'Daughter', 'Father', 'Mother'];
  const additionalMembers = ['Grandfather', 'Grandmother', 'Father-in-law', 'Mother-in-law'];
  const allMembers = [...basicMembers, ...additionalMembers];

  return (
    <div className="insurance-selection">
      {showAgeSelection ? (
        /* Age Selection Screen */
        <div className="insurance-age-selection">
          <header className="insurance-age-selection-header">
            <button 
              className="insurance-age-selection-back-button"
              onClick={handleBackFromAgeSelection}
            >
              <FiArrowLeft size={20} />
            </button>
            <div className="insurance-age-selection-progress-bar">
              <div className="insurance-age-selection-progress" style={{ width: '25%' }}></div>
              <span className="insurance-age-selection-progress-text">25% complete</span>
            </div>
          </header>

          <h1 className="insurance-age-selection-title">Select age of covered member(s)</h1>

          {selectedMembers.map(member => (
            <div key={member} className="insurance-age-selection-input-group">
              <label className="insurance-age-selection-label">
                {member === 'Son' || member === 'Daughter' 
                  ? `${member}'s age (${childrenCount[member.toLowerCase()]} ${childrenCount[member.toLowerCase()] > 1 ? 'children' : 'child'})`
                  : `${member}'s age`}
              </label>
              <select
                value={memberAges[member]}
                onChange={(e) => handleAgeChange(member, e.target.value)}
                className="insurance-age-selection-select"
              >
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i} value={i}>{i} yr</option>
                ))}
              </select>
            </div>
          ))}

          <div className="insurance-age-selection-side-info">
            <h3>Get best pricing</h3>
            <p>This will help us in calculating the premium & discounts for your family member(s)</p>
          </div>

          <button 
            className="insurance-selection-continue-button"
            onClick={handleContinueFromAgeSelection}
          >
            Continue 
          </button>

          <div className="insurance-selection-stats">
            <div className="insurance-selection-stat">
              <div className="insurance-selection-stat-number">9.7 crore</div>
              <div className="insurance-selection-stat-label">Registered Consumers</div>
            </div>
            <div className="insurance-selection-stat">
              <div className="insurance-selection-stat-number">51</div>
              <div className="insurance-selection-stat-label">Insurance Partners</div>
            </div>
            <div className="insurance-selection-stat">
              <div className="insurance-selection-stat-number">4.9 crore</div>
              <div className="insurance-selection-stat-label">Policies Sold</div>
            </div>
          </div>
        </div>
      ) : (
        /* Member Selection Screen */
        <>
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
            Find top plans for you with up to <span className="insurance-selection-discount">25% discount™</span>
          </h1>

          <div className="insurance-selection-gender">
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
              {(showAllMembers ? allMembers : basicMembers).map((member) => (
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
            <button 
              className="insurance-selection-more-members-button"
              onClick={toggleShowAllMembers}
            >
              {showAllMembers ? 'Show less ▲' : 'More members ▼'}
            </button>
          </div>

          <button 
            className="insurance-selection-continue-button"
            onClick={handleContinueFromMemberSelection}
          >
            Continue ▼
          </button>

          <footer className="insurance-selection-footer">
            By clicking on "Continue", you agree to our Privacy Policy, Terms of Use & "Disclaimer"
          </footer>

          <div className="insurance-selection-stats">
            <div className="insurance-selection-stat">
              <div className="insurance-selection-stat-number">9.7 crore</div>
              <div className="insurance-selection-stat-label">Registered Consumers</div>
            </div>
            <div className="insurance-selection-stat">
              <div className="insurance-selection-stat-number">51</div>
              <div className="insurance-selection-stat-label">Insurance Partners</div>
            </div>
            <div className="insurance-selection-stat">
              <div className="insurance-selection-stat-number">4.9 crore</div>
              <div className="insurance-selection-stat-label">Policies Sold</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InsuranceSelection;