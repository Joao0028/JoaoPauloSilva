import { Header } from "../../Components/Header/Header";
import Inicio from "../../Components/Inicio/Inicio";
import Projetos from "../../Components/Projetos";
import { SobreMim } from "../../Components/SobreMim";
import MesaWhite from "../../assets/Svgs/MesaWhite.svg"
import MesaBlack from "../../assets/Svgs/MesaBlack.svg"
import styles from "./EstilizacaoDoSVG.module.scss"
import Certificados from "../../Components2/Certificados";
import Contato from "../../Components2/Contato";
import Footer from "../../Components2/Footer";

export default function PaginaComponentes() {
    return (
        <>
            <Header />
            <Inicio />
            <div id={styles.containerImagem} className="sm:mt-[20em] sm:py-20 md:mt-[22em] 2xl:mt-[28em] mt-[18em] max-[640px]:mb-[4em]">
                <img className="dark:hidden block relative mx-auto z-[1] 2xl:w-[500px] 2xl:mb-[-5em] xl:w-[450px] xl:mb-[-4.3em] lg:w-[400px] lg:mb-[-4em] md:w-[300px] md:mb-[-3em] sm:w-[260px] sm:mb-[-2.5em] max-[640px]:w-[200px] max-[640px]:mb-[-2em]" src={MesaWhite} alt="Uma imagem animada de uma pessoa sentada em uma mesa ao lado de um computador." />
                <img className="hidden dark:block relative mx-auto z-[1] 2xl:w-[500px] 2xl:mb-[-5em] xl:w-[450px] xl:mb-[-4.3em] lg:w-[400px] lg:mb-[-4em] md:w-[300px] md:mb-[-3em] sm:w-[260px] sm:mb-[-2.5em] max-[640px]:w-[200px] max-[640px]:mb-[-2em]" src={MesaBlack} alt="Uma imagem animada de uma pessoa sentada em uma mesa ao lado de um computador." />
            <SobreMim />
            </div>
            <Projetos />
            <Certificados/>
            <Contato/>
            <Footer/>
        </>
    )
}