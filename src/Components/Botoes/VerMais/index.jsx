export const VerMais = ({link, texto , target}) => {
    return <a href={link} target={target}><button className=" lg:w-[145px] text-[12px] 2xl:text-[18px] sm:text-[14px] lg:text-[16px] w-[120px] sm:w-[120px] max-sm:rounded-sm bg-cor-pretoEscuro py-3 hover:hover:opacity-90 font-bold dark:bg-cor-roxo">{texto}</button></a>
}