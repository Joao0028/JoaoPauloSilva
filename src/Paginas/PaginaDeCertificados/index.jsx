import Footer from "../../Components2/Footer"
import { HeaderTwo } from "../../Components2/HeaderTwo"
import ScrollToTop from "../../Components2/ScrollToTop"
import TodosCertificados from "../../Components2/TodosCertificados"

export default function PaginaDeCertificados() {
    return <>
        <ScrollToTop>
            <HeaderTwo />
            <TodosCertificados />
            <Footer />
        </ScrollToTop>
    </>
}