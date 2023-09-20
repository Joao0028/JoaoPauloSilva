import { VerMais } from "../Botoes/VerMais"
import styles from "./SobreMim.module.scss"
import GradientWhite from "../../assets/Imagens/Circulos/GradientWhite.png"
import GradientDark from "../../assets/Imagens/Circulos/GradientDark.png"
import MinhaFoto from "../../assets/Imagens/FotoJPS.jpg"

export const SobreMim = () => {
    return <>
        <strong id="sobre"></strong>
        <section id={styles.container} className="flex text-cor-branco justify-center md:py-32 w-full  py-20  bg-gradient-to-b from-cor-azulClaroPrincipal to-cor-azulEscuro  dark:bg-gradient-to-r dark:from-cor-cinza dark:to-cor-cinza ">

            <div className="container">
                <div className="mb-8">
                    <h2 className="subtitulosDeSecoes">Um breve resumo sobre mim.</h2>
                    <h1 className="titulosDeSecoes -mt-2">Sobre Mim</h1>
                </div>

                <div id={styles.containerConteudo} className="flex md:mb-8 lg:mb-8 mb-6">

                    <div id={styles.containerFotos} className="lg:mr-[20em] 2xl:mr-[24em] 2xl:mt-[2em]">
                        <img className="block dark:hidden md:w-[150px] lg:w-[255px] 2xl:w-[300px] absolute" src={GradientWhite} alt="Um gradient de um circulo" />
                        <img className="hidden dark:block md:w-[150px] lg:w-[255px] 2xl:w-[300px] absolute" src={GradientDark} alt="Um gradient de um circulo" />
                        <img id={styles.fotoJ} className=" shadow-lg md:w-[110px] md:h-[110px] md:mt-[4em] md:ml-[4em] lg:w-[200px] lg:h-[200px] lg:mt-[5em] lg:ml-[6em] 2xl:w-[220px] 2xl:h-[220px] 2xl:mt-[7em] 2xl:ml-[8em] absolute rounded-full" src={MinhaFoto} alt="Uma foto de João Paulo, o criador deste portifólio" />
                    </div>

                    <div> <p className="2xl:mb-8 text-[13px] mb-3 sm:mb-2 sm:text-[14px] md:ml-[14em] lg:ml-0 text-justify md:text-[14px] md:mb-3 lg:mb-4 lg:text-[15px] 2xl:text-[18px] ">Olá! Eu sou o João, um desenvolvedor <strong className="dark:text-cor-roxo">Front-end</strong> de 17 anos, apaixonado por transformar ideias em realidade, combinando habilidades <strong className="dark:text-cor-roxo">técnicas</strong> e <strong className="dark:text-cor-roxo">criatividade</strong>. Estou sempre em busca de novas oportunidades para aperfeiçoar meus conhecimentos e aprender novas technologias.</p>
                        <p className="2xl:mb-8 text-[13px] mb-3 sm:mb-2 sm:text-[14px] md:ml-[14em] lg:ml-0 text-justify md:text-[14px] md:mb-5 lg:mb-4 lg:text-[15px] 2xl:text-[18px] ">Minhas principais competências incluem o desenvolvimento de aplicações web utilizando <strong className="dark:text-cor-roxo">React</strong>, <strong className="dark:text-cor-roxo">JavaScript</strong>, <strong className="dark:text-cor-roxo">Sass</strong>, <strong className="dark:text-cor-roxo">Tailwind</strong> e noções básicas de <strong className="dark:text-cor-roxo">GIT</strong>. Com uma sólida base de conhecimento nessas tecnologias, sou capaz de criar interfaces atraentes e funcionais que proporcionam uma <strong className="dark:text-cor-roxo">experiência de usuário excepcional</strong>.</p>
                        <p className="2xl:mb-8 text-[13px] mb-3 sm:mb-2 sm:text-[14px] text-justify md:text-[14px] md:mb-3 lg:mb-4 lg:text-[15px] 2xl:text-[18px] ">Meu objetivo é ingressar no mercado de trabalho na <strong className="dark:text-cor-roxo">área de tecnologia</strong>, seja como <strong className="dark:text-cor-roxo">desenvolvedor júnior</strong> ou <strong className="dark:text-cor-roxo">estagiário</strong>. Estou aberto a<strong className="dark:text-cor-roxo"> qualquer oportunidade relacionada à tecnologia</strong>, pois acredito que essa seja uma maneira de iniciar minha carreira profissional como desenvolvedor e aplicar meus conhecimentos teóricos na prática. Eu estou aqui para te ajudar, <strong className="dark:text-cor-roxo">vamos fazer á diferença juntos!</strong></p></div>
                </div>

                <VerMais target="_blank" texto="Ver mais" link="https://joao0028.github.io/Ladding-Page-Curriculo/" />
            </div>
        </section>
        <strong id="projetos"></strong>
    </>
}