'use client'

import {Minipost, Minicontent, VerticalPost} from "./miniPost"

import { useEffect, useState } from "react"
import axios from 'axios'
import ReactPlayer from "react-player";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Trending(){

    const [Data, setData] = useState([])
    const [isImage, setIsImage] = useState(true)
    const [showControls, setShowControls] = useState(false);
    const [trends, setTrends] = useState([])
    const router = useRouter();

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

    
    const mappedTrends = Object.keys(trends).filter(key => key !== '_id' && key !== '__v').map(key => trends[key]);


    

    const minipostClass = "grid grid-cols-3 gap-4 pt-4 cursor-pointer";
    const postImageWidth = 250;
    const postImageHeight = 100;
    const headClass = "text-sm md:text-xl pb-2 font-sans font-semibold text-white";

    const Search = async (trend) => {
        try{ 
         const {data} = await axios.post('/api/search',{trend})
         if(data.length > 0){
             router.push(`/search/${trend}`)
         }else{
             router.push('/category/Gaming')
         }
         }catch(e){
             console.log(e)
         }
     }

    return(
        <>
            <div className="bg-sky-950 pt-28 w-full mx-auto py-5 px-4 lg:px-20">
                <div className="flex justify-start flex-wrap gap-4 overflow-hidden">
                    <p className="font-semibold text-sm font-sans text-sky-600">Trending:</p>
                    {
                        mappedTrends.map((trend, index)=>(
                            <p onClick={()=>{Search(trend)}} key={index} className="text-white font-semibold text-sm font-sans cursor-pointer hover:underline">
                                {trend}
                            </p>
                        ))
                    }
                </div>
                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="col-span-2 flex-col cursor-pointer">
                       
                            <div className=" pt-6 lg:pt-8 pb-3 border-b border-gray-300">
                            {Data.length > 0 && 
                             <Link href={`/category/${Data[Data.length-1].category}/${Data[Data.length-1]._id}`}>
                            <div>
                                {isImage ?
                                    <img
                                        className="z-10"
                                        src={Data[Data.length-1].source} 
                                        alt="" 
                                        width={650} 
                                        height={500}
                                        onError={()=>{
                                            setIsImage(false)
                                        }}
                                        />:
                                    <ReactPlayer url={Data[Data.length-1].source} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} controls={showControls}/>
                                }
                            </div>
                            </Link>
                            }
                            <h2 className="text-white py-2 font-bold font-sans flex-wrap text-4xl leading-10 ">
                            {Data.length>0 && <Link href={`/category/${Data[Data.length-1].category}/${Data[Data.length-1]._id}`}>{Data[Data.length-1].title}</Link>}
                            </h2>
                            <p className="text-sm text-white font-sans italic py-4">
                            {Data.length>0 && <Link href={`/category/${Data[Data.length-1].category}/${Data[Data.length-1]._id}`}>{Data[Data.length-1].summary}</Link>}
                            </p>
                            <p className="text-md text-sky-600 font-semibold italic">
                                {Data.length>0 && <Link href={`/category/${Data[Data.length-1].category}/${Data[Data.length-1]._id}`}>{Data[Data.length-1].category}</Link>}
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
        </>
    )
}