
const db = require('../models/index');
const {User} = db ;

 
  const postdata =  async (req,res) => {
    const {name,age} = req.body ; 
    try{
        const newcreate = await User.create({name,age } )

        res.status(200).json("create data is created");        
       }
       catch(Error){
        res.send(500).send(Error)
       };
}
const postbulk = async (req,res)=>{
    const users = req.body ;
    try{
        const data = await User.bulkCreate(users)
        res.status(200).json("Your bulk post create Success")
    }
    catch(err){
        res.status(404).json(err)
    }
} 

const getdatas = async (req,res) => {
    try{
        const get =await User.findAll({attributes:['id','name','age'],order:[['age','ASC']],limit:5,offset:3})
        res.status(200).json(get)
    }
    catch(Error) {
        res.send(Error)
    }
}

const getdata = async (req,res) => {

    const {id} = req.params;
    try{

        const data = await User.findByPk(id);

        if(data)
            {
                res.status(200).json(data)
            }
        else
            {
            res.status(400).json({message:"User not found"})
            }
       }
    catch(err){
        res.status(400).json(err.message)
        
    }
}

const getname = async(req,res)=>{
    const {name} = req.body ;
    try{
        const data = await User.findOne( { where:{name} } )
        if(data){
            res.status(200).json(data)
        }
        else{
            res.status(404)
        }
    }
    catch(err){
        res.status(500).json(err.message)
    }
}

const updatedata = async(req,res)=>{
    const {id} = req.params ;
    const {name,age} = req.body ;
    try{
        const data = await User.update({name,age},{where:{id}})
        res.status(200).json(data)
    }
    catch(err){
        res.status(404).send(err)
    }
}

const destroy = async (req,res)=>{
    const {id} = req.params ;
    const {name} = req.body ;
    try{
        const data = await User.destroy({where:{name}})
        res.status(200).json(data)
    }
    catch(err){
        res.status(404).json(err)
    }
}
module.exports = {getdatas,postdata,getdata,getname,updatedata,postbulk,destroy};   


