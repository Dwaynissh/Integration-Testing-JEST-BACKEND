// import {
//   createLogic,
//   updateOneUserLogic,
//   viewAllUserLogic,
//   viewOneUserLogic,
// } from "../controller/userCrud";

// describe("checking our index logic", () => {
//   test("check our create logic", () => {
//     let data = Array.from({ length: 6 }, () => {
//       return {
//         id: Math.floor(Math.random() * 100),
//         name: Math.ceil(Math.random() * 1000).toString(),
//         score: Math.ceil(Math.random() * 1000),
//       };
//     });

//     let value = {
//       id: Math.floor(Math.random() * 100),
//       name: Math.ceil(Math.random() * 1000).toString(),
//       score: Math.ceil(Math.random() * 1000),
//     };

//     let arrObj: Array<{ name: string; score: number; age?: number }> = [
//       { name: "Peter", score: 49 },
//       { name: "James", score: 80 },
//       { name: "Jemima", score: 94, age: 28 },
//     ];

//     expect(createLogic(data, value)).toEqual(
//       expect.objectContaining({
//         id: expect.any(Number),
//         name: expect.any(String),
//         score: expect.any(Number),
//       })
//     );
//   });

//   test("check our view all user's logic", () => {
//     let data = Array.from({ length: 6 }, () => {
//       return {
//         id: Math.floor(Math.random() * 100),
//         name: Math.ceil(Math.random() * 1000).toString(),
//         score: Math.ceil(Math.random() * 1000),
//       };
//     });

//     let value = {
//       id: Math.floor(Math.random() * 100),
//       name: Math.ceil(Math.random() * 1000).toString(),
//       score: Math.ceil(Math.random() * 1000),
//     };

//     expect(viewAllUserLogic(data)).toEqual(
//       expect.arrayContaining([
//         {
//           id: expect.any(Number),
//           name: expect.any(String),
//           score: expect.any(Number),
//         },
//       ])
//     );
//   });

//   test("check our create logic", () => {
//     let count = 0;
//     let data = Array.from({ length: 6 }, () => {
//       count++;

//       return {
//         id: count,
//         name: Math.ceil(Math.random() * 1000).toString(),
//         score: Math.ceil(Math.random() * 1000),
//       };
//     });

//     expect(viewOneUserLogic(data, 1)).toEqual({
//       id: expect.any(Number),
//       name: expect.any(String),
//       score: expect.any(Number),
//     });
//   });

//   test("check our update one user logic", () => {
//     let count = 0;
//     let data = Array.from({ length: 6 }, () => {
//       count++;

//       return {
//         id: count,
//         name: Math.ceil(Math.random() * 1000).toString(),
//         score: Math.ceil(Math.random() * 1000),
//       };
//     });

//     expect(updateOneUserLogic(data, 1)).toEqual({
//       id: expect.any(Number),
//       name: expect.any(String),
//       score: expect.any(Number),
//     });
//   });
// });
