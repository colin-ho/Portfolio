import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    min-height:calc(100vh - 80px);
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    background: #0D1821;
    -webkit-box-shadow: inset 0 20px 20px -20px rgba(0,0,0,0.8);
    -moz-box-shadow: inset 0 20px 20px -20px rgba(0,0,0,0.8);
    box-shadow: inset 0 20px 20px -20px rgba(0,0,0,0.8);
    padding-top:100px;
    padding-bottom:82px;
`;

export const ProjectsWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:20px;

    @media screen and (max-width:1020px){
        grid-template-columns:1fr 1fr;
    }

    @media screen and (max-width:768px){
        grid-template-columns:1fr;
        padding: 0 20px;
    }
`

export const ProjectsCard = styled.button`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    margin:10px 15px;
    padding:30px;
    transition: all 0.2s ease-in-out;
    outline:none;
    border:none;
    width:300px;
    @media screen and (max-width:768px){
        width:250px;
    }
    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor:pointer;
    }
`

export const ProjectsIcon = styled.img`
    margin: auto;
    height:230px;
    width: 160px;
    border-radius:12px;
    border:2px solid black;
`

export const ProjectsH1=styled.h1`
    font-size:48px;
    color:#ededed;
    margin-bottom:50px;

    @media screen and (max-width:480px){
        font-size:2rem;
    }
`

export const ProjectsH2=styled.h2`
    font-size:18px;
    margin-bottom:5px;
    margin-top:15px;
`

export const ProjectsP = styled.p`
    font-size: 14px;
    text-align:center;

`