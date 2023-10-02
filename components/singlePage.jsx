'use client'

import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import parse from 'html-react-parser';





export default function SinglePage({params}){

    const [Data, setData] = useState([])
    const [allData, setAllData] = useState([])
    const id = params.id;
    const [isImage, setIsImage] = useState(true)
    


    useEffect(()=>{
        axios.post(`/api/singlepost`,{id}).then(({data})=>{
            setData(data)        
        })
    })

    useEffect(()=>{
        axios.get('/api/data').then(({data})=>{
            setAllData(data)          
        })
    })

    const Recommendations = () => {
        const recommendationItems = [];
        const latestData = allData.slice().reverse()
        let limit = 0
        try{
            if(latestData.length > 0){
                latestData.map((item, index)=>{
                    if(item?.category === params.category && limit < 5){
                        recommendationItems.push(
                            <li className="leading-loose hover:underline" key={index}><Link href={`/category/${item.category}/${item._id}`}>{item.title}</Link></li>
                        );
                        limit++
                    }
                })
            }
            return recommendationItems
        }catch(e){
            console.log(e)
        }
    }

    const RecommendedPost = () => {
        const recommendedPost = [];
        const latestData = allData.slice().reverse()
        let limit = 0
        try{
            if(latestData.length > 0){
                latestData.map((item, index)=>{
                    if(item?.category != params.category && limit < 5){
                        recommendedPost.push(
                            <Link href={`/category/${item.category}/${item._id}`}>
                            <div className="grid gap-2 my-2 md:w-3/4">
                            <img key={index} src={`${item.source}`} alt="" className=""  height={150}/>
                            <p className="text-black text-xl font-bold">{item.title}</p>
                            <p className="text-sky-950 text-sm font-bold">{item.category}</p>
                            </div>
                            </Link>
                        )
                        limit++
                    }
                })
            }
            return recommendedPost
        }catch(e){
            console.log(e)
        }
    }


    return(
        <>
            <div className="bg-white px-2 pt-32 pb-4">
                <div className="grid lg:grid-cols-4">
                    <div className=""></div>
                    <div className="col-span-2 grid gap-4">
                        <p 
                            className="font-sans text-sm text-sky-950 font-bold">
                                <Link className="hover:underline" href="/">
                                    HOME
                                </Link><span className="mx-2 text-2xl">.</span>
                                <Link className="hover:underline" href="/">{params.category.toUpperCase()}</Link> 
                        </p>
                        <div className="flex flex-wrap">
                            <h2 className="md:leading-normal font-bold text-xl md:text-5xl font-sans">{Data?.title}</h2>
                        </div>
                        <div className="">
                           {isImage ?
                                <img src={Data?.source} alt={Data?.title} className="z-10" width={650} height={500} onError={()=>{setIsImage(false)}}/>
                                    :
                                <ReactPlayer url={Data?.source} className="z-10" width={650} height={500}/>
                            }
                        </div>
                        <div className=" py-2 text-center md:text-start md:w-3/4">
                            <p className="italic">"{Data?.summary}"</p>
                        </div>
                        <div className=" py-2 text-center md:text-start md:w-3/4">
                            {parse(`${Data?.content}`)}
                        </div>
                        <div className="py-2 border-b border-gray-400 md:w-3/4">
                                <p className="text-black text-lg py-3 font-semibold">Editors' Recommendations</p>
                                <ul style={{listStyle: "disc", color: "blue"}}>
                                    {Recommendations()}
                                </ul>
                        </div> 
                        {RecommendedPost()}         
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </>
    )
}