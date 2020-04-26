const express = require('express');
const db = require('../models');
const router = express.Router();

//CREATE
router.post('/',(req,res)=>{
    const name = req.body.name;
    const surname = req.body.surname;
    const room = req.body.room; 
    const year = req.body.year;
    const number = req.body.number;

    db.student
    .create({
        name,surname,room,year,number,
    })
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(err=>{
        res.status(400).send(err);
    });
})



//READ 

router.get('/',(req,res)=>{
    db.student
    .findAll()
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(err=>{
        res.status(400).send(err);
    })

})


//UPDATE(EDIT)

router.put('/:id',(req,res)=>{
    const targetId = req.params.id;
    const name = req.body.name;
    const surname = req.body.surname;
    const room = req.body.room; 
    const year = req.body.year;
    const number = req.body.number;

    db.student
    .update({
        name,surname,room,year,number,
    },
        {where:{id: targetId}}
    )
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(err=>{
        res.status(400).send(err);
    })

    
})


//DELETE
router.delete('/:id',(req,res)=>{
    const targetId = req.params.id;
    db.student
    .destroy({
        where:{id:targetId}
    })
    .then(result=>{
        res.status(204).send()
    })
    .catch(err=>{
        res.status(400).send(err)
    })
})











module.exports = router;