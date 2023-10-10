'use client'

import { useEffect, useState } from "react";
import Notifiactions from "./notificationArea";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Toggler from "./toggleButton";
import SearchBar from './searchbar';
import Menus from "./menu";
import { Bell, Twitter } from 'lucide-react';
import Link from "next/link";
// import axios from "axios";


export default function Header(){

    const [isToggle, setIstoggle] = useState(false);
    const [search, setSearch] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState([])
    let count = 0


    useEffect(()=>{
        fetch('/api/notify',{cache: 'no-store'}).then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            setNotifications(data[0]);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
    },[])

    const searching = ()=>{
        setSearch(!search)
    }

    const open =()=>{
        setIstoggle(!isToggle)
    }
    

    const menus = [
        {name: "Computing", href: "/category/Computing"},
        {name: "Mobile", href: "/category/Mobile"},
        {name: "Gaming", href: "/category/Gaming"},
        {name: "Entertainment", href: "/category/Entertainment"},
        {name: "Cars", href: "/category/Cars"},
        {name: "Crypto", href: "/category/Crypto"},
    ]

    for (const key in notifications) {
        if (notifications.hasOwnProperty(key) && key[0] !== "_" && notifications[key] !== "") {
          count++
        }
      }

    return(
        <>
            <div className="w-full bg-[#000] fixed z-40 shadow-md">
                <div className="flex justify-between lg:justify-around items-center py-6 px-4 lg:px-0">
                    <div className="flex justify-center gap-4">
                        <Toggler open={open} isToggle={isToggle}  />
                        <Link href={'/'} className="cursor-pointer text-3xl text-white font-semibold font-sans">TechNo<span className="text-[#0096FF]">O</span>bs</Link>
                    </div>
                    <div className="hidden lg:flex justify-center gap-6">
                        {menus.map((menu,index)=>(
                            <Link key={index} className="text-white hover:underline hover:text-sky-500 font-semibold font-mono text-xl" href={menu.href} >{menu.name}</Link>
                        ))}
                    </div>
                    <div className="flex gap-6">
                        <span onClick={()=>{setShowNotifications(!showNotifications)}} className="hidden  mt-1 lg:mt-0 relative lg:inline-block"><Bell style={{color: "#fff", cursor: "pointer"}}/>
                            {count > 0 && <div className="notification-badge cursor-pointer">{count}</div>}
                        </span>
                        <h2 className="flex cursor-pointer text-white font-semibold text-xl"><Twitter style={{color: "skyblue", cursor: "pointer"}}/></h2>
                        <span className="hidden lg:flex px-1"><SearchOutlinedIcon onClick={searching} style={{color: "#0096FF", cursor: "pointer", fontSize: "x-large"}}/></span>
                    </div>
                </div>
                {showNotifications && <div className="flex justify-end"><Notifiactions/></div>}
                {search && <SearchBar/>}
            </div>
            {isToggle && <Menus/>}
        </>
    )
}