
const express = require('express');
var app = express();
const request = require('supertest');
 describe("/POST Create User",function(){
         it('Created a user', function(done) {
          request(app.listen()).post('/auth')
         .send({name: "Koala",email: "lorette@hotmail.com", password: "12345678" })
         .expect(200)
         .end(function(err,res){
         done();
        });});
});
