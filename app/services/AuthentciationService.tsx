// // src/services/AuthenticationService.ts

// export const registerAPI = async (email: string, username: string, password: string) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({
//           data: {
//             token: "mockToken123",
//             userName: username,
//             email: email,
//           },
//         });
//       }, 1000); 
//     });
//   };
  
//   export const loginAPI = async (username: string, password: string) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (username === "testUser" && password === "testPassword") {
//           resolve({
//             data: {
//               token: "mockToken123",
//               userName: username,
//               email: "test@example.com",
//             },
//           });
//         } else {
//           reject("Invalid username or password");
//         }
//       }, 1000);
//     });
//   };
  