import Connect from "@/dbConfig/connect";
import Post from "@/models/postSchema";
import { NextResponse } from "next/server";


Connect()


export async function POST(req, res){
    const {query} = await req.json()
    try{
        const regex = new RegExp(query, 'i')
        const results = await Post.find({
            $or: [
              { title: regex }, 
              { content: regex }, 
            ],
          })
          if(results){
            const response = NextResponse.json(results)
            return response
          }else{
            const response = NextResponse.json([])
            return response
          }

    }catch(e){
        const response = NextResponse.json([])
        return response
    }
}