
import logo from "../assets/images/logo.png"
import Card from "./components/card"
import Footer from "./components/footer"
import Navbar from "./components/navbar"

function Home(){
    return(
        <>      
            <Navbar />
            <div className="flex flex-wrap gap-10 p-5">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Footer />
        </>
    )
}

export default Home