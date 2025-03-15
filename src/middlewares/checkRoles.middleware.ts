import { RequestHandler } from "express";
import { ERoles } from "../features/users/interfaces/user.interface";
import { JsonResponse } from "../utils/jsonResponse.utils";

export default (...role:ERoles[]):RequestHandler=>{
    return (_req,res,next)=>{
        if(!role.includes(res.locals.user.role)) return JsonResponse(res,{
            message:"unauthorised role access",
            status:"error",
            statusCode:401,
            title:"Access Forbidden"
        })
       return next()
    }
}

