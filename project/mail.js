
const v = require('express');

const diten = require('dotenv');

const node = require('nodemailer')
const app = diten.config();


 const send = async (tosend) =>{
const transport = node.createTransport({
     service : 'gmail' ,   
    // post : 
    // secure :   
    auth : {
        user : process.env.EMAIL_USER ,
        pass : process.env.EMAIL_PASS
    } 
});

transport.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
const sen = transport.sendMail({
    from : 'velupvm1209@gmail.com',
    to : tosend ,
    subject: 'Nova Strid',
    text : 'is this okey',
    attachments : [
        {
            filename: 'SS.png',
            path : '../SS.png'
        }
    ]
} , (err,info) => {
    if (err){
        console.log(err);
    }
    else{
        console.log(info);
    }
}
)

 }


module.exports = send  ;


