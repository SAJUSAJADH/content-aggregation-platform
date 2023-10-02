'use client'

import { Minipost } from "./miniPost";
import Slides from "./slide";
import { useEffect, useState } from "react"
import axios from 'axios'



export default function Hero(){

    const [Data, setData] = useState([])

    useEffect(()=>{
        axios.get('/api/data').then(({data})=>{
            setData(data)           
        })
    },[])

    

    const minipostClass = "grid grid-cols-3 gap-4 pt-4 cursor-pointer";
    const postImageWidth = 300;
    const postImageHeight = 150;
    const headClass = "text-sm md:text-2xl pb-2 flex-wrap font-sans font-semibold text-black";

    
    const miniComponents = [];

    
    for (let i = 11; i < 26; i++) {
        miniComponents.push(<Minipost count={i} key={i} isSummary={true} head={headClass} classes={minipostClass} width={postImageWidth} height={postImageHeight}/>);
    }


    return(
        <>
            <div className="mx-auto container px-3 md:px-20 py-2 md:pt-6">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="col-span-2 w-full">
                        {miniComponents}
                    </div>
                    <div className="flex-col w-full items-center col-span-2 md:col-span-1">
                        <Slides title={"Gaming"}/>
                        <Slides title={"Entertainment"}/>
                        <Slides title={"Computing"}/>
                        <Slides title={"Mobile"}/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button 
                        className="text-gray-800 bg-transparent hover:bg-slate-500 px-4 py-2 text-centerz z-20 shadow-xl font-bold rounded w-2/4">
                            view more
                    </button>
                </div>
            </div>
        </>
    )
}