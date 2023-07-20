import { Container } from "./styles"
import {AiOutlineArrowLeft} from "react-icons/ai";

export function ButtonText ({title, isActive = false, ...rest}) {
return (
<Container
type="button"
$isactive = {isActive.toString()}
{...rest}
>
<AiOutlineArrowLeft/>
{title}
</Container>
)
}