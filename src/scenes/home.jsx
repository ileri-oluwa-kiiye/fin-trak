import Mainnav from "../components/nav/mainnav"
import Mainhero from "../components/mainhero/mainhero"
import Secondhero from "../components/mainhero/secondhero"
import Thirdsection from "../components/sections/third"
import Fourthsection from "../components/sections/forth"
import Fifthsection from "../components/sections/fifth"
import SixthSection from "../components/sections/sixth"
import Seventhsection from "../components/sections/seventh"
import Footer from "../components/sections/footer"



const Home = () => {
    return(
        <>
            <Mainnav />
            <Mainhero />
            <Secondhero />
            <Thirdsection />
            <Fourthsection />
            <Fifthsection />
            <SixthSection />
            <Seventhsection />
            <Footer/>
        </>
    )
}


export default Home