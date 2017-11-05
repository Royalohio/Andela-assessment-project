var router = require('express').Router();
    userLog = require('./model/user_model');


function getUser(res){
    userLog.find(function(err, logs){
        if (err){
            res.send(err);
        }
        res.json(logs);
        console.log(logs)
        
    });
    
};

    router.get('/', function(req, res){

        res.write('hey Andela');
    })



    router.post('/users', function(req, res){
    
    //var user = new UserLog(
      userLog.create({
         name : req.body.name,
         reg_number : req.body.reg_number,
         department  :  req.body.department,
         course : req.body.course,
         no_of_years : req.body.no_of_years
    },
      

        function (err, log){
        if (err)
            res.send(err);
            
        getUser(res);

      /* user.save().then(function(err, res){
            if (err){
                res.status(500).send(err)
            }
            res.write('user details successfully saved');
        })
*/
    })


 })

   router.get('/users/:name', function(req, res){
       userLog.findOne({
          // reg_number: req.params.reg_number,
           name: req.params.name
        },
   
        function(err, log){
            if(err)
            res.send(err);
            res.json(log);

        })

        })
       
   
    
     router.get('/users', function(req, res){
         getUser(res);
      });


      router.patch('/users/:name', function(req, res){
          userLog.findOne({
              name: req.params.name
          },
            userLog.update({
                name: name,
                reg_number: reg_number,
                course: course,
                department: department,
                no_of_years: no_of_years
             }, function(err, log){
                 if(err){
                     res.send(err)
                 }
                 
                 else {
                     res.json(log)
                 }
             }

        )     
        )
       });
      
    router.delete('/users/:name', function(req, res){
        userLog.remove({
                name: req.params.name
        },
        function (err, log){
            if (err)
                res.send(err);
            
            getUser(res);
        }
    )
     });



module.exports = router;


