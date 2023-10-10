import Connect from "@/dbConfig/connect";
import Trend from "@/models/trendSchema";
import { NextResponse } from "next/server";

Connect()


export async function GET(req, res) {
   try{
        const trends = await Trend.find()
        if(trends){
            const response = NextResponse.json(trends)
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