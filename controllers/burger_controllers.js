let express = require('express');
let router = express.Router();

//Import the model (burgers.js) to use its database functions
let burger = require('../models/burger.js');

//Create routes and add logic
router.get('/', (req, res) => {
    burger.all(function(data) {
        let burObj = {
            burger: data
        };
        res.render('index', burObj)
    });
});

router.post('/api/burgers', function(req, res) {
  console.log(req.body)
    burger.create(['burger_name', 'devoured'], [req.body.burger_name, false], function(data) {
        res.json(data);
    })
})

router.put('/api/burgers/:id', function(req, res) {
    let condition = ' id = ' + req.params.id; 

    let obj = {
        devoured: 1
    }

    burger.update(obj, condition, function(data) {
        res.json(data);
    })
})

router.delete('/api/burgers/:id', function(req, res) {
    let condition = ' id = ' + req.params.id;
    burger.update(condition, (data) =>{
        console.log(data);
        if(data.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router;