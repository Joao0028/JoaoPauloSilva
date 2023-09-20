/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cor: {
          azulClaro:"#36d1dc",
          azulClaroPrincipal: "#38BDF8",
          azulEscuro:"#5b86e5",
          roxo: "#986DFF",
          preto:"#272341",
          pretoEscuro:"#111111",
          branco: "#ffffff",
          cinza:" #141414",
          cinzaClaro:" #35363A",
          cinzaSubtituloDark: "#9CA3AF",
          cinzaSubtituloWhite: "#828282",
          cinzaContato:"rgba(17, 17, 17, 0.63)",
        },
        
      }
    },
  },
  plugins: [],
}

