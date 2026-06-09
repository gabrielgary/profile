import pg from "pg"
/*
// baixar dependeincia
import dotenv from 'dotenv'
dotenv.config({
    path:""
})*/


    const pool=new pg.Pool({
    database:"profile",
    user:"postgres",
    password:"123456789",
    port:5432,
    host:"localhost"
})
const db=await pool.connect() ;




    
    export default db;
