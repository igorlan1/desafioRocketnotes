import {RiShutDownLine} from "react-icons/ri"
import { Container, Profile, H1, Input } from "./styles"

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
        <button>Sair</button>

    </div>
    <img src="https://github.com/igorlan1.png" alt="foto do usuario" />

</Profile>

            
        </Container>


    )
}