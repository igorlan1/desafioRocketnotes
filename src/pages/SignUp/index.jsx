import { Container, Form, Background } from "./styles";

import {Input} from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText" 
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"


export function SignUp() {
return( 
<Container>
<box>
<Form>
<span>
<h1>RocketMovies</h1>
<p>Aplicacoes para acompanhar tudo o que assistir</p>
</span>

<h2>Crie sua conta</h2>

<Input
type="text"
placeholder="nome"
icon={FiUser}
/>

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
title="Cadastrar"
/>

<ButtonText
title="Voltar para o login"
className="buttontext"
/>

</Form>
</box>



<Background/>

</Container>
)

}