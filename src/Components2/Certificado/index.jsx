import styles from "./Certificado.module.scss";

export const Certificado = ({ tipo, imagem, link }) => {
  return (
    <a
      target="_blank"
      href={link}
      id={styles.container}
      className="flex sm:w-[45%] md:w-[40%] lg:w-[48%]"
    >
      <img
        className=" max-[640px]:w-[100%] rounded-sm 
    border-solid border-b-2 lg:border-b-[3px] xl:border-b-4 border-cor-azulClaroPrincipal dark:border-cor-roxo shadow-xl 
    hover:opacity-90
    "
        src={imagem}
        alt={`Um certificado conquistado por João Paulo sobre ${tipo}`}
        loading="lazy"
      />
    </a>
  );
};
