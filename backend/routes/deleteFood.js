const express = require('express');
const fs = require('fs');
const router = express.Router()
const mysql= require('../helpers/Sql_connection')

router.post('/food_delete', (req, res ) => {
    const id = req.body.id
            mysql.query('SELECT * FROM food_ where id = ?', [id], (err, resul) => {
                if(err) {
                    console.log(err)
                    res.status(500).json({message:"Internal server error"})
                }else {
                    const imagePath = `../images/${resul[0].picture}`
                    fs.unlinkSync(imagePath);
                    mysql.query('Delete from  food_ where id = ? ', [id], (err, result) => {
                        if (err) {
                            console.log(err)
                            res.status(500).json({message: "Internal server error"})
                        }
                        else {
                            console.log(result)
                            res.json({message: "deleted"})
                        }
                    })
                }

            })
            

})

module.exports = router