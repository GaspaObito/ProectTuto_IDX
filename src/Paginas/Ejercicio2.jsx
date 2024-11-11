import React from 'react';

function Ejercicio2() {
    const haloJuego = ['halo1.jpg', 'halo2.jpg', 'halo3.jpg', 'halo4.jpg', 'halo5.jpg', 'halo6.jpg', 'haloreach.jpg']

    const [haloSeleccionado, sethaloSeleccionado] = React.useState(0)

    function banderaSiguiente() {
        if (haloSeleccionado < haloJuego.length - 1) {
            sethaloSeleccionado(haloSeleccionado + 1)
        }
    }

    function banderaPrevia() {
        if (haloSeleccionado > 0) {
            sethaloSeleccionado(haloSeleccionado - 1)
        }
    }

    return (
        <div>
            <h1>Videojuegos de Halo</h1>
            <p><img style={{ width: '80rem', maxWidth: '100%' }} src={"/images/" + haloJuego[haloSeleccionado]} alt="halo" /></p>
            <p>
                <input type="button" value="<" onClick={banderaPrevia} />
                <input type="button" value=">" onClick={banderaSiguiente} />
                {haloJuego[haloSeleccionado]}
            </p>
        </div>

    )
}

export default Ejercicio2;
// 