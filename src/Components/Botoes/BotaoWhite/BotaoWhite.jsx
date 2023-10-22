import styles from "./Botao.module.scss"

export const BotaoWhite = ({ link, texto, target, downloaD }) => {
    return <a href={link} target={target} download={downloaD}><button id={styles.botao}>{texto}</button></a>
}