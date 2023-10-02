'use client'

import {Minipost, Minicontent, VerticalPost} from "../../../components/miniPost"

import { useEffect, useState } from "react"
import axios from 'axios'
import ReactPlayer from "react-player";
import Link from "next/link";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";




export default function Categories({params}){

    const [Data, setData] = useState([])
    const [isImage, setIsImage] = useState(true)
    const [showControls, setShowControls] = useState(false);
    const [trends, setTrends] = useState([])

    const handleMouseOver = () => {
        setShowControls(true);
      };
    
      const handleMouseOut = () => {
        setShowControls(false);
      };

    

    useEffect(()=>{
        axios.get('/api/trend').then(({data})=>{
            setTrends(data[0])
        })
    })

    

    const miniComponents = [];

    for (let i = 4; i < 11; i++) {
        miniComponents.push(<Minicontent count={i} key={i} />);
    }

    useEffect(()=>{
        axios.get('/api/data').then(({data})=>{
            setData(data)           
        })
    })

    
    

    

    const minipostClass = "grid grid-cols-3 gap-4 pt-4 cursor-pointer";
    const postImageWidth = 250;
    const postImageHeight = 100;
    const headClass = "text-sm md:text-xl pb-2 font-sans font-semibold text-white";

    const FeaturedPost = () => {
        const Featured = []
        const latestPost = Data.slice().reverse()
        let limit = 0
        if(latestPost.length > 0){
            latestPost.map((post, index)=>{
            if(post?.category === params.category && limit < 1){
                Featured.push(post)
                limit++
            }
        })}
        return Featured
    }

    // if(FeaturedPost()[0] != undefined){console.log(FeaturedPost()[0].category)}


    return(
        <>
            <Header/>
             <div className="bg-sky-950 pt-28 w-full mx-auto py-5 px-4 lg:px-20">
                <div className="flex justify-start flex-wrap gap-4 overflow-hidden">
                    <p className="font-semibold text-sm font-sans text-sky-600">Trending:</p>
                    <p className="text-white font-semibold text-sm font-sans cursor-pointer hover:underline">{trends?.trend1}</p>
                    <p className="text-white font-semibold text-sm font-sans cursor-pointer hover:underline">{trends?.trend2}</p>
                    <p className="text-white font-semibold text-sm font-sans cursor-pointer hover:underline">{trends?.trend3}</p>
                    <p className="text-white font-semibold text-sm font-sans cursor-pointer hover:underline">{trends?.trend4}</p>
                    <p className="text-white font-semibold text-sm font-sans cursor-pointer hover:underline">{trends?.trend5}</p>
                    <p className="text-white font-semibold text-sm font-sans cursor-pointer hover:underline">{trends?.trend6}</p>
                </div>
                <div className="py-4 px-2 border-b border-gray-400">
                    <p className="text-sm font-bold font-sans"><span className="text-slate-400">
                    <Link className="hover:underline  text-[#0095d9]" href={'/'}>HOME</Link>
                    <span className="text-2xl text-slate-400 mx-2">.</span>
                    {params.category.toUpperCase()}
                    </span></p>

                    <h1 className="text-white text-xl lg:text-5xl font-bold font-sans py-4">{params.category.toUpperCase()}</h1>
                </div>
                <div className="grid lg:grid-cols-4 gap-8 pt-4">
                    <div className="col-span-2 flex-col cursor-pointer">
                       
                            <div className=" pt-6 lg:pt-8 pb-3 border-b border-gray-300">
                            {FeaturedPost()[0] != undefined && 
                             <Link href={`/category/${FeaturedPost()[0].category}/${FeaturedPost()[0]._id}`}>
                            <div>
                                {isImage ?
                                    <img
                                        className="z-10"
                                        src={FeaturedPost()[0].source} 
                                        alt="" 
                                        width={650} 
                                        height={500}
                                        onError={()=>{
                                            setIsImage(false)
                                        }}
                                        />:
                                    <ReactPlayer url={FeaturedPost()[0].source} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} controls={showControls}/>
                                }
                            </div>
                            </Link>
                            }
                            <h2 className="text-white py-2 font-bold font-sans flex-wrap text-4xl leading-10 ">
                            {Data.length>0 && <Link href={`/category/${FeaturedPost()[0].category}/${FeaturedPost()[0]._id}`}>{FeaturedPost()[0].title}</Link>}
                            </h2>
                            <p className="text-sm text-white font-sans italic py-4">
                            {Data.length>0 && <Link href={`/category/${FeaturedPost()[0].category}/${FeaturedPost()[0]._id}`}>{FeaturedPost()[0].summary}</Link>}
                            </p>
                            <p className="text-md text-sky-600 font-semibold italic">
                                {Data.length>0 && <Link href={`/category/${FeaturedPost()[0].category}/${FeaturedPost()[0]._id}`}>{FeaturedPost()[0].category}</Link>}
                            </p>
                        </div>
                       
                        
                        <Minipost count={2} isSummary={true} head={headClass} classes={minipostClass} width={postImageWidth} height={postImageHeight} />
                        <Minipost count={3} isSummary={true} head={headClass} classes={minipostClass} width={postImageWidth} height={postImageHeight} />
                        
                    </div>    
                    <div className="w-full col-span-2 md:col-span-1">
                        {miniComponents}
                    </div>
                    <div className="w-full grid grid-row-3 col-span-2 md:col-span-1">
                        <VerticalPost count={4}/>
                        <VerticalPost count={5}/>
                        <VerticalPost count={6}/>
                    </div>
                </div>
            </div>
            <Hero/>
            <Footer/>
        </>
    )
}