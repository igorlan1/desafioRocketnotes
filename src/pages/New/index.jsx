import { Container, Input, Textarea } from "./styles"

import { Link } from "react-router-dom"

import { Header } from "../../components/Header"   
import {ButtonText} from "../../components/ButtonText"
import {Section} from "../../components/Section"
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { Button } from "../../components/Button"

export function New () {
    return(
        <Container>
<Header/>

<main>
    <box>
        <Link to="/">
<ButtonText title="voltar"/>
        </Link>
    </box>


<h1>Novo filme</h1>
<nav>
<Input placeholder="Titulo"/>
<Input placeholder="Sua nota (de 0 a 5)"/>
</nav>


<Textarea placeholder="Observaçoes"/>

<Section
title="Marcadores"      
>
 <ul>
    <li>React <AiOutlineClose/> </li>
    <li>React <AiOutlineClose/> </li>
    <li>React <AiOutlineClose/> </li>

    <li>Novo marcador <AiOutlineClose/>  </li>

</ul>      
</Section>
<footer>
<Button title = "Excluir filme"/>
<Button title = "Salvar alteraçoes" />
</footer>

</main>

        </Container>
    )
} 