const Navbar = ()=>{
    return (
        <>
        <div>
            <nav className="flex flex-row w-screen justify-center mt-2 text-lg">
                <div className="logo ">
                    <img src="./public/brand_logo.png" alt="Error 404" />
                </div>
                <ul className="flex flex-row mx-96 ">
                    <li className="mx-2.5" href="#">Menu</li>
                    <li className="mx-2.5" href="#">Location</li>
                    <li className="mx-2.5" href="#">About</li>
                    <li className="mx-2.5" href="#">Contact</li>
                </ul>
                <button className="h-7 w-16 text-white"style={{backgroundColor:"#D01C28"}}>Login</button>
            </nav>
        </div>
        </>
    )
};
export default Navbar;