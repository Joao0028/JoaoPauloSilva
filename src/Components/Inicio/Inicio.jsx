import { Botao } from "../Botoes/Botao/Botao"
import { BotaoWhite } from "../Botoes/BotaoWhite/BotaoWhite"
import styles from "./Inicio.module.scss"
import ProgramadorWhite from "../../assets/Svgs/ProgramadorWhite.svg"
import ProgramadorBlack from "../../assets/Svgs/ProgramadorBlack.svg"
import Curriculo from "../../assets/Curriculo.pdf"
import { useState } from "react"
import { saveAs } from "file-saver"

export default function Inicio() {
    function fazDownloadDoCurriculo(valor){
        const url = valor;
        const nomeDoCV = "JoãoPauloCV.pdf";
        saveAs( url, nomeDoCV)
    }

    function recebeOcurriculo(evento){
        const opcaoSelecionada = evento.target.value;
        if(opcaoSelecionada !== ""){
            fazDownloadDoCurriculo(opcaoSelecionada)
            evento.target.value = "";
        }
    }

    return <>
        <strong id="inicio" className="text-transparent">.</strong>

        <section className="flex justify-center w-full mt-[8em] md:mt-[14em] ">
            <div className="container flex justify-between">
                <nav className="text-cor-preto dark:text-cor-branco flex ml-2 md:ml-0 justify-center  flex-col md:w-[50%]">
                    <div>
                        <h1 className="font-bold text-[16px] sm:text-[18px] lg:text-[25px] xl:text-[30px]">Olá, o meu nome é <strong className="hidden dark:contents text-cor-roxo">João Paulo</strong> <strong className="dark:hidden" id={styles.frase}>João Paulo</strong></h1>
                        <h1 className=" text-[12px] sm:text-[15px] lg:text-[22px] xl:text-[24px] font-medium">Eu sou um desenvolvedor web Front-end.</h1>

                        <div className="hidden dark:block">
                            <Botao target={"_blank"} link="https://github.com/Joao0028" texto="Github" />
                            <Botao target={"_blank"} link="https://www.linkedin.com/in/jo%C3%A3o-paulo-nascimento-silva/" texto="LinkedIn" />
                            <select onChange={recebeOcurriculo} className="dark:inline  botaoInicioPadrao botaoInicioSm botaoSelect max-sm:rounded-sm"  defaultValue="">
                                <option value="" className="hidden" disabled>Currículo</option>
                                <option className="optionStyle" value={Curriculo}>Padrão</option>
                                <option className="optionStyle" value={Curriculo} >Personalizado</option>
                            </select>
                        </div>

                        <div className="block dark:hidden">
                            <BotaoWhite target={"_blank"} link="https://github.com/Joao0028" texto="Github" />
                            <BotaoWhite target={"_blank"} link="https://www.linkedin.com/in/jo%C3%A3o-paulo-nascimento-silva/" texto="LinkedIn" />
                            
                        <select onChange={recebeOcurriculo} className="dark:hidden"  defaultValue="" id={styles.botao}>
                            <option value="" className="hidden" disabled>Currículo</option>
                            <option className="optionStyle" value={Curriculo}>Padrão</option>
                            <option className="optionStyle" value={Curriculo} >Personalizado</option>
                        </select>
                        </div>
                        
                    </div>

                </nav>
                <div id={styles.containerImagem} className="hidden md:block ml-6">
                    <img id={styles.teste} className="dark:hidden block" src={ProgramadorWhite} alt="Uma imagem animada de um programador codando em sua mesa" />
                    <img className="dark:block hidden" src={ProgramadorBlack} alt="Uma imagem animada de um programador codando em sua mesa" />
                </div>
            </div>
        </section>
    </>

}