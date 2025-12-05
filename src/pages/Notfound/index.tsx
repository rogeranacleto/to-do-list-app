import { Link } from "react-router"
export function Notfound(){
    return(
        <div className="max-w-screen min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-white text-7xl">404</h1>
                <h2 className="text-white text-3xl">Notfound page</h2>
                <Link to={"/login"}>
                    <button type="submit" className="cursor-pointer w-full bg-[#29075f] p-2 text-white rounded-lg text-[15px] hover:scale-103 duration-300 ease-in-out hover:bg-[#5201d4] mt-5">Início</button>
                </Link>
            </div>
        </div>
    )
}