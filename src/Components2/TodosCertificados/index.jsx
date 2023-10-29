import { Link } from "react-router-dom"
import { CertificadoTwo } from "./CertificadoTwo/index"
import certificados from "./json/Certificados.json"
import { memo } from "react"

function TodosCertificados() {
    return <>
        <section className="flex justify-center w-full max  py-20 text-cor-preto  dark:text-cor-branco dark:bg-[#121212] ">

            <nav className="container max-sm:mt-14 mt-24">
                <p className="subtitulosDeSecoes text-cor-preto dark:text-cor-cinzaSubtituloWhite">Algumas de minhas conquistas.</p>
                <h1 className="titulosDeSecoes -mt-2">Certificados</h1>

                <div className="flex gap-8 flex-wrap justify-center md:justify-around lg:justify-start lg:gap-11 mt-10">
                    {
                        certificados.map((certificado) => {
                            return (
                                <CertificadoTwo
                                    key={`Certificado de ${certificado.tipo} ${certificado.numero}.`}
                                    imagem={certificado.imagem}
                                    tipo={certificado.tipo}
                                    link={certificado.link}
                                />
                            )
                        })
                    }
                </div>


                <Link className="max-sm:rounded-sm flex m-auto justify-center cursor-pointer lg:w-[155px] text-[12px] 2xl:text-[18px] sm:text-[14px] lg:text-[16px] w-[120px] sm:w-[120px]  bg-cor-azulClaroPrincipal text-cor-branco py-3 hover:hover:opacity-90 font-bold dark:bg-cor-roxo max-md:mt-12  md:mt-20" to="/">Voltar</Link>

            </nav>

        </section>

        <strong id="contato"></strong>
    </>
}

export default memo(TodosCertificados)