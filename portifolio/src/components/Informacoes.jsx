import styled from "styled-components"
import foto from "../assets/foto.jpg"
import { useState } from "react"

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #a278da;
    padding: 40px;
`
const Card = styled.div`
    width: 420px;
    padding: 35px;
    background-color: #8b62c2;
    border-radius: 15px;
    text-align: center;
    color: white;
    box-shadow: 0 10px 30px rgba(60, 30, 90, 0.3);
`

const Foto = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
`

const Resumo = styled.h2`
    font-size: 20px;
    margin-bottom: 20px;
`

const Secao = styled.p`
    font-size: 15px;
    line-height: 1.5;
    margin: 15px 0;
`

const Titulo = styled.span`
    font-weight: bold;
`


const BotaoEmail = styled.button`
    background-color: #8b62c2;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #9baeff;
    }
`

const BotaoCelular = styled.button`
    background-color: #8b62c2;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #9baeff;
    }
`

const BotaoGitHub = styled.button`
    background-color: #8b62c2;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #9baeff;
    }
`

const Alerta = styled.div` position: fixed; top: 30px; right: 30px; background-color: #8b62c2; color: white; padding: 20px 25px; border-radius: 15px; box-shadow: 0 8px 25px rgba(60, 30, 90, 0.35); font-size: 16px; font-weight: bold; z-index: 1000; animation: aparecer 0.3s ease; @keyframes aparecer { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } } `

function Informacoes() {

    const [alerta, setAlerta] = useState("")

    return (
        <Container>

            <Card>

                <Foto src={foto} alt="Foto de Fulano" />
                
                <Resumo>
                    Ana Lidia Tasca | 15 anos | Desenvolvedor Web
                </Resumo>

                <Secao>
                    <Titulo>Perfil:</Titulo>{" "}
                    Olá! Eu sou a Ana Lidia e sou Desenvolvedor Web.
                    Adoro programar em React e em outras diversas
                    tecnologias novas.
                </Secao>

                <Secao>
                    <Titulo>Experiências:</Titulo>{" "}
                    Já trabalhei com React, html, css, js, desenvolvendo projetos
                    como Sites e passei 3 anos fazendo curso
                    na SuperGeeks.
                </Secao>

                <Secao>
                    <Titulo>Competências:</Titulo>{" "}
                    Lógica de programação, raciocínio computacional,
                    Python, HTML, CSS, JavaScript e React.
                </Secao>
                
                {alerta && (
                    <Alerta>
                        {alerta}
                    </Alerta>
                )}

                <BotaoEmail onClick={() => setAlerta("Email: analidiatasca@gmail.com")}>
                    Email
                </BotaoEmail>

                    <BotaoCelular onClick={() => setAlerta("Celular: +5511999999999")}>
                        Celular
                    </BotaoCelular>

                    <BotaoGitHub onClick={() => window.open("https://github.com/analidiatasca", "_blank")}>
                        Github
                    </BotaoGitHub>

                

            </Card>

        </Container>
    )
}

export default Informacoes
