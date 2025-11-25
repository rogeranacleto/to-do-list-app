import { Link } from "react-router"
export function Login(){
    return(
        <div className="max-w-screen min-h-screen flex items-center justify-center">
            <div className="max-w-100 bg-white w-full min-h-105 rounded-2xl flex flex-col items-center p-6">
                <h1 className="text-2xl font-medium mb-2">Faça login</h1>
                <p className="mb-7 text-[15px] text-[#4b4848]">Insira seu email e senha abaixo para continuar.</p>
                <form className="flex flex-col w-full">
                    <div className="mb-5 w-full">
                        <label className="text-[15px]">Email</label> <br />
                        <input type="text" className="bg-[#E2E2E2] p-2 rounded-lg w-full mt-3 text-[15px] focus:outline-none focus:shadow-[0px_0px_10px_#5201d4] mb-5" placeholder="seu@email.com" required/>
                        <label className="text-[15px]">Senha</label>
                        <input type="password" className="bg-[#E2E2E2] p-2 rounded-lg w-full mt-3 text-[15px] focus:outline-none focus:shadow-[0px_0px_10px_#5201d4]" required/>
                    </div>
                    <button type="submit" className="cursor-pointer w-full bg-[#5201d4de] hover:bg-[#5201d4] p-2 text-white rounded-lg text-[15px] hover:scale-103 duration-300 ease-in-out">Criar conta</button>
                    <p className="text-center text-[15px] mt-5 text-[#4b4848]">Não tem uma conta? <span className="font-medium"><Link to={"/signup"}>Criar conta</Link></span></p>
                </form>
            </div>
        </div>
    )
}