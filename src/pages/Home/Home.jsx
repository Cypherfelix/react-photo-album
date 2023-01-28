import Header from "../../components/Header/Header"
import LeftBody from "../../components/LeftBody/LeftBody"
import RightBody from "../../components/RightBody/RightBody"
import "./home.css"

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="mainBody">
                <LeftBody />
                <RightBody />
            </div>
        </div>
    )
}

export default Home