const express = require('express');
const router = express.Router();
const{getdata,postdata, getdatas, getname, updatedata, postbulk, destroy}=require('../controller/users');


router.post('/post', postdata );
router.post('/postbulk', postbulk);
router.get('/getall', getdatas);
router.get('/getby/:id', getdata);
router.get('/get', getname);
router.put('/update/:id', updatedata)
router.delete('/destroy', destroy)
// router.update('/update', updatedata);
// router.delete("/delete",deletedata );


module.exports = router ;