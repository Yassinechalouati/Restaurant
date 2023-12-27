const express = require('express');
const router = express.Router()
const mysql= require('../helpers/Sql_connection')

router.post('/food_fetch', (req, res ) => {
            mysql.query('SELECT * FROM food_ ', (err, result) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({message: "Internal server error"})
                }
                else if (result.length >= 0) {
                    res.json({message: result})
                }
            })

})

module.exports = router