import { Container, Profile, H1, Input } from "./styles"
import { Link } from "react-router-dom"


export function Header() {
    return(
        <Container>
    <H1> RocketNotes</H1>

<Input
placeholder="pesquisar pelo titulo "
/>

<Profile>
    <div>
        <strong>Igor Lima</strong>
       <Link to="signin">
        <button>Sair</button>
       </Link>

    </div>
    <Link to="profile">
    <img src="https://github.com/igorlan1.png" alt="foto do usuario" />
    </Link>


</Profile>

            
        </Container>


    )
}