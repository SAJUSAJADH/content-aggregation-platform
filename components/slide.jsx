'use client'

import { Minipost } from "./miniPost";
import { useEffect, useState } from "react"
import axios from 'axios'


export default function Slides({title}){

    const [Data, setData] = useState([])

    useEffect(()=>{
        axios.get('/api/data').then(({data})=>{
            setData(data)           
        })
    })

    const minipostClass = "grid grid-cols-3 gap-4 pt-4 cursor-pointer";
    const postImageWidth = 300;
    const postImageHeight = 150;
    const headClass = "text-sm pb-2 flex-wrap font-sans font-semibold text-black";

    const miniComponents = [];

    for (let i = 0; i < Data.length; i++) {
        if(Data.length > 0 && Data[Data.length-i]?.category === title){
            miniComponents.push(<Minipost count={i} key={i} isSummary={false} head={headClass}  classes={minipostClass} width={postImageWidth} height={postImageHeight} />);
        }
        
    }


    return(
        <>
            <div className="z-20 shadow-lg bg-[#e5e7eb] px-2 py-2 mb-6 rounded">
                <h2 className="text-black text-center py-3 text-xl font-bold font-serif">
                    {title}
                </h2>
                <div className="">
                    {miniComponents}
                </div>
            </div>
        </>
    )
}