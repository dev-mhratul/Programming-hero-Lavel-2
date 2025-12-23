import express, { Request, Response } from "express";
import { pool } from "../../config/db";

const router= express.Router()

router.post("/", async(req: Request, res: Response) => {
  // console.log(req.body);
  const {name, email}= req.body;

  try{
    const result= await pool.query(`INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`, [name, email])
    res.status(201).json({
      success: false,
      message: "data inserted success",
      data: result.rows[0]
    })
  }catch(err:any){
    res.status(500).json({
      success: false,
      message: err.message  
    })
  }

})


// get
router.get('/', async(req: Request, res: Response)=>{
  try{
   const result = await pool.query(`SELECT * FROM users`)

   res.status(200).json({
    seccess: true,
    message: "users get successfully",
    data: result.rows
   })
  }catch(err:any){
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})

export const userRoute= router;