const { Router } = require('express');
const router = Router();
const Request = require('request');

router.get('/users', (req, res) => {
    Request.get("https://jsonplaceholder.typicode.com/users", (error, response, body) => {
        if (error) {
            
        }
    })
})