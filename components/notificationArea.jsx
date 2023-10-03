'use client'

import axios from "axios"
import { useState, useEffect } from "react"




export default function Notifiactions(){

    const [notifications, setNotifications] = useState([])

    useEffect(()=>{
        axios.get('/api/notify').then(({data})=>{
            setNotifications(data[0])
        })
    },[])
    
    return(
        <>
            <div className="hidden md:block fixed top-16 right-16 z-50 bg-gray-900 rounded px-6 w-60 h-44 text-center py-2">
                <ul style={{ listStyle: 'none' }}>
                    <li className="text-sm text-slate-50 font-semibold flex-wrap font-sans py-1">{notifications?.notification1}</li>
                    <li className="text-sm text-slate-50 font-semibold flex-wrap font-sans py-1">{notifications?.notification2}</li>
                    <li className="text-sm text-slate-50 font-semibold flex-wrap font-sans py-1">{notifications?.notification3}</li>
                </ul>
            </div>
        </>
    )
}