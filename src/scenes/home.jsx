import Mainnav from "../components/nav/mainnav"
import Mainhero from "../components/mainhero/mainhero"
import Secondhero from "../components/mainhero/secondhero"
import Thirdsection from "../components/sections/third"
import Fourthsection from "../components/sections/forth"
import Fifthsection from "../components/sections/fifth"



const Home = () => {
    return(
        <>
            <Mainnav />
            <Mainhero />
            <Secondhero />
            <Thirdsection />
            <Fourthsection />
            <Fifthsection />
        </>
    )
}


export default Home