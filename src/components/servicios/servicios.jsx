import corte from '../../assets/corteDePelo.webp'
import maquillaje from '../../assets/maquillaje.jpg'
import tratamiento from '../../assets/tratamientoCapilar.webp'
import progresivo from '../../assets/alisante.webp'
import color from '../../assets/fotoTinta.jpg'
import depilacion from '../../assets/depilacion.webp'
import mechas from '../../assets/mechas.jpg'

const servicios = () => {
    return(
        <>
            <header className='servicios__titulo' id='servicios'>
                <h1>Servicios</h1>
            </header>
            <section className='servicios'>
                <div className='servicios__contenedor'>

                    <div className='servicios__caja__derecha'>
                        <div className='servicios__contenedor__foto'>
                            <img className='servicios__foto' src={corte} alt='Foto de Corte de Pelo'></img>
                        </div>
                        <div className='servicios__texto'>
                            <h2 className='servicios__nombre'>Corte y Peinado</h2>
                            <div className='servicios__descripcion'>
                                <p>Actualizá tu estilo con mi servicio personalizado. Te brindo un corte exclusivo y un peinado que te destacará en cualquier ocasión. ¡Descubrí tu nueva imagen conmigo y lucí espléndido en cada momento especial!</p>
                            </div>
                        </div>
                    </div>

                    <div className='servicios__caja__izquierda' id='tratamiento'>
                        <div className='servicios__texto' >
                            <h2 className='servicios__nombre'>Tratamientos Capilares</h2>
                            <div className='servicios__descripcion'>
                                <p>Devolvé vida a tu cabello con nuestros tratamientos especializados. Experimentá la diferencia con productos de calidad y técnicas innovadoras que revitalizan, hidratan y fortalecen tu melena. ¡Dale a tu cabello el cuidado que se merece y lucí un pelo radiante y saludable en todo momento!</p>
                            </div>
                        </div>
                        <div className='servicios__contenedor__foto'>
                            <img className='servicios__foto' src={tratamiento} alt='Foto de Tratamiento Capilar'></img>
                        </div>
                    </div>

                    <div className='servicios__caja__derecha'>
                        <div className='servicios__contenedor__foto'>
                            <img className='servicios__foto'src={progresivo} alt='Foto de progresivos'></img>
                        </div>
                        <div className='servicios__texto'>
                            <h2 className='servicios__nombre'>Progresivos</h2>
                            <div className='servicios__descripcion'>
                                <p>Descubrí la suavidad y el brillo de un cabello liso y sin frizz con nuestros alisados naturales, libres de formol. Con productos de alta calidad y técnicas seguras, logramos resultados sorprendentes sin comprometer la salud de tu cabello.</p>
                            </div>
                        </div>
                    </div>

                    <div className='servicios__caja__izquierda' id='tinta'>
                        <div className='servicios__texto' >
                            <h2 className='servicios__nombre'>Color</h2>
                            <div className='servicios__descripcion'>
                                <p>Renová tu estilo con nuestra tintura profesional. Colores duraderos y vibrantes para un cabello lleno de vida. ¡Lucí un look espectacular con nosotros!</p>
                            </div>
                        </div>
                        <div className='servicios__contenedor__foto'>
                            <img className='servicios__foto' src={color} alt='Foto de tinta de cabello'></img>
                        </div>
                    </div>

                    <div className='servicios__caja__derecha'>
                        <div className='servicios__contenedor__foto'>
                            <img className='servicios__foto'src={depilacion} alt='foto de depilacion'></img>
                        </div>
                        <div className='servicios__texto'>
                            <h2 className='servicios__nombre'>Depilacion</h2>
                            <div className='servicios__descripcion'>
                                <p>Descubrí la suavidad y la belleza de una piel sin vello con nuestro servicio profesional de depilación. Con técnicas seguras y productos de calidad, te ofrecemos resultados duraderos y una experiencia cómoda y placentera. ¡Dale a tu piel el cuidado que se merece y lucí radiante todo el año!</p>
                            </div>
                        </div>
                    </div>

                    <div className='servicios__caja__izquierda' id='tinta'>
                        <div className='servicios__texto' >
                            <h2 className='servicios__nombre'>Maquillaje</h2>
                            <div className='servicios__descripcion'>
                                <p>Resaltá tu belleza natural con nuestro servicio de maquillaje profesional. Con productos de alta calidad y técnicas expertas, te ofrecemos un look impecable para cualquier ocasión. ¡Lucí radiante y segura de ti misma con nuestro maquillaje personalizado!</p>
                            </div>
                        </div>
                        <div className='servicios__contenedor__foto'>
                            <img className='servicios__foto' src={maquillaje} alt='foto de maquillaje'></img>
                        </div>
                    </div>

                    <div className='servicios__caja__derecha'>
                        <div className='servicios__contenedor__foto'>
                            <img className='servicios__foto' src={mechas} alt='Foto de Mechas'></img>
                        </div>
                        <div className='servicios__texto'>
                            <h2 className='servicios__nombre'>Mechas</h2>
                            <div className='servicios__descripcion'>
                                <p>Iluminá tu cabello y destacá tu estilo con nuestras mechas expertas. Con técnicas precisas y productos de calidad, te ofrecemos un look moderno y personalizado que realza tu belleza natural. ¡Descubrí un nuevo brillo en tu cabello con nuestras mechas profesionales!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );  
}

export default servicios;