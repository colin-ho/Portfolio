import styled,{keyframes} from 'styled-components'

export const InfoContainer = styled.div`
    color:#ededed;
    background: ${({lightBg}) => (lightBg ? '#ededed':'#0D1821')};
    @media screen and (max-width: 768px){
        padding:70px 0;
    }
    position:relative;
    z-index:1;
    overflow:hidden;
    -webkit-box-shadow: (inset 0 20px 20px -20px rgba(0,0,0,0.8));
    -moz-box-shadow: inset 0 20px 20px -20px rgba(0,0,0,0.8);
    box-shadow: inset 0 20px 20px -20px rgba(0,0,0,0.8);
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index:3;
    min-height: 740px;
    height:fit-content;
    width:100%;
    max-width:1100px;
    margin-right:auto;
    margin-left:auto;
    padding:0 24px;
    justify-content:center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto,1fr);
    align-items:center;
    grid-template-areas: ${({imgStart})=>imgStart ? `'col2 col1'`:`'col1 col2'`};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart})=>(imgStart ? `'col1' 'col2'`:`'col1 col1' 'col2 col2'`)};

    }
`;

export const Column1 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col1;

`;
export const Column2 = styled.div`
    margin-bottom:15px;
    padding:0 15px;
    grid-area:col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top:0;
    padding-bottom:0px;
`;

export const TopLine = styled.p`
    font-size:16px;
    line-height:16px;
    font-weight:700;
    letter-spacing:1.4px;
    text-transform:uppercase;
    margin-bottom:16px;
    color:${({darkText})=>(darkText ? '#0D1821':'#ededed')};
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size:48px;
    line-height:1.1;
    font-weight:600;
    color:${({lightText})=>(lightText ? '#f7f8f8':'#344966')};

    @media screen and (max-width:480px){
        font-size:32px;
    }
`;

export const Subtitle = styled.p`
    max-width:440px;
    margin-bottom:24px;
    font-size:16px;
    line-height:24px;
    color:${({darkText})=>(darkText ? '#0D1821':'#ededed')};
`;

export const List = styled.ul`
    max-width:440px;
    margin-bottom:35px;
    margin-left:24px;
    font-size:18px;
    line-height:24px;
    color:${({darkText})=>(darkText ? '#0D1821':'#ededed')};
`
export const LiItem = styled.li`

`
export const BtnWrap = styled.div`
    display:flex;
    justify-content:flex-start;
`;

export const ImgWrap = styled.div`
    max-width:555px;
    height:100%;
    @media screen and (max-width:768px){
        padding-top: 70px;    
    }
    display:flex;
    justify-content: center;
`;

export const Img = styled.img`
    width: 70%;
    
    @media screen and (max-width:480px){
        width: 70%;
    }
    margin: 0 0 10px 0px;
    padding-right:0;
    outline:2px solid black;
`

export const IconWrap1= styled.div`
    max-width:555px;
    justify-content: center;
    display:${({showModal})=>(showModal ? 'none':'flex')};
`

export const IconWrap2= styled.div`
    max-width:555px;
    flex-direction:row;
    justify-content:space-around;
    margin-top:150px;
    @media screen and (max-width:768px){
        margin-top:120px;
    }
    margin-bottom:50px;
    display:${({showModal})=>(showModal ? 'none':'flex')};
`

export const IconWrap3= styled.div`
    max-width:555px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    @media screen and (max-width:768px){
        margin-top:-50px;
        padding-top: 70px;    
    }
    @media screen and (max-width:480px){
        margin-top:-50px;
        margin-left: -30px;
    }
`
const float = keyframes`
    0% {
		box-shadow: 0 5px 15px 0px rgba(180, 205, 237, 1);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(180, 205, 237, 0);
		transform: translatey(-15px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(180, 205, 237, 1);
		transform: translatey(0px);
	}
`;

export const Icon1 = styled.a`
    color:${({lightBg}) => (lightBg ? '#000':'#ededed')};
    font-size:44px;
    padding:10px;
    border-radius: 5%;
    border:solid 5px #CACF85;
    width:fit-content;
    animation: ${float} 3s linear infinite;
    &:hover{
        transition:all 0.3s ease-in-out;
        color: #B4CDED;
    }
`
export const Icon2 = styled.a`
    color:${({lightBg}) => (lightBg ? '#000':'#ededed')};
    width:fit-content;
    font-size:44px;
    padding:10px;
    border-radius: 5%;
    border:solid 5px #CAFFB9;
    animation: ${float} 3s linear infinite;
    &:hover{
        transition:all 0.3s ease-in-out;
        color: #B4CDED;
    }
`

export const Icon3 = styled.a`
    color:${({lightBg}) => (lightBg ? '#000':'#ededed')};
    width:fit-content;
    font-size:44px;
    padding:10px;
    border-radius: 5%;
    border:solid 5px #AD5C51;
    animation: ${float} 3s linear infinite;
    &:hover{
        transition:all 0.3s ease-in-out;
        color: #B4CDED;
    }
`

export const Icon4 = styled.p`
    color:${({lightBg}) => (lightBg ? '#000':'#ededed')};
    white-space: nowrap;
    height:65px;
    width:fit-content;
    font-size:40px;
    padding:10px;
    border: none;
    align-self: flex-end;
    margin-right:70px;
`

