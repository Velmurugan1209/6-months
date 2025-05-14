
import express from "express";
import mysql from "mysql2/promise";
 
const app = express();
app.use(express.json())
const PORT = 3000;
 
// DB CONNECTION SETUP
 
const dbconfig ={
    host : "localhost",
    user : "root",
    password : "Velupvm1618@",
    database : "first"
};
 
let connection;
 
async function setupDB(){
    try{
        connection = await mysql.createConnection(dbconfig)
 
        await connection.execute(`
            CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100),
            email VARCHAR(100)
            )`);
 
            console.log("CONNECTED AND TABLE CREATED")
 
    }catch(err){
        console.log("DB error", err)
    }
}
 
setupDB();
 
// ADD USER
 
app.post('/users', async (req,res)=>{
    const {name,email} = req.body
    try{
        const [result] = await connection.execute(" INSERT INTO users (name,email) VALUES (?,?) ", [name,email])
        res.status(200).json({message :"user added"})
    }catch(err){
        res.status(500).json({err: err.message})
    }
})
 
// Fetch Users
 
app.get('/users', async (req,res)=>{
    try{
        const [result ] = await connection.execute("SELECT * FROM  users");
        res.status(200).json(result)
    }catch(err){
        res.status(500).json({err: err.message})
    }
})
 
// Fetch users by id
 
app.get('/users/:id' ,async(req,res)=>{
    const {id} = req.params
    try{
        const [result] = await connection.execute("SELECT * FROM users WHERE id = ?", [id])
        if(result.length > 0)
            res.status(200).json(result)
        else{
            res.status(404).json({ message : "User Not Found"})
        }
 
    }catch(err){
        res.status(500).json({message : err.message})
    }
 
})
 
app.put("/users/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
       const data = await connection.execute("UPDATE users SET name = ? ,email = ? WHERE id = ?",
        [name, email, id]
      );
      res.status(200).json({ message: "User updated" , data });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
 
 
app.delete('/users/:id' , async(req,res)=>{
    const {id} = req.params
    try{
         await connection.execute('DELETE FROM users WHERE id=?', [id])
         res.status(200).json({message: " User Deleted Sucessfully"})
    }catch(err){
        res.status(500).json({err : err.message})
    }
})
 
app.listen('3000', (req,res)=>{
    console.log("Server is Running On Port 300")
})