import Connect from "@/dbConfig/connect"
import Post from "@/models/postSchema"
import { NextResponse } from "next/server"


Connect()

export async function POST(req, res){
    const {id}  = await req.json()
    try{
        const foundItem = await Post.findById(id)
        if(foundItem){
            const response = NextResponse.json(foundItem)
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