import styles from "./Botao.module.scss"

export const BotaoWhite = ({ link, texto, target, downloaD, title }) => {
    return <a href={link} target={target} title={title} download={downloaD}><button id={styles.botao}>{texto}</button></a>
}