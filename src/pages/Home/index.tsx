import CatAnimated from "../../components/CatAnimated"
import { FaPlus } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";

export function Home(){
    return(
        <div className="max-w-screen min-h-screen">
            <div className="flex flex-col items-center gap-6 pt-5">
                <div className="bg-black w-[60%] h-35 rounded-2xl flex items-center justify-between pl-10 pr-10 border border-solid border-[#290169]">
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold mb-3 text-white">Bom dia, Roger!</h1>
                        <p className="text-[#ffffffa8]">O que você planeja fazer hoje?</p>
                    </div>
                    <div>
                        <CatAnimated/>
                    </div>
                </div>
                <div className="bg-black w-[60%] rounded-2xl flex flex-col pl-10 pr-10 border border-solid border-[#290169]">
                    <div className="flex justify-between w-full mt-8">
                        <div>
                            <h2 className="text-2xl font-bold text-white">Tarefas de hoje</h2>
                        </div>
                        <div>
                            <button className="flex items-center gap-2.5 cursor-pointer bg-[#290169] text-white rounded-lg pl-3 pr-3 pt-2 pb-2 hover:bg-[#5201d4] duration-700 hover:text-white">
                                <FaPlus/>
                                Criar
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-8 mb-8">
                        <div className="flex items-center gap-4">
                            <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="peer sr-only" />

                            <span
                                className="w-5 h-5 rounded-lg border border-[#ffffffa8]
                                    peer-checked:bg-white peer-checked:border-white
                                    flex items-center justify-center transition"
                            >
                                <svg
                                className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition"
                                fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"
                                >
                                <path d="M5 13l4 4L19 7" />
                                </svg>
                            </span>
                            </label>
                            <label className="text-[#ffffffa8]">Comprar pão para o café</label>
                        </div>
                        <div className="flex items-center gap-5">
                            <GoPencil className="cursor-pointer hover:scale-110 duration-300 text-white"/>
                            <GoTrash className="cursor-pointer hover:scale-110 duration-300 hover:text-[#d30101] text-white"/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}