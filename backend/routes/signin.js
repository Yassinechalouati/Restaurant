const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const mysql = require('../helpers/Sql_connection')

router.post('/signin', (req, res) => {
    const username = req.body.username
    const pword = req.body.pword

    mysql.query('SELECT * FROM admin_ where BINARY username=?', [username], (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).json ({message :'Internal server error'})
        }
        else if (result.length == 0 ){
            console.log(result)
            res.json({message: "Wrong credentials or the User was deactivated !"})
        }
        else {
            const user = result[0]
            bcrypt.compare(pword, user.pword)
            .then(match => {
                if (!match)  {
                    console.log(user)
                    res.json({message:"Wrong credentials or the User was deactivated !"})
                }
                else {
                    res.status(200).json({message: "Welcome "+user.username})

                }
            })
            .catch (err => {
                console.error(err)
                res.status(500).json({message:"Internal server Error"})
            })
        }
    })
})

module.exports = router