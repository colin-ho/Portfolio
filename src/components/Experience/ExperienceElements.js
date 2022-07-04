import styled,{keyframes} from 'styled-components'

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:40px;
    margin-bottom:50px;
    padding: 0 15px;
`;

export const Experience = styled.div`
    display:flex;
    max-width:200px;
    font-size:16px;
    line-height:34px;
    margin-bottom:10px;
    color:${({clicked})=>(clicked ? '#45d0af':'#ededed')};
    cursor:pointer;
    transition:all 0.3s ease-in-out;
    &:hover{
        transition:all 0.3s ease-in-out;
        background-color: #344966;
    }
    background-color:${({clicked})=>(clicked ? '#344966':'none')};
`

export const Bar = styled.div`
    width:4px;
    background-color:${({clicked})=>(clicked ? '#45d0af':'#ededed')};
    transition: 0.3s ease-in-out;
    margin-right:10px;
`

export const Subtitle = styled.p`
    max-width:440px;
    margin-bottom:24px;
    font-size:16px;
    line-height:24px;
    color:${({darkText})=>(darkText ? '#0D1821':'#ededed')};
`;

const inout = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

export const ExperienceWrapper = styled.div`
    max-width: 540px;
    padding-top:15px;
    padding-bottom:0px;
    animation: ${inout} 1s;
`

