import CardWidget from "../CardWidget/CardWidget"

function NavBar({cartCount}) {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Rohe Technology</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Rohe Technology</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sobre Nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contactanos</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Redes Sociales
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">Instagram</a></li>
                    <li><a className="dropdown-item" href="#">Facebook</a></li>
                    <li><a className="dropdown-item" href="#">YouTube</a></li>
                    </ul>
                </li>
                </ul>
                <form className="d-flex" role="search">
                 <CardWidget cartCount={cartCount}/>
                </form>
            </div>
            </div>
        </div>
        </nav>
    )
    
}

export default NavBar