const express = require('express');
const router = express.Router()
const mysql= require('../helpers/Sql_connection')

router.post('/food_delete', (req, res ) => {
    const id = req.body.id
            mysql.query('Delete from  food_ where id = ? ', [id], (err, result) => {
                if (err) {
                    console.log(err)
                    res.status(500).json({message: "Internal server error"})
                }
                else if (result.length >= 0) {
                    res.json({message: "deleted"})
                }
            })

})

module.exports = router