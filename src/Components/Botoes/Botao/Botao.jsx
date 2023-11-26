export const Botao = ({ link, texto, target, downloaD, title }) => {
    return <a href={link} title={title} target={target} download={downloaD}><button className=" botaoInicioPadrao botaoInicioSm max-sm:rounded-sm">{texto}</button></a>
}