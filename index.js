// ================================================= PROMISES
// const value = true;

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (value) {
//       resolve("data 1");
//     } else {
//       reject("data 1 not found");
//     }
//   }, 3000);
// }); // 3s

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (value) {
//       resolve("data 2");
//     } else {
//       reject("data 2 not found");
//     }
//   }, 2000);
// }); // 2s

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (value) {
//       resolve("data 3");
//     } else {
//       reject("data 3 not found");
//     }
//   }, 1000);
// }); // 1s

// promise1
//   .then((response) => {
//     console.log(response);
//     promise2
//       .then((response2) => {
//         console.log(response2);
//         promise3
//           .then((response3) => {
//             console.log(response3);
//           })
//           .catch((message3) => console.log(message3));
//       })
//       .catch((message2) => console.log(message2));
//   })
//   .catch((message) => console.log(message))
//   .finally(() => console.log("finished promise1")); // finally (optional)

// ================================================= ASYNC AWAIT
// const indicator = false;

// const promise = () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (indicator) {
//         resolve("data 1");
//       } else {
//         reject({ message: "not found", status: 404 });
//       }
//     }, 3000);
//   });
//   return promise;
// };

// const funcWaiter = async () => {
//   // try {
//   //   const data = await promise()
//   //   console.log(data)
//   // } catch(error) {
//   //   console.log("error message:", error.message)
//   // }
// };

// funcWaiter();
