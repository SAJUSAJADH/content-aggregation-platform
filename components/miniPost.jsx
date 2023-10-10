'use client'


import { useEffect, useState } from "react"
// import axios from 'axios'
import ReactPlayer from "react-player";
import Link from "next/link";


function Minipost({classes, width, height, head, count, isSummary}){

    const [Data, setData] = useState([])
    const [isImage, setIsImage] = useState(true)

    

    useEffect(()=>{
        fetch('/api/data',{cache: 'no-store'}).then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            setData(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
    },[])



    return(
        <>
           
            <Link href={`/category/${Data[Data.length-count]?.category}/${Data[Data.length-count]?._id}`}>
                <div className="border-b border-gray-300 pb-2 pt-3">
                <div className={classes}>
                                <div className="">
                                {Data.length > 0 && 
                                <div>
                                {isImage ?
                                    <img
                                    src={Data[Data.length-count]?.source}
                                    alt=""
                                    className="z-10 w-full h-full"
                                    width={width}
                                    height={height}
                                    onError={()=>{
                                        setIsImage(false)
                                    }}
                                    />:
                                    <ReactPlayer url={Data[Data.length-count]?.source} controls  width={width} height={height} className="z-10 w-full"/>
                                }
                                </div>
                                }
                                </div>
                                <div className="col-span-2">
                                    <h2 className={head}>
                                    {Data.length > 0 &&
                                        Data[Data.length-count]?.title
                                    }
                                    </h2>
                                    {isSummary && Data.length > 0 && <p className="hidden md:block pb-2 text-gray-400 font-sans text-sm">{Data[Data.length-count]?.summary}</p>}
                                    <p className="hidden lg:block text-sm md:text-md text-sky-600 font-semibold italic">
                                    {Data.length > 0 && 
                                        Data[Data.length-count]?.category
                                    }
                                    
                                </p>
                                </div>                        
                </div>
                {Data.length > 0 && <p className="md:hidden pb-2 text-gray-400 font-sans text-sm">{Data[Data.length-count]?.summary}</p>}
                <p className="lg:hidden text-sm md:text-md text-sky-600 font-semibold italic">
                {Data.length > 0 && 
                    Data[Data.length-count]?.category
                }
                    
                </p>
                </div>
            </Link>
        </>
    )
}

function Minicontent({count}){

    const [Data, setData] = useState([])

    useEffect(()=>{
        fetch('/api/data',{cache: 'no-store'}).then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            setData(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
    },[])


    return(
        <>
            <Link href={`/category/${Data[Data.length-count]?.category}/${Data[Data.length-count]?._id}`}>
            <div className="w-full flex-wrap pb-4 border-b border-gray-300 md:pt-4 cursor-pointer">
                <h4 className="text-white text-lg font-semibold py-2">
                {Data.length> 0 && Data[Data.length-count]?.title}
                </h4>
                <p className="text-sm text-sky-600 font-semibold italic">
                    {Data.length > 0 && Data[Data.length-count]?.category}
                </p>
            </div>
            </Link>
        </>
    )
}

function VerticalPost({count}){

    const [Data, setData] = useState([])
    const [isImage, setIsImage] = useState(true)

    useEffect(()=>{
        fetch('/api/data',{cache: 'no-store'}).then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            setData(data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
    },[])


    return(
        <>
            <Link href={`/category/${Data[Data.length-count]?.category}/${Data[Data.length-count]?._id}`}>
            <div className="flex-col gap-4 pb-4 md:pb-8 border-b md:border-0 border-gray-300 pt-2 cursor-pointer">
            {Data.length > 0 && 
                <div>
                    {isImage ?
                        <img
                            src={Data[Data.length-count]?.source}
                            alt=""
                            className="z-10 w-full"
                            width={350}
                            height={150}
                            onError={()=>{
                                setIsImage(false)
                            }}
                        />:
                        <ReactPlayer url={Data[Data.length-count]?.source} controls  width={350} height={150} className="z-10 w-full"/>
                    }
                </div>
            }
                <h2 className="text-white text-lg font-sans font-semibold">
                {Data.length> 0 && Data[Data.length-count]?.title}
                </h2>
                <p className="text-sm text-sky-600 font-semibold italic">
                {Data.length > 0 && Data[Data.length-count]?.category}
                </p>
            </div>
            </Link>
        </>
    )
}


export {Minipost, Minicontent, VerticalPost};