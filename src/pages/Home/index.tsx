import { FaPlus } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { useEffect, useState } from "react";
import { useCallback } from "react";
export function Home(){
const [tasks, setTasks] = useState<string[]>([]);
const [input, setInput] = useState("");

useEffect(() => {
    let tasksSaved = localStorage.getItem("@chavetasks")
    if(tasksSaved){
        setTasks(JSON.parse(tasksSaved))
    }
},[])

useEffect(() => {
    localStorage.setItem("@chavetasks", JSON.stringify(tasks))
},[tasks])

const createTask = useCallback(() => {
    if(!input){
        alert("Preencha o campo antes de criar a tarefa")
        return;
    }
    setTasks([...tasks, input])
    setInput("")
},[input, tasks])

const deleteTask = (task: string) => {
    let newTasks = tasks.filter((item) => item !== task)
    setTasks(newTasks)
}   
    return(
        <div className="max-w-screen min-h-screen">
            <div className="flex flex-col gap-6 pt-5 justify-center items-center p-5">
                <div className="bg-black rounded-2xl flex flex-col pl-10 pr-10 border border-solid border-[#ffffff3d] pb-8 max-w-2xl w-full">
                    <div className="flex justify-between w-full mt-8 gap-8">
                        <div className="flex gap-4 w-full">
                            <input type="text" className="bg-[#ffffff3d] w-full rounded-lg text-white pl-3" placeholder="Criar uma tarefa" value={input} onChange={(e) => setInput(e.target.value)}/>
                            <button type="button" className="flex items-center gap-2.5 cursor-pointer bg-[#290169] text-white rounded-lg pl-3 pr-3 pt-2 pb-2 hover:bg-[#5201d4] duration-700 hover:text-white" onClick={createTask}>
                                <FaPlus/>
                                Criar
                            </button>
                        </div>
                    </div>
                    {
                    tasks.map((item) => (
                        <section className="flex items-center justify-between mt-6">
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
                                <label className="text-[#ffffffa8]">{item}</label>
                            </div>
                            <div className="flex items-center gap-5">
                                 <button type="button" onClick={() => deleteTask(item)}>
                                    <GoTrash className="cursor-pointer hover:scale-110 duration-300 hover:text-[#d30101] text-white"/>
                                 </button>
                            </div>
                        </section>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}