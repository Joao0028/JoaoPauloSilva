import { VerMais } from "../Botoes/VerMais"
import styles from "./Projeto.module.scss"

export default function Projeto({ titulo, subtitulo, descricao, imagem, linkProjeto, linkRepositorio }) {
    return <div className="flex max-md:flex-col-reverse pb-8 md:pb-12 sm:gap-5 md:gap-[3.5em] lg:gap-12 xl:gap-24">

        <div className=" text-cor-preto dark:text-cor-branco max-w-[640px] max-[640px]:py-2 flex flex-col gap-2 lg:gap-3 lg:justify-center">
            <h1 className="font-bold max-[640px]:text-[16px] 
            sm:text-[19px]
            lg:text-[22px]
            2xl:text-[25px]
            ">{titulo}</h1>
            <h2 className="flex items-center gap-1 text-cor-cinzaSubtituloWhite dark:text-cor-cinzaSubtituloDark
            max-[640px]:text-[12px]
            sm:text-[13px]
            lg:text-[14px]
            2xl:text-[16px]
            ">{subtitulo}</h2>
            <p className="text-justify paragrafos font-medium">{descricao}</p>

            <div className="flex gap-4 max-[400px]:justify-between mt-2">
                <a target="_blank" className="max-[640px]:w-[130px] sm:w-[135px] lg:w-[162px]  2xl:w-[182px] text-[12px] 2xl:text-[18px] sm:text-[13px] lg:text-[15px] hover:hover:opacity-90  font-bold bg-cor-pretoEscuro dark:bg-cor-cinzaClaro text-cor-branco text-center py-[0.75rem] max-sm:rounded-sm" href={linkProjeto}>Ver projeto</a>
                <a target="_blank" className="max-[640px]:w-[130px] sm:w-[135px] lg:w-[162px]  2xl:w-[182px] text-[12px] 2xl:text-[18px] sm:text-[13px] lg:text-[15px] hover:hover:opacity-90  font-bold bg-cor-pretoEscuro dark:bg-cor-cinzaClaro text-cor-branco text-center py-[0.75rem] max-sm:rounded-sm" href={linkRepositorio}>Ver Repositório</a>
            </div>
        </div>

        <div id={styles.containerImagem}>
            <a target="_blank" href={linkProjeto}><img className="w-[100%] max-w-[768px] border-solid border-b-2 lg:border-b-[3px] xl:border-b-4 border-cor-azulClaroPrincipal dark:border-cor-roxo min-sm:shadow-xl 
            md:w-[320px] lg:w-[420px] 2xl:w-[550px] hover:opacity-90  max-sm:border-none max-sm:rounded-2xl
            " src={imagem} alt={`Uma imagem do projeto ${titulo}.`} 
            loading="lazy"
            /></a>
        </div>

    </div>
}