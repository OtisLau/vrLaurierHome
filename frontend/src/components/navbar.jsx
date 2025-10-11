import logo from '../images/vrlogo.png'
const Navbar = () => {
    return (
        <div className="flex flex-row justify-between">
            <img src={logo} className="w-16 h-auto" alt="VR Laurier Logo" />
            <div className="flex flex-row space-x-4 items-center">
                <p>Home</p>
                <p>Events</p>
                <p>About</p>
                <p>Portal</p>
            </div>
        </div>
    )
}

export default Navbar
