'use client'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';




export default function SearchBar(){
    const [query, setQuery] = useState('')
    const router = useRouter();

    const Search = async () => {
       try{ 
        const {data} = await axios.post('/api/search',{query})
        if(data.length > 0){
            router.push(`/search/${query}`)
        }else{
            router.push('/category/Gaming')
        }
        }catch(e){
            console.log(e)
        }
    }

    

    return(
        <>
            <div className="px-6 py-3 hidden lg:flex justify-center border-t border-gray-500 relative">
                <input
                value={query}
                onChange={(ev)=>{setQuery(ev.target.value)}}
                type="text"
                className="px-4 py-3 rounded bg-gray-100 text-lg italic focus:outline-none text-gray-950 border w-3/4"
                placeholder="Search"
                spellCheck="false"
                ></input>
                <span onClick={Search} className='top-7 right-56 z-40 absolute'><SearchOutlinedIcon style={{color: "#0096FF", cursor: "pointer", fontSize: "x-large"}} /></span>
            </div>
        </>
    )
}