const express = require('express');
const multer = require('multer'); // Middleware for handling file uploads
const path = require('path');
const router = express.Router()
const mysql = require('../helpers/Sql_connection')

// Set up multer to handle file uploads
let uploadedFileName

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../images'); // Specify the destination folder
  },
  filename: (req, file, cb) => {
    uploadedFileName= Date.now() + path.extname(file.originalname)
    cb(null, uploadedFileName); // Generate a unique filename
  },
});

const upload = multer({ storage });


// Handle file upload
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