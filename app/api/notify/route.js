import Connect from "@/dbConfig/connect";
import Notifiaction from "../../../models/notificationSchema";
import { NextResponse } from "next/server";

Connect()

export async function GET(req, res){
    try{
        const notifications = await Notifiaction.find()
        if(notifications){
            const response = NextResponse.json(notifications)
            return response
        }else{
            const response = NextResponse.json({
                message: `DB unavailable or no data in db.`
            })
            return response
        }
    }catch(e){
        const response = NextResponse.json({
            message:`cannot get at this time - ${e}`
        })
        return response
    }
}