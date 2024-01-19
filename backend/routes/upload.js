const express = require('express');
const multer = require('multer'); 
const path = require('path');
const router = express.Router()
const mysql = require('../helpers/Sql_connection')

let uploadedFileName

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../images'); 
  },
  filename: (req, file, cb) => {
    uploadedFileName= Date.now() + path.extname(file.originalname)
    cb(null, uploadedFileName); 
  },
});

const upload = multer({ storage });



router.post('/upload', upload.single('file'), (req, res) => {
  const name= req.body.name
  const price = req.body.price

  mysql.query(`INSERT INTO food_(name, price, picture) VALUES (?, ?, ?) `, [name, price, uploadedFileName], (err, result) => {
    if (err) {
        res.status(401).json({ message: 'Internal Server Error' })
    }

    })
    
  res.json({ message: 'File uploaded successfully', filename: uploadedFileName });
});


module.exports =  router