import { Link } from "react-router"

export function Signup(){
    return(
        <div className="max-w-screen min-h-screen flex items-center justify-center">
            <div className="max-w-100 bg-white w-full min-h-120 rounded-2xl flex flex-col items-center p-6">
                <h1 className="text-2xl font-medium mb-2">Crie sua conta</h1>
                <p className="mb-7 text-[15px] text-[#4b4848]">Insira seu email abaixo para criar sua conta.</p>
                <form className="flex flex-col">
                    <div className="mb-5">
                        <label className="text-[15px]">Nome completo</label>
                        <input type="text" className="bg-[#E2E2E2] p-2 rounded-lg w-full mb-5 mt-3 text-[15px] focus:outline-none focus:shadow-[0px_0px_10px_#5201d4]" placeholder="Digite seu nome" required/>
                       
                        <label className="text-[15px]">Email</label> <br />
                        <input type="text" className="bg-[#E2E2E2] p-2 rounded-lg w-full mt-3 text-[15px] focus:outline-none focus:shadow-[0px_0px_10px_#5201d4]" placeholder="seu@email.com" required/>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex flex-col">
                            <label className="text-[15px]">Senha</label>
                            <input type="password" className="bg-[#E2E2E2] p-2 rounded-lg w-full mt-3 text-[15px] focus:outline-none focus:shadow-[0px_0px_10px_#5201d4]" required/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[15px]">Confirmação</label>
                            <input type="password" className="bg-[#E2E2E2] p-2 rounded-lg w-full mt-3 text-[15px] focus:outline-none focus:shadow-[0px_0px_10px_#5201d4]" required/>
                        </div>
                    </div>
                    <p className="mb-5 text-[15px] mt-3 text-[#4b4848]">Deve ter no mínimo 8 caracteres.</p>
                    <button type="submit" className="cursor-pointer w-full bg-[#5201d4] p-2 text-white rounded-lg text-[15px] hover:scale-103 duration-300 ease-in-out">Criar conta</button>
                    <p className="text-center text-[15px] mt-5 text-[#4b4848]">Já tem uma conta? <span className="font-medium"><Link to={"/login"}>Iniciar sessão</Link></span></p>
                </form>
            </div>
        </div>
    )
}