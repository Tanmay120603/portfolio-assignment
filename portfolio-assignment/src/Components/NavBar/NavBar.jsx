import "./navBar.css"

function NavBar(){
    const navItems=["Home","Skills","Projects","Contact"]
    return(
        <div className="navbar-container">
              <ul>
                {navItems.map(navItem=><a href={`#${navItem}`} className="md-text poppins-font">{navItem}</a>)}
            </ul> 
        </div>
    )
}

export default NavBar