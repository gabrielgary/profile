import type { NextFunction, Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken'
import { decode } from 'node:punycode';
export function authenticateUser(request:Request,response:Response, _next:NextFunction) {
    // verficar header authorization
    const authorization=request.headers.authorization
    if (!authorization) {
        return response.status(401).json({
            message:"Token não fornecido"
        })

        
    }
    // separar token 
    const separator=authorization.split(" ")
    if (separator.length !==2 || separator[0] !== "Bearer") {
        return response.status(400).json({
            message:"Erro ao enviar o token!"
        })
        
    }
    const token=separator[1]
    try {
        const decoded= jsonwebtoken.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return response.status(401).json({
                message:"Token inválido!"
            })
        }
        request.user={
            code_user:decoded.code_user,
            email_user:decoded.email_user,

        }
        _next()
    } catch (error) {
        console.log(error)
        return response.status(401).json({err: error})
    }
}