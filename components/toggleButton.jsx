


export default function Toggler({open, isToggle}){

   

    return(
        <>
            <button onClick={open} id="menu-btn" className={isToggle ? 'open block hamburger  focus:outline-none ml-auto mt-3' : 'block mt-3 hamburger  focus:outline-none ml-auto'}>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
        </>
    )
}