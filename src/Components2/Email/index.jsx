import { useRef, useState } from "react"
import styles from "./Email.module.scss"
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Email = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");

    function notify() {
        toast.success("E-mail enviado com sucesso!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }
    function notifyError() {
        toast.error("Você atingiu o limite semanal!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    function notifyLimiteMaximoMensal() {
        toast.warning("Ops! caixa de email lotada.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }


    const formRef = useRef(null);

    // Criar uma função para verificar o limite de e-mails
    function verificarLimite() {
        // Obter o número de e-mails enviados do localStorage ou definir como zero se não existir
        let emailsEnviados = localStorage.getItem("emailsEnviados") || 0;
        // Obter a data da última vez que o usuário enviou um e-mail do localStorage ou definir como null se não existir
        let ultimaData = localStorage.getItem("ultimaData") || null;
        // Obter a data atual
        let dataAtual = new Date();
        // Obter o número da semana atual
        let semanaAtual = Math.floor(dataAtual.getTime() / (1000 * 60 * 60 * 24 * 7));
        // Se a última data não for null, obter o número da semana anterior
        let semanaAnterior = ultimaData ? Math.floor(new Date(ultimaData).getTime() / (1000 * 60 * 60 * 24 * 7)) : null;
        // Se a semana atual for diferente da semana anterior, redefinir o número de e-mails enviados para zero
        if (semanaAtual !== semanaAnterior) {
            emailsEnviados = 0;
            localStorage.setItem("emailsEnviados", emailsEnviados);
        }
        // Se o número de e-mails enviados for menor que 3, retornar true
        if (emailsEnviados < 3) {
            return true;
        }
        // Se não, retornar false
        return false;
    }

    function enviarEmail(e) {

        e.preventDefault();

        setNome(nome);
        setEmail(email);
        setAssunto(assunto);
        setMensagem(mensagem);

        formRef.current.reset();

        // Verificar se o usuário pode enviar um e-mail
        if (verificarLimite()) {
            // Incrementar o número de e-mails enviados no localStorage
            let emailsEnviados = localStorage.getItem("emailsEnviados") || 0;
            emailsEnviados++;
            localStorage.setItem("emailsEnviados", emailsEnviados);
            // Atualizar a data da última vez que o usuário enviou um e-mail no localStorage
            let dataAtual = new Date();
            localStorage.setItem("ultimaData", dataAtual);

            const tampleteDoEmail = {
                Nome: nome,
                Assunto: assunto,
                Mensagem: mensagem,
                Email: email
            }

            emailjs.send("service_jt3ropf", "template_ptfcj5k", tampleteDoEmail, "SXBwQfReULiJMTwIB")
                .then((response) => {
                    if (response.status === 200) {
                        // Chamar a função notify
                        notify();
                    }
                    console.log("Email enviado com sucesso!", response.status)
                    setNome("");
                    setEmail("");
                    setAssunto("");
                    setMensagem("");
                }, (erro) => {
                    notifyLimiteMaximoMensal()
                    console.log("Erro: ", erro);
                })
        } else {
            // Chamar a função notifyError
            notifyError();
        }
    }


    return <form className="flex flex-col gap-2 min-[880px]:w-[500px] min-[1280px]:w-[600px] min-[1534px]:w-[650px]" onSubmit={enviarEmail} ref={formRef} >

        <div className="max-sm:flex-col min-[880px]:flex-col xl:flex-row flex gap-2 ">
            <input value={nome} id={styles.campoNome} required placeholder="Nome" className="text-cor-roxo max-lg:w-[100%] min-lg:w-[50%] xl:w-[50%]  campoEmail paragrafos " type="text" autoComplete="name" name="Nome" onChange={(e) => setNome(e.target.value)} />
            <input value={email} id={styles.campoEmail} required placeholder="E-mail" className="max-lg:w-[100%] min-lg:w-[50%] xl:w-[50%]  campoEmail paragrafos " type="email" autoComplete="email" name="Email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <input value={assunto} id={styles.campoAssunto} required placeholder="Assunto" className="w-full campoEmail paragrafos" type="text" name="Assunto" onChange={(e) => setAssunto(e.target.value)} />
        <textarea value={mensagem} id={styles.campoMensagem} placeholder="Mensagem" className="w-full campoEmail paragrafos  h-20 max-h-32 min-h-[45px] xl:min-h-[58px] min-[880px]:h-[120px] min-[1280px]:h-[162px] 2xl:h-[170px] 2xl:max-h-[220px]" name="Mensagem" onChange={(e) => setMensagem(e.target.value)} />

        <input className="w-full py-3 font-bold hover:opacity-90 cursor-pointer bg-cor-azulClaroPrincipal paragrafos dark:bg-cor-roxo active:text-cor-azulClaroPrincipal active:bg-cor-branco dark:active:bg-cor-branco dark:active:text-cor-roxo" type="submit" value="Enviar" />

    </form>
}