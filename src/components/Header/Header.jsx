import "./header.css";
import Logo from "../../imgs/logo.png"

const Header = () => {
    return (
        <div className="header">
            <a href="/">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                    <span>
                        Pict<span>ure</span>Album
                    </span>
                </div>
            </a>

            {/* logo
            <div className="logo">
                PhotoAlbum
            </div> */}
        </div>
    )
}

export default Header