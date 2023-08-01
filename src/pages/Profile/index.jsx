import { Container } from "./styles"
import {AiTwotoneStar, AiOutlineStar} from "react-icons/ai";

import { Link } from "react-router-dom"

import { ButtonText } from "../../components/ButtonText"
import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import {Button} from "../../components/Button"
import {Input} from "../../components/Input"

export function Profile() {
    return(
        <Container>
      <header>
<Link to="/">
        <ButtonText title="Voltar " />

</Link>
        

      </header>
      <main>


     <form>
<avatar>

<img src="https://github.com/igorlan1.png" alt="foto do usuario" />

<label htmlFor="avatar">
<FiCamera/>
<input 
type="file" 
id="avatar"
/>
</label>

</avatar>
<Input 
type="text" 
placeholder="Igor  Lima"
icon= {FiUser}
/>
<Input 
type="Mail" 
placeholder="Igor@mail.com"
icon= {FiMail}
/>

<box>

<Input 
type="password" 
placeholder="Senha atual"
icon= {FiLock}
/>

<Input 
type="password" 
placeholder="Nova senha"
icon= {FiLock}
/>
</box>

     <Button title="Salvar" />
     </form>

      </main>
        
        </Container>
    )
}