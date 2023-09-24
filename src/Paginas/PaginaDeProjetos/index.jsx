import Footer from "../../Components2/Footer";
import { HeaderTwo } from "../../Components2/HeaderTwo";
import { Link } from "react-router-dom";
import PaginaEmConstrucao from "../../assets/Svgs/PaginaEmConstrucao.svg";
import { BsGithub } from "react-icons/bs";

export default function PaginaDeProjetos() {
  return (
    <>
      <HeaderTwo />

      <section className="flex lg:mb-24 lg:mt-40 max-lg:mt-36 justify-center ">
        <main className="container">
          <div className="flex justify-center mb-3">
            <img
              src={PaginaEmConstrucao}
              className="
              transition-all duration-[0.8s] ease-in-out transform min-[1024px]:hover:scale-105
              2xl:w-[500px] xl:w-[450px] lg:w-[400px] md:w-[300px] sm:w-[260px] max-[640px]:w-[200px] "
              alt="Uma bela ilustração de error 404 ou página não encontrada."
            />
          </div>

          <h1 className="titulosDeSecoes text-center max-sm:text-[18px] lg:mb-2  text-cor-preto dark:text-cor-branco">
            Ops! Página em construção.
          </h1>
          <p className="paragrafos text-center max-md:hidden">
            Está página ainda está sendo desenhada e pensada para que você tenha
            a melhor esperiência possível.
          </p>
          <p className="paragrafos text-center">
            Muito em breve estarei finalizando, de uma olhada nos meus
            repositórios no github.
          </p>

          <div className="flex justify-center m-auto gap-3">
            <Link
              className="max-sm:rounded-sm flex justify-center cursor-pointer lg:w-[155px] text-[12px] 2xl:text-[18px] sm:text-[14px] lg:text-[16px] w-[120px] sm:w-[120px]  bg-cor-azulClaroPrincipal text-cor-branco py-3 hover:hover:opacity-90 font-bold dark:bg-cor-roxo max-md:mt-4  md:mt-6"
              to="/"
            >
              Voltar
            </Link>
            <a
              href="https://github.com/Joao0028?tab=repositories"
              className="max-sm:rounded-sm px-4 flex justify-center cursor-pointer  bg-cor-azulClaroPrincipal text-cor-branco py-3 hover:hover:opacity-90 font-bold dark:bg-cor-roxo max-md:mt-4  md:mt-6"
              target="_blank"
            >
              <BsGithub className="iconesContato dark:text-cor-branco"/>
            </a>
          </div>
        </main>
      </section>

      <div className=" max-md:hidden max-lg:fixed max-lg:bottom-0 max-lg:w-full">
        <Footer />
      </div>
    </>
  );
}
