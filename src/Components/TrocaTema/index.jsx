import { useEffect } from "react"
import { BsSun, BsMoon } from "react-icons/bs"

export const TrocaTema = () => {
    const temaPreferidoDoUsuario = window.matchMedia('(prefers-color-scheme: dark)').matches

    useEffect(() => {
        // Verificar se há algum tema salvo no localStorage
        const temaSalvo = localStorage.getItem('tema')
        // Se houver, aplicar o tema salvo
        if (temaSalvo) {
            document.documentElement.classList.add(temaSalvo)
        } else {
            // Se não houver, aplicar o tema preferido do usuário
            temaPreferidoDoUsuario && document.documentElement.classList.add("dark")
        }
    })

    const muda = () => {
        // Alternar entre os temas
        document.documentElement.classList.toggle("dark")
        // Salvar o tema atual no localStorage
        const temaAtual = document.documentElement.classList.contains("dark") ? "dark" : "light"
        localStorage.setItem('tema', temaAtual)
    }

    return <div>
        <BsSun className="hover:scale-110 hover:text-cor-azulClaroPrincipal dark:hover:text-cor-roxo text-[22px] md:text-[22px] lg:text-[27px]  text-white cursor-pointer hidden dark:block" onClick={muda} />
        <BsMoon className="hover:scale-110 hover:text-cor-azulClaroPrincipal dark:hover:text-cor-roxo text-[20px] md:text-[20px] lg:text-[26px]  text-texto-preto cursor-pointer block dark:hidden" onClick={muda} />
    </div>
}