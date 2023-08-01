import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom"

import {Input} from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText" 
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"


export function SignIn() {
return( 
<Container>
<box>
<Form>
<span>
<h1>RocketMovies</h1>
<p>Aplicacoes para acompanhar tudo o que assistir</p>
</span>

<h2>Faça seu Login</h2>

<Input
type="Mail"
placeholder="E-mail"
icon={FiMail}
/>

<Input
type="password"
placeholder="Senha"
icon={FiLock}
/>

<Button
title="Entrar"
/>


<Link to="/register"> 
<ButtonText
title="criar conta"
className="buttontext"
/>
</Link>

</Form>
</box>



<Background/>

</Container>
)

}