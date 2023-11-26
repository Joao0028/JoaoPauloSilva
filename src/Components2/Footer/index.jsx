import styles from "./Footer.module.scss"
import { BsTelephone, BsInstagram } from "react-icons/bs"
import { TfiLinkedin } from "react-icons/tfi"
import { LuGithub } from "react-icons/lu"

export default function Footer() {
    return <> <footer className="flex justify-center items-center flex-col bg-cor-pretoEscuro text-cor-branco">
        <nav className="container flex justify-center min-[880px]:justify-between py-12">
            <div className="max-[879px]:hidden flex w-[280px] max-w-[390px] lg:w-[350px] xl:w-[370px] 2xl:w-[390px] ">
                <p className="font-bold text-[18px] lg:text-[21px] xl:text-[23px] 2xl:text-[25px] "> Estou disponível para novos projetos. Entre em contato e marcamos uma conversa.</p>
            </div>
            <div className="flex gap-6 sm:gap-12 md:gap-14 min-[880px]:gap-8 ">
                <a title="Iniciar conversa com João Paulo pelo WhatsApp." target="_blank" id={styles.flutuar} href="https://api.whatsapp.com/send?phone=5511958739912&text=Olá,%20vim%20pelo%20seu%20portfólio!">
                    <h1 className="estiloIconeContato "><BsTelephone className="iconesContato" /></h1>
                    <h1 className="font-bold paragrafos text-center">Telefone</h1>
                    <p className="SUB subContato">11 95873-9912</p>
                </a>

                <a title="Ir para o GitHub" target="_blank" id={styles.flutuar} href="https://github.com/Joao0028">
                    <h1 className="estiloIconeContato "><LuGithub className="iconesContato" /></h1>
                    <h1 className="font-bold paragrafos text-center">GitHub</h1>
                    <p className="SUB subContato">Joao0028</p>
                </a>

                <a title="Ir para o Instagram" target="_blank" id={styles.flutuar} href="https://instagram.com/dev.motivado_br">
                    <h1 className="estiloIconeContato "><BsInstagram className="iconesContato" /></h1>
                    <h1 className="font-bold paragrafos text-center">Instagram</h1>
                    <p className="SUB subContato">dev.motivado_br</p>
                </a>

                <a title="Ir para o LinkedIn" target="_blank" id={styles.flutuar} href="https://www.linkedin.com/in/jo%C3%A3o-paulo-nascimento-silva/">
                    <h1 className="estiloIconeContato "><TfiLinkedin className="iconesContato" /></h1>
                    <h1 className="font-bold paragrafos text-center">Linkedin</h1>
                    <p className="SUB subContato">João Paulo</p>
                </a>

            </div>
        </nav>


    </footer>
        <hr className=" border-[#181818] dark:border-[#181818]" />

        <div className="flex justify-center py-3 bg-cor-pretoEscuro">
            <a title="Ir para o GitHub do autor da página." className="font-medium text-cor-cinzaSubtituloWhite dark:text-cor-cinzaSubtituloWhite SUB" href="https://github.com/Joao0028" target="_blank"> &copy; 2023 - Design e Código feitos por <strong className="text-cor-branco font-bold">João Paulo Silva</strong><strong className="text-cor-azulClaroPrincipal dark:text-cor-roxo paragrafos">.</strong> </a>
        </div>
    </>
}