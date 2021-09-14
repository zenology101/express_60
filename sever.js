//////////////////////////////////
//Set-up - import deps and create app object 
//////////////////////////////////////////
const express = require("express")
const WebServer = express()

//////////////////////////////////////////////
//declare middleware (declared before route)
///////////////////////////////////////////// 

//the .use is telling the program to run the middleware function before going to the route
//.static lets you name a folder that can be a place to hold available files and connect them to your sever 
//if there is a index.html file in public and you don't specify a route it will go for the html file  
WebServer.use(express.static("public")) 


////////////////////////////////////////////////////
//Declase routes and routers 
///////////////////////////////////////////////////
//the .all listens to all request, so it could be a get, post, delete, etc. 
// the * means to catch all route (usually good for a error page)
//so the code is saying for any request method (.all) and for any url ("*") this is the function {} to run
//the function always get 2 things request and response 

//this is a get route
WebServer.get("/cheese", (req, res) => {
    res.send("<h1> Hello World</h1>")
}) 

WebServer.get("/render/:variable", (req,res) => {
    res.render("render.ejs", {v: req.params.variable, q: req.query})
})


WebServer.all("*", (req, res)=>{
    //res.send("It works!")

    //we can respond with what the req parameter holds 
    res.json({
        headers: req.headers,
        url: req.url,
        host: req.hostname,
        method: req.method
    })
})

///////////////////////////////////////////
//last thing to set up your listener
/////////////////////////////////////////////
//we are telling the webserver to listen to post 7000 and run the function
WebServer.listen(7000, () => console.log("the webserver is listening on port 7000"))

