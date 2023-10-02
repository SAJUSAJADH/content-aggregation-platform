import Connect from "../../../dbConfig/connect";
import { NextResponse } from "next/server";
const mongoose = require('mongoose')
import Post from "../../../models/postSchema";


Connect()

export async function GET(req, res){
    try{
        const posts = await Post.find()
        if(posts){
            
            const response = NextResponse.json(posts)
            return response
        }else{
            const response = NextResponse.json({
                message: `requested data cannot be obtained. The Database is empty`
            })
            return response
        }
    }catch(e){
        const response = NextResponse.json({
            message: `Internal server error - ${e}`
        })
        return response
    }
}