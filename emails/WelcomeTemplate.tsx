import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview } from '@react-email/components';


const WelcomeTemplate = ({ name }: { name: string }) => {
    return (
        <Html>
            <Preview>Welcome aboard!</Preview>
            <Body style={body}>
                <Container>
                    <Text style={heading}>Hello {name}</Text>
                    <Link href='https://codewithmosh.com'>https://codewithmosh.com</Link>
                </Container>
            </Body>
        </Html>
    )
}

/*
    tambien podemos dar estilo con Tailwind: importarlo tb de @react-email/components:

         <Html>
            <Preview>Welcome aboard!</Preview>
            <Tailwind>
                <Body className="bg-white">
                    <Container>
                        <Text className="font-bold text-3xl">Hello {name}</Text>
                        <Link href='https://codewithmosh.com'>https://codewithmosh.com</Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
*/


const body: CSSProperties = {  /*añadimos CSSProperties para tener intelisense*/
    background: '#fff'
}

const heading: CSSProperties = {
    fontSize: '32px'
}

export default WelcomeTemplate