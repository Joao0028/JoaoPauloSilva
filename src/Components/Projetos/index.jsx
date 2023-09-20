import Projeto from "../Projeto";
import meusProjetos from "./json/projetos.json"

export default function Projetos() {
    return <section className="flex justify-center">

        <div className="container">
            <h1 className="titulosDeSecoes text-cor-preto dark:text-cor-branco mb-[2em]">Projetos</h1>

            <nav className="flex max-[640px]:justify-center flex-col md:mb-16 ">
                {meusProjetos.map((projeto) => {
                    return (
                        <Projeto
                            key={projeto.id}
                            titulo={projeto.tituloDoProjeto}
                            descricao={projeto.descricao}
                            subtitulo={projeto.tipo}
                            imagem={projeto.imagem}
                            linkProjeto={projeto.linkProjeto}
                            linkRepositorio={projeto.linkRepositorio}
                        />
                    )
                })}

            </nav>

            <a className="max-sm:rounded-sm flex m-auto justify-center cursor-pointer lg:w-[155px] text-[12px] 2xl:text-[18px] sm:text-[14px] lg:text-[16px] w-[120px] sm:w-[120px]  bg-cor-azulClaroPrincipal text-cor-branco py-3 hover:hover:opacity-90 font-bold dark:bg-cor-roxo  mb-24" target="_blank" href="https://github.com/Joao0028?tab=repositories">Ver mais</a>

        </div>
    </section>
}