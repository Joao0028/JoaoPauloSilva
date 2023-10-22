export const Botao = ({ link, texto, target, downloaD }) => {
    return <a href={link} target={target} download={downloaD}><button className=" botaoInicioPadrao botaoInicioSm max-sm:rounded-sm">{texto}</button></a>
}