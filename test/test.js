const supertest = require("supertest");

var server = supertest.agent("http://localhost:5000");

describe("SAMPLE unit test", () => {
    it("should return homepage", (done) => {
        server
        .get("/")
        .expect("Content-type",/test/)
        .expect(200)
        .end(function (err, res) {
            done();
        });
    });
});