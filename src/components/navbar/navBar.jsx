import logoA from '../../assets/logoA.png';
import flechaArriba from '../../assets/flechaArriba.png'
import { useState } from 'react';
import menu from '../../assets/menu.png'
import equis from '../../assets/equis.png'
import whatsapp from '../../assets/whatsappVerde.png'

function scrollToServicios() {
    const navbarHeight = 60;
    const section = document.getElementById('servicios');
    const sectionTop = section.offsetTop - navbarHeight;
    window.scrollTo({ top: sectionTop, behavior: 'smooth' });
}

function scrollToUbicacion() {
    const navbarHeight = 60;
    const section = document.getElementById('ubicacion');
    const sectionTop = section.offsetTop - navbarHeight;
    window.scrollTo({ top: sectionTop, behavior: 'smooth' });
}

function scrollToContacto() {
    const navbarHeight = 60;
    const section = document.getElementById('contacto');
    const sectionTop = section.offsetTop - navbarHeight;
    window.scrollTo({ top: sectionTop, behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function redirect(){
    window.open('https://wa.me/59892144150?text=Hola,%20me%20interesa%20uno%20de%20sus%20servicios', '_blank');
}

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const cerrarYMoverAServicios = () => {
        scrollToServicios();
        setIsOpen(!isOpen);
    };

    const cerrarYMoverAContacto = () => {
        scrollToContacto();
        setIsOpen(!isOpen);
    };

    const cerrarYMoverAUbicacion = () => {
        scrollToUbicacion();
        setIsOpen(!isOpen);
    };

    return (
     <>
        <div className='volver'>
            <img src={flechaArriba} onClick={scrollToTop}></img>
        </div>

        <div className='whatsapp'>
            <img src={whatsapp} onClick={redirect}></img>
        </div>

        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className='centrarMenuCerrar'> 
            <img src={equis} onClick={toggleSidebar} className='botonMenuCerrar'></img>
        </div>
        <ul>
            <li><a onClick={cerrarYMoverAServicios}>SERVICIOS</a></li>
            <li><a onClick={cerrarYMoverAContacto}>CONTACTO</a></li>
            <li><a onClick={cerrarYMoverAUbicacion}>UBICACION</a></li>
        </ul>
        </div>


        <div className='navBar__limite'>
            <nav>
                
                <img className='navBar__logo' src={logoA} alt="Logo_Peluqueria"></img>
                <ul className='navBar'>
                    <li className='navBar__item'><a className='navBar__item__text' onClick={scrollToServicios}>SERVICIOS</a></li>
                    <li className='navBar__item'><a className='navBar__item__text' onClick={scrollToContacto}>CONTACTO</a></li>
                    <li className='navBar__item'><a className='navBar__item__text' onClick={scrollToUbicacion}>UBICACION</a></li>
                </ul>
            </nav>
            <div className='centrarMenuAbrir'>
                <img src={menu} className='botonMenuAbrir' onClick={toggleSidebar}></img>
            </div>
        </div>
     </>
    );
}

export default NavBar;