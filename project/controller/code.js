const pool = require('../model/database');
const rou = require('../route/routing')
const sendmail=require('../mail')

const sendMail  = async (req,res)=> {
  const {mail} = req.body;
  try{
    const data = await sendmail(mail)
    res.status(200).json('hi');
  }
  catch(err){
    console.log(err);
    
  }
}

const postsdata = async (req,res) => {
     
    const {id,name,lastname} = req.body ; 
    try {
        const [data] = await pool.execute('INSERT INTO frds (id,name,lastname) VALUES (?,?,?)',[id,name,lastname]);
        res.status(201).json({ message: 'Data added successfully', data })
    if (data.affectedRows){
        console.log(`Your data is posted`);
    }
    else{
        console.log("No Posted Data");
        }
      }
    catch(err){
        res.status(404).json({error:err.message})
      
        
    }
};

  let gettable = async (req,res) => {
   try {
      const [data] = await  pool.execute('SELECT * FROM frds');
      res.status(200).json({message: 'Data added successfully', data})
   if (data.length > 0){
     res.json(data[0]); }
   else {
    console.log("not in your table"); }
   }
   catch(err) {
     res.status(500).json({ error: err.message })
     
  }}

  let getrow = async (req,res) => {
    const id = parseInt(req.params.id) ;
    try{
      const [data] = await pool.execute('SELECT * FROM frds where id = ? ',[id])
      res.status(200).json([data])
      console.log(data);
      
    }
    catch(err){
      res.status(500).json(err)
    }
  }

  let putdata = async (req,res) =>{
    const {name,lastname} = req.body ;
    const id = parseInt(req.params.id);
    try{
      const [data] = await pool.execute('UPDATE frds SET name=?,lastname=? where id =?',[name,lastname,id])
      res.status(201).json([data])
    }
    catch(err){
      res.status(500).json(err)
    }
  }

  const deleterow = async(req,res)=>{
    const id = parseInt(req.params.id);
    try{
      const [data]= await pool.execute('DELETE FROM frds where id = ?',[id])
      res.status(200).json([data])
    }
    catch(err){
      res.status(500).json(err)
    }
  }

module.exports = {postsdata,gettable,getrow,putdata,deleterow,sendMail};



