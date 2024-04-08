import logoVert from '../../assets/logoVert.png'
import instagram from '../../assets/instagram.png'
import whatsapp from '../../assets/whatsapp.png'

const footer = () => {
    return (
        <>
            <footer className='footer__contenedor'>
                <div className='footer__items'>
                    <div>
                        <img className='footer__logoVertical' src={logoVert} alt='foto logo vertical'></img>
                        <div className='footer__redirecciones'>
                            <a className='footer__redirectInstagram' href='https://www.instagram.com/sebassvega/' target='_blank'><img className='footer__logoInstagram'src={instagram}></img></a>
                            <div className='footer__linea'></div>
                            <a className='footer__redirectWhatsapp' href='https://wa.me/59892144150?text=Hola,%20me%20interesa%20uno%20de%20sus%20servicios' target='_blank'><img className='footer__logoWhatsapp' src={whatsapp}></img></a>
                        </div>
                    </div>
                    
                    <div className='footer__horario'>
                        <div className='footer__horario__titulo'>
                            <h3>Horario</h3>
                        </div>

                        <div className='footer__horario__contenedor'>
                            <div className='footer__horario_dia'>
                                LUNES
                            </div>
                            <div className='footer__horario__hora'>
                                CERRADO
                            </div>
                        </div>

                        <div className='footer__horario__contenedor'>
                            <div className='footer__horario_dia'>
                                MARTES
                            </div>
                            <div className='footer__horario__hora'>
                                9AM-12AM / 2PM-8PM
                            </div>
                        </div>

                        <div className='footer__horario__contenedor'>
                            <div className='footer__horario_dia'>
                                MIERCOLES
                            </div>
                            <div className='footer__horario__hora'>
                                9AM-12AM / 2PM-8PM
                            </div>
                        </div>

                        <div className='footer__horario__contenedor'>
                            <div className='footer__horario_dia'>
                                JUEVES
                            </div>
                            <div className='footer__horario__hora'>
                                9AM-12AM / 2PM-8PM
                            </div>
                        </div>

                        <div className='footer__horario__contenedor'>
                            <div className='footer__horario_dia'>
                                VIERNES
                            </div>
                            <div className='footer__horario__hora'>
                                9AM-12AM / 2PM-8PM
                            </div>
                        </div>

                        <div className='footer__horario__contenedor'>
                            <div className='footer__horario_dia'>
                                SABADO
                            </div>
                            <div className='footer__horario__hora'>
                                9AM-12AM / 2PM-8PM
                            </div>
                        </div>

                        <div className='footer__horario__contenedor'>
                            <div className='footer__horario_dia'>
                                DOMINGO
                            </div>
                            <div className='footer__horario__hora'>
                                CERRADO
                            </div>
                        </div>

                    </div>

                    <div className='footer__contacto'>
                        <div className='footer__horario__titulo'>
                            <h3>Contacto</h3>
                            
                        </div>
                        <div>
                            <p>+598 98 629 918</p>
                        </div>
                        
                    </div>
                </div>
                
            </footer>
        </>
    );
}

export default footer;