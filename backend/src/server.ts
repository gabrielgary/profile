import app from './app.js'
const PORT=4200
const HOST="localhost"

app.listen(PORT,HOST,(error)=>{
    if (error)  console.log(error);
    console.log(`server running in http://${HOST}:${PORT}/`);
    
    

})