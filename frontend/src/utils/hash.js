// // export async function generateHash(email, password) {
// //     const encoder = new TextEncoder();
// //     const data = encoder.encode(email + password);
// //     const hashBuffer = await crypto.subtle.digest('SHA-256', data);
// //     const hashArray = Array.from(new Uint8Array(hashBuffer));
// //     return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
// //   }
  


// export async function generateHash(email, password) {
//     const encoder = new TextEncoder();
//     const data = encoder.encode(email + password);
//     const hashBuffer = await crypto.subtle.digest('SHA-256', data);
//     const hashArray = Array.from(new Uint8Array(hashBuffer));
//     return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
//   }
  

export const generateHash = async (email, password) => {
    const msg = `${email}:${password}`;
    const msgBuffer = new TextEncoder().encode(msg);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  };
  