/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {           /*sitios externos desde donde podemos coger imagenes con el componente Image (for security reasons)*/
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bit.ly',
            },
        ],
    },

}

module.exports = nextConfig
