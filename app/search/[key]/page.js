'use client'

import Slides from "../../../components/slide";
import { useEffect, useState } from "react"
import axios from 'axios'
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";


export default function SearchResult({params}){

    const [Data, setData] = useState([])
    const [isImage, setIsImage] = useState(true)
    const query = Object.values(params)[0]
    

    

    useEffect(()=>{
        axios.post('/api/search',{query}).then(({data})=>{
            setData(data)
        })
    },[])

    
    const miniComponents = [];

    
    if(Data.length > 0){
        for (let i = 1; i <= Data.length; i++) {
         miniComponents.push(
            <>
                 <Link href={`/category/${Data[Data.length-i]?.category}/${Data[Data.length-i]?._id}`}>
                <div className="border-b border-gray-300 pb-2 pt-3">
                                <div className={"grid grid-cols-3 gap-4 pt-4 cursor-pointer"}>
                                                <div className="">
                                                 
                                                <div>
                                                {isImage ?
                                                    <img
                                                    src={Data[Data.length-i]?.source}
                                                    alt=""
                                                    className="z-10 w-full h-full"
                                                    width={300}
                                                    height={150}
                                                    onError={()=>{
                                                        setIsImage(false)
                                                    }}
                                                    />:
                                                    <ReactPlayer url={Data[Data.length-i]?.source} controls  width={300} height={150} className="z-10 w-full"/>
                                                }
                                                </div>
                                                
                                                </div>
                                                <div className="col-span-2">
                                                    <h2 className={"text-sm md:text-2xl pb-2 flex-wrap font-sans font-semibold text-black"}>
                                                    
                                                        {Data[Data.length-i]?.title}
                                                    
                                                    </h2>
                                                     <p className="hidden md:block pb-2 text-gray-400 font-sans text-sm">{Data[Data.length-i]?.summary}</p>
                                                    <p className="hidden lg:block text-sm md:text-md text-sky-600 font-semibold italic">
                                                    {
                                                        Data[Data.length-i]?.category
                                                    }
                                                    
                                                </p>
                                                </div>                        
                                </div>
                                <p className="md:hidden pb-2 text-gray-400 font-sans text-sm">{Data[Data.length-i]?.summary}</p>
                                <p className="lg:hidden text-sm md:text-md text-sky-600 font-semibold italic">
                                {
                                    Data[Data.length-i]?.category
                                }
                                    
                                </p>
                                </div>
                                </Link>
            </>
         );
    }}


    return(
        <>
            <Header/>
            <div className="mx-auto container px-3 md:px-20 py-2 pt-28">
                <h2 className="py-2 font-semibold text-sm italic text-sky-950">Search Result for : {query.replace(/[^\w\s]/g, '')}</h2>
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
                
            </div>
            <Footer/>
        </>
    )
}