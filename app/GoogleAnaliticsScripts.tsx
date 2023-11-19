
/*
    Creamos un componente con el codigo de script que queremos usar en la app
    y así lo tenemos localizado.
    No lo metemos dentro de components por que no es un componente a usar en varios sitios, solo en Layout.tsx
*/

import Script from 'next/script'
import React from 'react'

const GoogleAnaliticsScripts = () => {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/is?id=G-E720JHXSJ1" />
            <Script /*strategy='varias posibilidades, por defecto afterInteractive, es una vez sea la pagina interactiva, que es el que necesitamos en este caso'*/>
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config','G-E720JHXSJ1');`}
            </Script> {/*inline script lo pasamos todo como una cadena dentro de un objeto, para que no de errores de intelisense*/}
        </>
    )
}

export default GoogleAnaliticsScripts