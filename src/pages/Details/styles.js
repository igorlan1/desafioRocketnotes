import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
   
    display: grid;
grid-template-rows: 116px auto ;
grid-template-areas: 
"header" 
"content";

 Section {
    padding-bottom:156px ;
    h2 {
        background: red;
        display: none;
    };
    p {
        text-align: justify;
    }

};




`
export const Links = styled.ul`
    list-style: none;
    margin-top: 40px;
    display: flex;
    gap: 8px;

    >li {
    margin-right: 8px;
    background-color: ${({theme}) => theme.COLORS.GRAY_200};
    padding: 8px 16px;
    border-radius:10px;
    margin-bottom: 48px;

}
    

    `

export const Note = styled.div`

>svg {
    height: 25px;
    width: 25px;
    margin-right: 10px;
    color: ${({theme}) => theme.COLORS.PINK};
}

`

export const H1 = styled.h1`
font-size: 36px ;
margin-right: 19px;

`

export const Head = styled.div`
display: flex ;
align-items: center;
margin-top: 24px;

`

export const Info = styled.div`
margin-top: 24px;
display: flex;
gap: 8px;
align-items: center;

>img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    
}

>p {
    margin-right: 8px;
    
}

svg {
    color: ${({theme}) => theme.COLORS.PINK};

}
`

