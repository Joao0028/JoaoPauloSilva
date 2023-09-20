import { TrocaTema } from "../../Components/TrocaTema"
import { useState } from "react"
import { Link } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5"


export const HeaderTwo = (ativaFuncao) => {
const [mostra , mostraSet] = useState(false)

    function ativaFuncao(){
        mostra === false? mostraSet(true) : mostraSet(false)
    }

    return <>
    <header className="shadow-sm flex justify-center bg-[#fafafa] dark:bg-[#141414] text-cor-preto dark:text-cor-branco z-10 fixed left-0 top-0 w-full">
        <section className="container_header items-center py-6 flex justify-between">
            <h1 className=" font-bold text-[18px] lg:text-2xl xl:text-3xl">João Paulo Silva<strong className=" text-cor-azulClaro dark:text-cor-roxo">.</strong></h1>

            <div className="flex items-center lg:text-[18px] md:gap-8 xl:text-[19px] xl:gap-10 text-[14px]">
                <Link to="/" className="cursor-pointer block hover:scale-110 hover:text-cor-azulClaroPrincipal dark:hover:text-cor-roxo max-md:mr-4" > <IoHomeOutline className="text-[22px] md:text-[22px] lg:text-[27px]"/> </Link>
                <TrocaTema />
            </div>
        </section>
    </header>
    </>
}