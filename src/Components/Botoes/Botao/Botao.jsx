export const Botao = ({link, texto, target, downloaD})=>{
    return <button className=" botaoInicioPadrao botaoInicioSm max-sm:rounded-sm"><a href={link} target={target} download={downloaD}>{texto}</a></button>
}