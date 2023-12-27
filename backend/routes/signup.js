const express = require('express');
const router = express.Router()
const bcrypt = require('bcrypt');
const mysql= require('../helpers/Sql_connection')


router.post('/signup', (req, res ) => {
    const username = req.body.username;
    const pword = req.body.pword;

        bcrypt.hash(pword, 10)
        .then(hash => {
            mysql.query('SELECT * FROM admin_ where username=?', [username], (err, result) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({message: "Internal server error"})
                }
                else if (result.length > 0) {
                    res.json({message: "Username already exists!"})
                }
                else {
                    mysql.query('INSERT INTO admin_(username, pword) VALUES (?, ?)', [username, hash ], (error, results) => {
                        if (error) {
                            console.log(error);
                            res.status(500).json({message: "Internal server error"})
                        }
                        else {
                            console.log(results)
                            res.status(200).json({message: "User Created Successfully"})
                        }
                    })
                }
            })
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({message:"Internal server Error"})
        })

})

module.exports = router