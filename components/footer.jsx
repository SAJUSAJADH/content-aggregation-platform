import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RedditIcon from '@mui/icons-material/Reddit';
import Link from 'next/link';


export default function Footer(){

    const menus = [
        {name:"Mobile",href:"/category/Mobile"}, {name:"Computing",href:"/category/Computing"}, {name:"Gaming ",href:"/category/Gaming"},{name:"Entertainment",href:"/category/Entertainment"},{name:"Tech Gadgets",href:"/"}, {name:"Cryptocurrencies",href:"/category/Crypto"}
    ]

    const items = [
        {name:"Automotive",href:"/"}, {name:"Space", href:"/"} ,{name:"Streaming",href:""}, {name:"Guides", href:"/"}, {name:"Original", href:""}, {name:"Shows", href:""} ,{name:"Downloads", href:""}, {name:"How-To", href:""}
    ]

    const terms = [
        {name:"About Us", href:"/"} ,{name:"Contact Us", href:"/"} ,{name:"Editorial", href:"/"} ,{name:"Guidelines", href:"/"} ,{name:"Logo & Accolade", href:""}, {name:"Licensing", href:""}
    ]

    const extras = [
        {name:"Subscribe to our Channel",href:"/"} ,{name:"Sponsored Content",href:""}, {name:"Digital Trends", href:"/"}, {name:"Wallpapers", href:""} ,{name:"Digital Trends in Spanish", href:""}
    ]

    const careers = [
        {name:"Careers",href:"/"}, {name:"Advertise With Us",href:"/"}, {name:"Work With Us",href:"/"}, {name:"Diversity & Inclusion", href:""}, {name:"Terms of Use", href:""}
    ]

    const privacies = [
        {name:"Privacy Policy",href:"/"}, {name:"Do Not Sell or Share My Information",href:"/"}, {name:"Press Room ", href:"/"},{name:"Sitemap", href:""}
    ]

    return(
        <>
            <div className="mx-auto w-full px-3 md:px-20 py-4 bg-sky-950">
                <div className="pb-4 pt-6 md:pb-16 border-b border-gray-300">
                <div className="flex justify-center gap-4 pb-6">
                    <FacebookOutlinedIcon style={{color: "#0096FF", cursor: "pointer"}} />
                    <InstagramIcon style={{color: "#0096FF", cursor: "pointer"}} />
                    <TwitterIcon style={{color: "#0096FF", cursor: "pointer"}} />
                    <YouTubeIcon style={{color: "#0096FF", cursor: "pointer"}} />
                    <LinkedInIcon style={{color: "#0096FF", cursor: "pointer"}} />
                    <PinterestIcon style={{color: "#0096FF", cursor: "pointer"}} />
                    <RedditIcon style={{color: "#0096FF", cursor: "pointer"}} />
                </div>
                <div className='grid lg:grid-cols-4 gap-4 pt-4'>
                    <div className="col-span-2 pe-4 border-r border-white">
                        <h2 className="text-white font-bold font-sans pb-2 text-2xl">
                        TechnoObs: The Data Powerhouse 
                        </h2> 
                        <p className="text-white flex flex-wrap font-semibold font-sans text-sm">
                        {"At TechnoObs, we're not just a tech company; we're your ultimate data partner. Our mission is simple: to empower your business with the data-driven insights you need to thrive in today's fast-paced digital landscape."}    
                        </p>   
                    </div>    
                    <div className="grid gap-4 ps-3 pe-4 border-r border-white">
                        {menus.map((menu,index)=>(
                            <Link href={menu.href} key={index} className="text-white font-semibold text-sm font-sans hover:underline cursor-pointer">{menu.name}</Link>
                        ))}
                    </div>   
                    <div className="grid gap-4 ps-3 ">
                        {items.map((item,index)=>(
                            <Link href={item.href} key={index} className="text-white font-semibold text-sm font-sans hover:underline cursor-pointer">{item.name}</Link>
                        ))}
                    </div>   
                </div> 
                <div className='grid lg:grid-cols-4 gap-4 pt-8'>
                    <div className="col-span-2 pe-4 border-r border-white">   
                    </div>    
                    <div className="grid gap-4 ps-3 pe-4 border-r border-white">
                        {terms.map((term,index)=>(
                            <Link href={term.href} key={index} className="text-white font-semibold text-sm font-sans hover:underline cursor-pointer">{term.name}</Link>
                        ))}
                    </div>   
                    <div className="grid gap-4 ps-3 ">
                        {extras.map((extra,index)=>(
                            <Link href={extra.href} key={index} className="text-white font-semibold text-sm font-sans hover:underline cursor-pointer">{extra.name}</Link>
                        ))}
                    </div>   
                </div> 
                </div>
                <div className='grid lg:grid-cols-4 gap-4 pt-8 md:pt-16'>
                    <div className="col-span-2 pe-4 border-r border-white">   
                            <h2 className="cursor-pointer text-3xl text-white font-semibold font-sans">TechNoobs</h2>
                    </div>    
                    <div className="grid gap-4 ps-3 pe-4 border-r border-white">
                        {careers.map((career,index)=>(
                            <Link href={career.href} key={index} className="text-white font-semibold text-sm font-sans hover:underline cursor-pointer">{career.name}</Link>
                        ))}
                    </div>   
                    <div className="grid gap-4 ps-3 ">
                        {privacies.map((privacy,index)=>(
                            <Link href={privacy.href} key={index} className="text-white font-semibold text-sm font-sans hover:underline cursor-pointer">{privacy.name}</Link>
                        ))}
                    </div>   
                </div> 
                <div className="py-6">
                    <p className='text-sm text-gray-200'>
                    TechNoobs may earn a commission when you buy through links on our sites.<br/>
                    ©2023 TechTrends. All rights reserved.
                    </p>
                </div>
            </div>
        </>
    )
}