import { HeaderTwo } from "../../Components2/HeaderTwo";
import { Link } from "react-router-dom";
import ErrorWhite from "../../assets/Svgs/Error404White.svg";
import ErrorBlack from "../../assets/Svgs/Error404Black.svg";
import Footer from "../../Components2/Footer";

export const NaoEncontrada = () => {
  return (
    <>
      <HeaderTwo />

      <section className="flex lg:mb-24 lg:mt-40 max-lg:mt-40 justify-center">
        <main className="container">
          <div className="flex justify-center mb-3">
            <img
              src={ErrorWhite}
              className=" block dark:hidden 2xl:w-[500px] xl:w-[450px] lg:w-[400px] md:w-[300px] sm:w-[260px] max-[640px]:w-[200px] "
              alt="Uma bela ilustração de error 404 ou página não encontrada."
            />
            <img
              src={ErrorBlack}
              className=" hidden dark:block 2xl:w-[500px] xl:w-[450px] lg:w-[400px] md:w-[300px] sm:w-[260px] max-[640px]:w-[200px] "
              alt="Uma bela ilustração de error 404 ou página não encontrada."
            />
          </div>

          <h1 className="titulosDeSecoes text-center max-sm:text-[18px] lg:mb-2  text-cor-preto dark:text-cor-branco">
            Ops! Página não encontrada.
          </h1>
          <p className="paragrafos text-center">
            Tem certeza de que era isso que você estava procurando?
          </p>
          <p className="paragrafos text-center">
            Aguarde uns instantes e recarregue a página, ou volte para a página
            inicial.
          </p>

          <Link
            className="max-sm:rounded-sm flex m-auto justify-center cursor-pointer lg:w-[155px] text-[12px] 2xl:text-[18px] sm:text-[14px] lg:text-[16px] w-[120px] sm:w-[120px]  bg-cor-azulClaroPrincipal text-cor-branco py-3 hover:hover:opacity-90 font-bold dark:bg-cor-roxo max-md:mt-4  md:mt-6"
            to="/"
          >
            Voltar
          </Link>
        </main>
      </section>

      <div className=" max-md:hidden max-lg:fixed max-lg:bottom-0 max-lg:w-full">
        <Footer />
      </div>
    </>
  );
};
