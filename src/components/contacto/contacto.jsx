function redirect(){
    window.open('https://wa.me/59898629918', '_blank');
}

const Contacto = () => {
    return (
        <>
            <article className='contacto__contenedor' id='contacto'>
                <h2 className='contacto__texto'>Si estas interesada en nuestros servicios, no dudes en contactarnos</h2>
                <button className='contacto__boton' onClick={redirect}>CONTACTANOS</button>
                <div className='contacto__horario'>
                    <div className='contacto__horario__titulo'>
                        HORARIOS
                    </div>

                    <div className='contacto__horario__contenedor'>
                        <div className='contacto__horario__dia'>
                            LUNES
                        </div>
                        <div className='contacto__horario__hora'>
                            CERRADO
                        </div>
                    </div>

                    <div className='contacto__horario__contenedor'>
                        <div className='contacto__horario__dia'>
                            MARTES
                        </div>
                        <div className='contacto__horario__hora'>
                            9AM - 12AM / 2PM - 8PM
                        </div>
                    </div>

                    <div className='contacto__horario__contenedor'>
                        <div className='contacto__horario__dia'>
                            MIERCOLES
                        </div>
                        <div className='contacto__horario__hora'>
                            9AM - 12AM / 2PM - 8PM
                        </div>
                    </div>

                    <div className='contacto__horario__contenedor'>
                        <div className='contacto__horario__dia'>
                            JUEVES
                        </div>
                        <div className='contacto__horario__hora'>
                            9AM - 12AM / 2PM - 8PM
                        </div>
                    </div>

                    <div className='contacto__horario__contenedor'>
                        <div className='contacto__horario__dia'>
                            VIERNES
                        </div>
                        <div className='contacto__horario__hora'>
                            9AM - 12AM / 2PM - 8PM
                        </div>
                    </div>

                    <div className='contacto__horario__contenedor'>
                        <div className='contacto__horario__dia'>
                            SABADO
                        </div>
                        <div className='contacto__horario__hora'>
                            9AM - 12AM / 2PM - 8PM
                        </div>
                    </div>

                    <div className='contacto__horario__contenedor'>
                        <div className='contacto__horario__dia'>
                            DOMINGO
                        </div>
                        <div className='contacto__horario__hora'>
                           CERRADO
                        </div>
                    </div>
                    
                </div>
            </article>
        </>
    );
}

export default Contacto;