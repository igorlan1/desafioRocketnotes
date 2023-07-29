import { Container } from "./styles"
import {AiTwotoneStar, AiOutlineStar} from "react-icons/ai";


export function Summary({title, children, ...rest}) {
return (
    <Container>
        <h2>{title}</h2>
        <AiTwotoneStar/>
          <AiTwotoneStar/>
          <AiTwotoneStar/>
          <AiTwotoneStar/>
          <AiOutlineStar/>
        {children}
    </Container>

    )

}