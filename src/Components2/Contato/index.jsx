import { Email } from "../Email"
import setaParaBaixo from "../../assets/Svgs/teste.svg"

export default function Contato() {
    return <section className="flex justify-center py-20 text-cor-branco bg-cor-cinzaClaro dark:bg-cor-cinza">
        <nav className="container">
            <h1 className="titulosDeSecoes mb-8">Contato</h1>

            <div className="flex gap-8 max-[880px]:justify-center max-[879px]:flex-col  min-[880px]:justify-between" >


                <div>
                    <div className="bg-cor-cinzaContato dark:bg-cor-pretoEscuro px-6 py-12 min-xl:py-20 
                 border-solid border-b-2 lg:border-b-[3px] xl:border-b-4 border-cor-azulClaroPrincipal dark:border-cor-roxo
                 min-[880px]:max-w-[430px] h-fit 2xl:max-w-[472px] 2xl:px-9
                ">
                        <p className="font-bold paragrafos mb-1">Me mande um e-mail agora mesmo, insira as suas informações nos campos e mande sua mensagem.</p>
                        <p className="text-cor-cinzaSubtituloWhite dark:text-cor-cinzaSubtituloWhite font-bold SUB">Eu preciso do seu Nome e endereço de E-mail para que eu consiga lhe retornar.</p>
                    </div>

                    <div className="min-[880px]:block hidden min-[880px]:flex  mt-[32px] ml-[24px]">
                        <div>
                            <p className="paragrafos font-bold text-cor-cinzaSubtituloWhite dark:text-cor-cinzaSubtituloWhite ">Ou se caso preferir,</p>
                            <p className="paragrafos font-bold">Fale comigo nas redes sociais.</p>

                        </div>

                        <img className="mt-[50px] ml-[32px]" src={setaParaBaixo} alt="Uma seta apontando para baixo, onde ficam as redes sociais de João Paulo." />
                    </div>

                </div>


                <Email />

                <div className="max-[879px]:block hidden max-[879px]:flex mt-[28px]">
                    <div>
                        <p className="paragrafos font-bold text-cor-cinzaSubtituloWhite dark:text-cor-cinzaSubtituloWhite ">Ou se caso preferir,</p>
                        <p className="paragrafos font-bold">Fale comigo nas redes sociais.</p>

                    </div>

                    <img className="w-[36px] mt-[50px] ml-[32px]" src={setaParaBaixo} alt="Uma seta apontando para baixo, onde ficam as redes sociais de João Paulo." />
                </div>

            </div>

        </nav>
    </section>
}