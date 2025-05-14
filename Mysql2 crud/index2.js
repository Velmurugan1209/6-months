const ex = require('express')
const mysql = require('mysql2/promise')
let connect ;
const app = ex();
app.use(ex.json());



const port = 5000;
const CC = {
  host : 'localhost',
  user : 'root',
  password : 'Velupvm1618@',
  database : 'first',
}

 async function call (){ 
  try {
    connect = await mysql.createConnection(CC);

   await connect.execute(
      `CREATE TABLE IF NOT EXISTS VELU(
          SNO INT ,
          FIRSTNAME VARCHAR(200),
          LASTNAME VARCHAR(200),
          AGE INT
      )`,

      
    );
    console.log("CONNECTION SUCCESSFULL AND TABLE CREATED");
  }
  catch(err){
    console.log("Its Has Some Error" , err);
  }
}
  call();

  app.get('/',async(req,res)=> {
      try


  }

  app.get ('/', (req,res) => res.sendFile(__dirname +'index.html') );

app.post('/',(req,res) => res.send ("post data is okey"));

app.put('/',(req,res)=> res.send ("Put data okey"));




  app.listen(port,()=>
    console.log("Server is Created and running")
  );
 



