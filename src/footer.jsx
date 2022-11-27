function Header(){
    let year = new Date().getFullYear();
    return(
        <footer className="Footer">
            <h2>Copyright © {year} </h2>
        </footer>
    )
}

export default Header;