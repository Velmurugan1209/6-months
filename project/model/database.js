const db = require('mysql2/promise');
 
const pool = db.createPool({
    host:'localhost',
    user:'root',
    password:'Velupvm1618@',
    database:'first'
});

async function sam() {

    
try{
 const data = await pool.execute(    'CREATE TABLE IF NOT EXISTS frds(id int, name varchar(200), lastname varchar(200) )'   ) }

 catch(err){
    console.error(err);
    }
}
sam();


module.exports = pool ;