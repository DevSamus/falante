import { Router, Request, Response } from "express"; 

const rotas = Router(); //# inciando as rotas

export default rotas
.get("/test",(req:Request, res:Response)=>{
	return res.status(200).json({msn:"a api está trabalhado..!!"})
})