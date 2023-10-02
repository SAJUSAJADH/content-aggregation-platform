import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Menus(){

    const menus = [
        {name: "Computing", href: "/category/Computing"},
        {name: "Mobile", href: "/category/Mobile"},
        {name: "Gaming", href: "/category/Gaming"},
        {name: "Entertainment", href: "/category/Entertainment"},
        {name: "Smart Home", href: "/"},
        {name: "Cars", href: "/category/Cars"},
        {name: "Tech Gadgets", href: "/"},
        {name: "Crypto", href: "/category/Crypto"},
        {name: "More", href: "/"},
        
    ]

    return(
        <>
            <div className="mx-auto fixed lg:px-20 pt-28 w-full h-full bg-black z-30">
                <div className="grid lg:grid-cols-3">
                    <div className="flex flex-col lg:border-r lg:border-gray-800">
                        {menus.map((menu,index)=>(
                            <div key={index} className="py-4 lg:pe-4 px-3 lg:px-0 cursor-pointer flex justify-between">
                                <h2 className="text-white font-semibold text-3xl font-serif">
                                    {menu.name}
                                </h2>
                                <span className="cursor-pointer"><ArrowForwardIosIcon style={{color: "#0096FF", fontSize: "larger"}}/></span>
                            </div>
                        ))}
                    </div>
                    <div className="col-span-2"></div>
                </div>
            </div>
        </>
    )
}