//requirement de express
const express=require('express');
//creation objet route a partir de express
const router=express.Router();
const path=require('path');
//definition de nos different route  get et post
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"../index.html"))
})

router.get('/personne',(req,res)=>{
    res.json("Personne page");
})

router.get('/param/api?',(req,res)=>{
    const age=req.param("age");
    const adresse=req.param("adresse") 
    res.json({
        age:age,
        adresse:adresse
    })
})

router.get('/param1/:id/:name',(req,res)=>{
    const id=req.params.id;
    const name=req.params.name;
    res.json({
        id:id, 
        name:name
    })
})

router.get('/profil',(req,res)=>{
    res.json("Profil Page")
})



router.get('/traveller',(req,res,next)=>{
    const head=req.headers['x-class'];
    if(head==="class"){
        next();
    }else{
        res.status(404).json({
            error:"Error : you dont have access"
        })
    }
    
},(req,res)=>{
    res.json({
        msg:"ok"
    })
})


router.post('/postUser',(req,res)=>{
    //console.log("REQ : ",req.body)
    const {nom,prenom}=req.body;
    const user={
        nom,
        prenom
    }
    res.json({
        msg:"Nous avons recu votre message",
        data: user
    })

    console.log("Headers : ",req.headers['x-testing'])
    
    console.log("Body : ",req.body )
})



//exportation de la route
module.exports=router;