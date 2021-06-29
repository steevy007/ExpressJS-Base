//requirement dependance express
const express=require('express');
//creation object express
const app=express();
//creation port ecoute server
const PORT=process.env.PORT || 8000;
//importation route
const router=require('./routes/routes');
//requirement bodyParser dependance
const bodyParser=require('body-parser');
 //utilisation de bodyParser
app.use(bodyParser())
//utilisation de nos route importer
app.use('/',router);
//route pour les url non defini
app.get('*',(req,res)=>{
    res.json("Page Not Found")
})
//ecoute du server
app.listen(PORT,(req,res)=>{
    console.log(`Server demare sur le por ${PORT}`);
});