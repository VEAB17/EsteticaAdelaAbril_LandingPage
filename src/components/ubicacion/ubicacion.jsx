
const Ubicacion = () => {
    return (
        <>
            <div className='ubicacion__direccion' id='ubicacion'>
                <div className='ubicacion__direccion_textoYlogo'>
                    <h3 className='ubicacion__textoDireccion'>Direccion</h3>
                    <p className='ubicacion__textoDireccion'>Jose Pedro Varela esquina Larranaga</p>
                    <p className='ubicacion__textoDireccion'>Sauce, Canelones</p>
                </div>
            </div>
            <div className='ubicacion__contenedor'>
                <iframe className="ubicacion__mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4121.122856057879!2d-56.07009460299431!3d-34.642780466831866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a031afca313711%3A0x7ace0a08cb4eb92f!2sEst%C3%A9tica%20A.%20Abril!5e0!3m2!1ses-419!2suy!4v1712109185370!5m2!1ses-419!2suy" width="900" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    );
}

export default Ubicacion;