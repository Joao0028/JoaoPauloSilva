import { SlMenu } from "react-icons/sl"
import { TfiClose} from "react-icons/tfi"
import { TrocaTema } from "../TrocaTema"
import { useState } from "react"
import MenuMobile from "../MenuMobile"
import { Link } from "react-scroll"


export const Header = (ativaFuncao) => {
const [mostra , mostraSet] = useState(false)

    function ativaFuncao(){
        mostra === false? mostraSet(true) : mostraSet(false)
    }

    return <>
    <header className="shadow-sm flex justify-center bg-[#fafafa] dark:bg-[#141414] text-cor-preto dark:text-cor-branco z-10 fixed left-0 top-0 w-full">
        <section className="container_header items-center py-6 flex justify-between">
            <h1 className=" font-bold text-[18px] lg:text-2xl xl:text-3xl">João Paulo Silva<strong className=" text-cor-azulClaro dark:text-cor-roxo">.</strong></h1>

            <div className="flex items-center lg:text-[18px] md:gap-8 xl:text-[19px] xl:gap-10 text-[14px]">
                <Link smooth={true} to="inicio" className="cursor-pointer md:block transition-all duration-300 hover:scale-110 hover:text-cor-azulClaroPrincipal dark:hover:text-cor-roxo hidden min-[900px]:font-semibold min-[900px]:hover:font-bold " >Inicio</Link>
                <Link smooth={true} to="sobre" className="cursor-pointer md:block transition-all duration-300 hover:scale-110 hover:text-cor-azulClaroPrincipal dark:hover:text-cor-roxo hidden min-[900px]:font-semibold min-[900px]:hover:font-bold " > Sobre</Link>
                <Link smooth={true} to="projetos" className="cursor-pointer md:block transition-all duration-300 hover:scale-110 hover:text-cor-azulClaroPrincipal dark:hover:text-cor-roxo hidden min-[900px]:font-semibold min-[900px]:hover:font-bold " >Projetos</Link>
                <Link smooth={true} to="contato" className="cursor-pointer lg:mr-20 md:mr-4 md:block transition-all duration-300 hover:scale-110 hover:text-cor-azulClaroPrincipal dark:hover:text-cor-roxo hidden min-[900px]:font-semibold min-[900px]:hover:font-bold ">Contato</Link>

                <TrocaTema />
                {mostra === false? <SlMenu className="md:hidden ml-4 text-[20px] cursor-pointer" onClick={ativaFuncao}/> : <TfiClose className="md:hidden dark:text-white ml-4 text-[20px] cursor-pointer" onClick={ativaFuncao}/>}
            </div>
        </section>
    </header>

    {mostra && <MenuMobile fechaMenu={ativaFuncao}/>}
    
    </>
}