import logo from "./NotesLogo.png"
function Header(){

    return(
        <div className="Header">
            <img src={logo} alt="Logo Image" height="70px" width="70px"/>
            <h2>....Shubham Notes</h2>
        </div>
    )
}

export default Header;