import type { Application, Response, Request } from "express";
import express from "express";
import helmet from "helmet";
import cors from 'cors'
import router from "./routers/index.routers.js";
///*import dotenv from
// variables

// helmet, cors, json
const app: Application = express();
app.use(helmet());
app.use(cors({
  methods:"GET, POST, PUT, PATCH, DELETE",
  origin:"http://localhost:5173/",
  allowedHeaders:"*",

}))
app.use(
  express.json({
    strict: true,
  }),
);

app.use(express.urlencoded({extended:true}))

// routes
app.use("/api/v1",router)
app.use("/hearth",(req,res)=>{
  res.status(200).json({
    info:"Teste: "+req.headers.authorization,
    

  })
})
// notfound error
/*app.use("*",()=>{})
app.use(()=>{

})*/
export default app;
