import styles from "./Botao.module.scss"

export const BotaoWhite = ({link, texto, target , downloaD })=>{
    return <button id={styles.botao}><a href={link} target={target} download={downloaD}>{texto}</a></button>
}