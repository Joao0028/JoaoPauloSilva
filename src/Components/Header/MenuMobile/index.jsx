import styles from "./MenuMobile.module.scss"
import { Link } from "react-scroll"
import { useEffect, useState } from "react";

export default function MenuMobile({ fechaMenu }) {
    const [menuStyle, setMenuStyle] = useState({
        transform: 'translateY(-100%)',
        transition: 'transform 0.5s ease',
      });
    
      useEffect(() => {
        // Atualiza o estado para mostrar o componente lentamente ao ser renderizado
        setMenuStyle({ transform: 'translateY(0%)', transition: 'transform 0.5s ease' });
      }, []);
    return <nav style={menuStyle} id={styles.menu} className=" md:hidden flex justify-center z-[3] fixed top-[75px] h-full w-full bg-gradient-to-t text-cor-branco font-bold from-cor-azulEscuro to-cor-azulClaroPrincipal dark:from-[#151515] dark:to-[#151515]">

        <div className="flex flex-col items-center text-[22px] mt-20 gap-8 ">
            <Link smooth={true} className="cursor-pointer" to="inicio" onClick={fechaMenu}>Inicio</Link>
            <Link smooth={true} className="cursor-pointer" to="sobre" onClick={fechaMenu}>Sobre</Link>
            <Link smooth={true} className="cursor-pointer" to="projetos" onClick={fechaMenu}>Projetos</Link>
            <Link smooth={true} className="cursor-pointer" to="contato" onClick={fechaMenu}>Contato</Link>
        </div>

    </nav>
}