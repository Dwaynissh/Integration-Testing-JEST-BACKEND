// import { number } from "joi";

// test("expected", () => {
//   expect(true).toBe(true);
// });

// // For Boolean
// describe("testing for boolean", () => {
//   test("boo1", () => {
//     expect(true).toBe(true);
//   });
//   test("boo2", () => {
//     expect(true).toBe(true);
//   });
//   test("boo3", () => {
//     expect(true).toBe(true);
//   });
// });

// // For number
// describe("testing for number", () => {
//   test("num1", () => {
//     expect(1).toBe(1);
//   });
//   test("num2", () => {
//     expect(2).toBe(2);
//   });
//   test("num3", () => {
//     expect(5).toBe(5);
//   });
// });

// // For Not a number
// describe("testing for number", () => {
//   test("num1", () => {
//     expect(1).not.toBe(2);
//   });
//   test("num2", () => {
//     expect(2).toBe(2);
//   });
//   test("num3", () => {
//     expect(5).toBe(5);
//   });
//   test("num4", () => {
//     expect(1).not.toBeUndefined();
//   });
//   test("num5", () => {
//     expect(1).not.toBeNull;
//   });
// });

// // For a Function
// describe("testing for number", () => {
//   let val = (a: number, b: number) => {
//     return a + b;
//   };
//   test("num1", () => {
//     expect(val(1, 1)).toBe(2);
//   });
// });

// // For  an Array
// describe("Working with Arrays", () => {
//   let name = ["Prince", "Ahmed", "Joan"];
//   name.push("Wisdom");

//   expect(name).toContain("Prince");
//   expect(name).toContain("Wisdom");
//   expect(name.length).toEqual(4);

//   // regular expression
//   //   expect(name).toContain(/Prince/i);
//   //
// });

// For  an Array
// describe("Items of strings of Array", () => {
//   test("test if a name exists in an Array", () => {
//     let name = ["peter", "Joan", "Tobe", "Regina"];

//     name.push("Wisdom");

//     expect(name[0]).toMatch(/Peter/i);
//     expect(name.length).toBe(name.length);
//   });
// });

// describe("working with objects", () => {
//   test("test if a name exists in an Array", () => {
//     let name = ["peter", "Joan", "Tobe", "Regina"];

//     let obj: { name: string; score: number } = { name: "Peter", score: 49 };

//     expect(obj).toEqual({ name: "Peter", score: 49 });

//     expect(obj).toEqual({
//       name: expect.any(String),
//       score: expect.any(Number),
//     });
//   });
// });

// describe("working with objects of Array", () => {
//   test("test if a name exists in an Array", () => {
//     let name = ["peter", "Joan", "Tobe", "Regina"];

//     let obj: { name: string; score: number } = { name: "Peter", score: 49 };

//     let arrObj: Array<{ name: string; score: number; age?: number }> = [
//       { name: "Peter", score: 49 },
//       { name: "James", score: 80 },
//       { name: "Jemima", score: 94, age: 28 },
//     ];

//     expect(obj).toEqual({ name: "Peter", score: 49 });

//     expect(obj).toEqual(
//       expect.objectContaining({
//         name: expect.any(String),
//         score: expect.any(Number),
//       })
//     );

//     expect(obj).toEqual({
//       name: expect.any(String),
//       score: expect.any(Number),
//     });

//     expect(arrObj).toEqual(expect.arrayContaining([]));

//     expect(arrObj).toEqual(
//       expect.arrayContaining([
//         {
//           name: expect.any(String),
//           score: expect.any(Number),
//           age: expect.any(Number),
//         },
//       ])
//     );
//   });
// });
