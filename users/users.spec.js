const supertest = require("supertest");

 const server = require("../api/server");



 describe("users-router.js", () => {

     // test 1- returns 401 because route is restriced without credentials

     describe("GET /", () => {
         it("should return 401 because no credentials yet", () => {
             return supertest(server)
                 .get("/api/users")
                 .then(res => {
                     // jest assertion
                     expect(res.status).toBe(401);
                 });
         });


     })

     //test 2 - returning JSON

     it("should return JSON", () => {
         return supertest(server)
             .get("/api/users")
             .then(res => {
                 // jest assertion
                 expect(res.type).toMatch(/json/i);
             });
     });
 });