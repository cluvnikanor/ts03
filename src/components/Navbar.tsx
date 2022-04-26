import { useState } from "react"
import { Link } from "react-router-dom"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import './Navbar.css'

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const links = [
        {
            id: 1,
            path: "/",
            text: "Home",
        },
        {
            id: 2,
            path: "/Mandala",
            text: "About",
        },
    ]

    const handleToggle = () => {
        setNavbarOpen(prev => !prev);
    }

    return (
        <nav className="navBar">
            <button
                className="navbtn"
                onClick={handleToggle}
            >
                {navbarOpen ? (
                    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                ) : (
                    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                )}
            </button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                {links.map(link => {
                    (
                        <li
                            key={link.id}
                            onClick={handleToggle}>
                                {link.text}kojlj
                            <Link to={link.path}>{link.text}</Link>
                        </li>
                    )
                })}
                <li>ghhkghk</li>
            </ul>
        </nav>
    )
}

export default Navbar