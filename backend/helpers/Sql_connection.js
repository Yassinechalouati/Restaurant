const mysql=require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root123',
    database:'restau',
    charset: 'utf8mb4',
})

connection.connect() 


connection.query('Select * from admin_', (err, rows, fields) => {
    if(err) throw err
    
    console.log('ConnectedDB')
})

module.exports = connection