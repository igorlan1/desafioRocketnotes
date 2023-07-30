import styled from "styled-components"

export const Container = styled.div`
svg {
color: ${({theme}) => theme.COLORS.PINK};

}
height: 100vh;
display: grid;
grid-template-areas: 
"header"
"content";


> main {
    padding: 40px 106px 85px 123px;
 display: grid;
 grid-area: content;
overflow-y: auto;
    
    box {
        margin-bottom: 24px;
    }
    
    
    Section {
        margin: 40px 0;
        
    }
    
    nav {
        display: flex;
        justify-content: space-between;
        gap: 40px;
        margin-top: 40px;
        
        
    }
    
}

ul {
    list-style: none;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    width: 100%;
    height: 88px;
    display: flex;
    gap: 24px;
    padding: 16px;
    border-radius: 8px;
    
    svg {
        font-size: 24px;
    }
    
    li {
        background-color: ${({theme}) => theme.COLORS.GRAY_300};
        padding:16px ;
        border-radius: 10px;
        display: flex;
        gap: 16px;
        
        &:last-child {
            background-color: transparent;
            border: blue dashed 2px;
            
            
        }
    }
    
}

footer {
    display: flex;
    gap: 40px;
    
    Button {
        height: 56px;
    }
}


`

export const Input = styled.input`
background-color: ${({theme}) => theme.COLORS.GRAY_300};
border: none;
border-radius: 10px;
color: ${({theme}) => theme.COLORS.GRAY_100};

width: 100%;
height: 55px;
padding: 18px 16px;

`

export const Textarea = styled.textarea`
background-color: ${({theme}) => theme.COLORS.GRAY_300};
border: none;
border-radius: 10px;
color: ${({theme}) => theme.COLORS.GRAY_100};
height: 274px;
margin-top: 40px;
`

