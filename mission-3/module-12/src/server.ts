import express, { json, NextFunction, Request, Response } from "express";
import config from "./config";
import initDB, { pool } from "./config/db";
import logger from "./middleware/logger";
import { userRoute } from "./modules/user/user.routes";

const app = express();


// parser
app.use(express.json());

const port = config.PORT;


initDB();



app.get("/",logger, (req: Request, res: Response) => {
  res.send("Hello World!55");
});

// 
app.use("/users", userRoute)


// app.post("/users", async(req: Request, res: Response) => {
//   // console.log(req.body);
//   const {name, email}= req.body;

//   try{
//     const result= await pool.query(`INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`, [name, email])
//     res.status(201).json({
//       success: false,
//       message: "data inserted success",
//       data: result.rows[0]
//     })
//   }catch(err:any){
//     res.status(500).json({
//       success: false,
//       message: err.message
//     })
//   }

// });

// 
// app.get("/users", async(req: Request, res: Response)=>{
//   try{
//    const result = await pool.query(`SELECT * FROM users`)

//    res.status(200).json({
//     seccess: true,
//     message: "users get successfully",
//     data: result.rows
//    })
//   }catch(err:any){
//     res.status(500).json({
//       success: false,
//       message: err.message
//     })
//   }
// })

// get id
app.get("/users/:id", async(req:Request, res:Response)=>{
  try{
    const result= await pool.query(`SELECT * FROM users WHERE id=$1`, [req.params.id])

    if(result.rows.length === 0){
      res.status(404).json({
        success: false,
        message: "User not fund"
      })
    }
    else{
      res.status(200).json({
        success: true,
        message: "User fetched successfully",
        data: result.rows[0]
      })
    }
    console.log(result.rows)
  }catch(err:any){
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})


// users update`
app.put("/users/:id", async(req:Request, res:Response)=>{
  try{
    const {name, email}= req.body;
    const result= await pool.query(`UPDATE users SET name=$1, email= $2 WHERE id=$3 RETURNING *`, [name, email, req.params.id])

    if(result.rows.length === 0){
      res.status(404).json({
        success: false,
        message: "User not fund"
      })
    }
    else{
      res.status(200).json({
        success: true,
        message: "User fetched successfully",
        data: result.rows[0]
      })
    }
    console.log(result.rows)
  }catch(err:any){
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})

// user delete

// get id
app.delete("/users/:id", async(req:Request, res:Response)=>{
  try{
    const result= await pool.query(`DELETE FROM users WHERE id=$1`, [req.params.id])

    if(result.rows.length === 0){
      res.status(404).json({
        success: false,
        message: "User Delete successfully"
      })
    }
    else{
      res.status(200).json({
        success: true,
        message: "User fetched successfully",
        data: result.rows[0]
      })
    }
    console.log(result.rows)
  }catch(err:any){
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});