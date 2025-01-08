import styles from "./navBar.module.css";

const NavBar = () => {
    return (
        <div>
            <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
                <div className="bg-dark p-4">
                    <ul className={styles.linksText}>
                        <li><a href="home">Inicio</a></li>
                        <li><a href="aboutUs">Sobre Nosotros</a></li>
                        <li><a href="services">Servicios</a></li>
                        <li><a href="contactUs">Contacto</a></li>
                    </ul>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
