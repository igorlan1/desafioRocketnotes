/* eslint-disable react/prop-types */
import { Container } from "./styles"


export function Button({ title, loading= false, children, ...rest }) {
    return (
        <Container 
        type="button"
        disabled={loading}
        {...rest}
         >
        {loading ? "carregando..." : title}
        {children}
        </Container>
        )
}