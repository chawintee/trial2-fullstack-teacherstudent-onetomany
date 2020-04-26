const express = require('express');
const db = require('../models');
const router = express.Router();


//CREATE
router.post('/',(req,res)=>{
    const name = req.body.name;
    const surname = req.body.surname;

    db.teacher
    .create({
        name,surname,
    }).then(result=>{
        res.status(200).send(result);
    }).catch(err=>{
        res.status(400).send(err);
    })
})


//READ

router.get('/',(req,res)=>{
    db.teacher
    .findAll()
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err=>{
        res.status(400).send(err);
    })
})


//UPDATE (EDIT)

router.put('/:id',(req,res)=>{
    const targetId = req.params.id;
    const name = req.body.name;
    const surname = req.body.surname;

    db.teacher
    .update({
        name,surname,
    },{
        where: {id: targetId},
    })
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
    db.teacher
    .destroy({
        where:{id:targetId}
    })
    .then(result=>{
        res.status(204).send();
    })
    .catch(err=>{
        res.status(400).send(err);
    })
})



module.exports = router;