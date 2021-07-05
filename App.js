const express = require("express");
const app = new express();
const path = require('path')
//app.set('port', 8080)

app.use(express.static(path.join(__dirname, 'public')))

//console.log(__dirname)

app.get('/', (req, resp)=>{
    resp.send("HOLA BENJAMIN")
})



app.listen(8080, ()=>{
   console.log('la aplicacion esta en el port 8080')
})
