///register and login endpoints test

const supertest = require("supertest");

const server = require("../api/server.js");

const auth = require('./auth-router.js')

const authModel = require('../users/users-model.js')


const db = require("../database/dbConfig.js");

//////////register

describe("auth-router.js", () => {
    beforeEach(async () => {
        await db("users").truncate();
    });

    describe("POST /register", () => {
        describe('insert()', () => {
            it('should register provided user and add into DB', async () => {
                await authModel.add({ username: "Jane", password: 123 })
                const user = await db('users');

                // test 1 checks if user has been added
                expect(user).toHaveLength(1)


                //test 2 checks wether the user data is correct

                expect(user).toEqual([{ id: 1, username: "Jane", password: "123" }])
            })
        })
    })


});


///login


//get user list test




describe("auth-router.js", () => {

    // test 1- returns 400 because route is restriced without credentials

    describe("POST /", () => {
        it("should give 400 error", () => {

            const user = { username: "Jane", password: 123 }

            return supertest(server)
                .post("/api/auth/login")
                .send(user)
                .then(res => {

                    expect(res.status).toBe(400);
                });
        });


    })

    //test 2 - returning JSON

    it("should return JSON", () => {
        return supertest(server)
            .post("/api/auth/login")
            .then(res => {

                expect(res.type).toMatch(/json/i);
            });
    });
});