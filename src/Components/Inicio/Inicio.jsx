import { Botao } from "../Botoes/Botao/Botao"
import { BotaoWhite } from "../Botoes/BotaoWhite/BotaoWhite"
import styles from "./Inicio.module.scss"
import ProgramadorWhite from "../../assets/Svgs/ProgramadorWhite.svg"
import ProgramadorBlack from "../../assets/Svgs/ProgramadorBlack.svg"
import CurriculoPersonalizado from "../../assets/CurriculoPersonalizado.pdf"
import CurriculoPadrao from "../../assets/CurriculoPadrão.pdf"
import { saveAs } from "file-saver"


export default function Inicio() {
    function fazDownloadDoCurriculo(valor){
        const url = valor;
        if(valor === "https://joao0028.github.io/Ladding-Page-Curriculo/"){
            window.open(valor, "_blank")
        }else{
            const nomeDoCV = valor === "/src/assets/CurriculoPadrão.pdf"? "Currículo Padrão JPS" : "Currículo Personalizado JPS";
            saveAs( url, nomeDoCV)
        }
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
                            <select title="Ver opções de curriculo." onChange={recebeOcurriculo} className="dark:inline  botaoInicioPadrao botaoInicioSm botaoSelect max-sm:rounded-sm"  defaultValue="">
                                <option value="" className="hidden" disabled>Currículo</option>
                                <option title="Fazer download do currículo padrão - sem estilos para facilitar alguns recrutadores." className="optionStyle" value={CurriculoPadrao}>Padrão</option>
                                <option title="Fazer download do currículo personalizado." className="optionStyle" value={CurriculoPersonalizado}>Personalizado</option>
                                <option title="Você será redirecionado a um currículo em formato de landing page personalizada." className="optionStyle" value="https://joao0028.github.io/Ladding-Page-Curriculo/" >Landing Page</option>
                            </select>
                        </div>

                        <div className="block dark:hidden">
                            <BotaoWhite title="Ir para o GitHub de João." target={"_blank"} link="https://github.com/Joao0028" texto="Github" />
                            <BotaoWhite title="Ir para o LinkedIn de João." target={"_blank"} link="https://www.linkedin.com/in/jo%C3%A3o-paulo-nascimento-silva/" texto="LinkedIn" />
                            
                        <select title="Ver opções de curriculo." onChange={recebeOcurriculo} className="dark:hidden"  defaultValue="" id={styles.botao}>
                            <option value="" className="hidden" disabled>Currículo</option>
                            <option title="Fazer download do currículo padrão - sem estilos para facilitar alguns recrutadores." className="optionStyle" value={CurriculoPadrao}>Padrão</option>
                            <option title="Fazer download do currículo personalizado." className="optionStyle" value={CurriculoPersonalizado} >Personalizado</option>
                            <option title="Você será redirecionado a um curriculo em formato de landing page." className="optionStyle" value="https://joao0028.github.io/Ladding-Page-Curriculo/" >Landing Page</option>
                        </select>
                        </div>
                        
                    </div>

                </nav>
                <div id={styles.containerImagem} className="hidden md:block ml-6">
                    <img id={styles.teste} className="dark:hidden block" src={ProgramadorWhite} alt="Uma imagem ilustrativa e animada, de um homem branco de cabelo preto sentado em uma cadeira, atrás de uma mesa com um computador e um notebook, de dia, com um gradiente de fundo azul combinando com o tema do portfólio." />
                    <img className="dark:block hidden" src={ProgramadorBlack} alt="Uma imagem ilustrativa e animada, de um homem branco de cabelo preto sentado em uma cadeira, atrás de uma mesa com um computador e um notebook, de noite, com um gradiente de fundo roxo combinando com o tema do portfólio." />
                </div>
            </div>
        </section>
    </>

}