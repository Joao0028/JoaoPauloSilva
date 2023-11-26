import { Link } from "react-router-dom"
import { Certificado } from "./Certificado/index"
import styles from "./Certificados.module.scss"
import json from "../../assets/json/PortfolioJPS.json"

export default function Certificados() {
    return <><section id={styles.container} className="flex justify-center md:py-32 w-full  py-20 text-cor-branco bg-gradient-to-b from-cor-azulClaroPrincipal to-cor-azulEscuro  dark:bg-gradient-to-r dark:from-cor-roxo dark:to-cor-azulClaroPrincipal">

        <nav className="container min-[500px]:mt-24">
            <p className="subtitulosDeSecoes">Algumas de minhas conquistas.</p>
            <h1 className="titulosDeSecoes -mt-2">Certificados</h1>

            <div className="flex gap-8 flex-wrap justify-center md:justify-around lg:justify-between mt-10">
                {
                    json.algunsCertificados.map((certificado) => {
                        return (
                            <Certificado
                                key={certificado.id}
                                imagem={certificado.imagem}
                                tipo={certificado.tipo}
                                link={certificado.link}
                            />
                        )
                    })
                }
            </div>


            <Link title="Ir para seção de Certificados, onde estão todos os certificados de João Paulo." className="flex m-auto justify-center cursor-pointer lg:w-[155px] text-[12px] 2xl:text-[18px] sm:text-[14px] lg:text-[16px] w-[120px] sm:w-[120px]  bg-cor-pretoEscuro text-cor-branco py-3 hover:hover:opacity-90 font-bold dark:bg-cor-cinzaClaro max-md:mt-12  md:mt-20 max-sm:rounded-sm" to="/Certificados">Ver Mais</Link>

        </nav>

    </section>

        <strong id="contato"></strong>
    </>
}