var express = require('express');
var router = express.Router();
var register = require('../model/register');

/* GET home page. */
router.post('/register',async function(req, res, next) {

    try {

      var password = req.body.password;
      var confirm_password = req.body.confirm_password;

      const getregister = await register.create(req.body);

      if (password == confirm_password) {
        
        res.status(201).json({

          data:getregister

        })

      } else {

        console.log('error');
        
      }
      
    } catch (error) {
      
      res.send(error.message)

    }

});

router.post('/login',async function(req, res, next) {

  try {

    var password = req.body.password;

    const getlogin = await register.findOne({ email : req.body.email });
    
    if (password == getlogin.password) {

      res.status(201).json({

        data:getlogin
  
      })
      
    } else {

      console.log('password is not match');
      
    }
    
  } catch (error) {
    
    res.send(error.message)

  }

});

module.exports = router;
