import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'

export const Chatcon =styled.div`

  width: 320px;
  position: fixed;
  right: 2%;
  z-index:20;
  transition: 0.3s ease-in-out;
  margin-bottom:2%;
  opacity: ${({chatopen}) => (chatopen ? '100%' : '0')};
  bottom:${({chatopen})=>(chatopen ? '0': '-100%')};
`

export const Chatbox = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 100%;
  height: 500px;
  border-radius: 25px;
  background-color: #eee;
  overflow:hidden;
`

export const Header = styled.div`
  background-color: #344966;
  color:#ededed;
  padding: 15px;
  border-radius: 20px 20px 0 0;
  font-size: 20px;
  font-weight:00;
`

export const CloseIcon = styled(FaTimes)`
    color: #ededed;
`;

export const Icon = styled.div`
    position:absolute;
    top:1rem;
    right:0.8rem;
    background:transparent;
    font-size:1.5rem;
    cursor:pointer;
    outline:none;
`;
export const MessageArea = styled.div`
    display:flex;
    flex-direction:column;
    overflow: scroll;
    height: 370px;
    padding: 15px 15px 0px 15px;
`

export const Right = styled.div` 
  border-radius: 15px 15px 0px 15px;
  margin:5px 5px 5px 5px;
  align-self:flex-end;
  padding: 10px;
  background-color: #B4CDED;
  width:fit-content;
`

export const Left = styled.div`
  border-radius: 15px 15px 15px 0px;
  margin: 5px;
  padding: 10px;
  background-color: #ddd;
  width:fit-content;
`

export const SpanLeft = styled.a`
  font-size: 14px;
`

export const SpanRight = styled.a`
  font-size: 14px;
`

export const Footer = styled.div`
    background-color: #d4d4d4;
    padding: 10px 20px 10px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`
 
export const Input = styled.input`
    border: 1px solid #ededed;
    padding: 20px;
    width: 90%;
    border-radius: 15px;
`

export const Button = styled.button`
  background-color: #d4d4d4;
  border: none;
  padding-left: 15px;
  font-size: 22.5px;
  color: #344966;
  cursor: pointer;
`

export const PopCon = styled.div`
  width: fit-content;
  position: fixed;
  right: 30px;
  z-index:20;
  margin-bottom:25px;
  transition: 0.3s ease-in-out;
  opacity: ${({chatopen}) => (chatopen ? '100%' : '0')};
  bottom:${({chatopen})=>(chatopen ? '0': '-100%')};
`
export const Pop = styled.div`
    width: 100%;
    height: 25%;
    cursor: pointer;
`

export const P = styled.p`
  text-align: right;
`
  
export const Open = styled.button`
  background:transparent;
  outline:none;
  border:none;
  font-size:50px;
  color:#B4CDED;
  cursor:pointer;
`

export const OptionArea=styled.div`
  background-color: #eee;
  padding: 0px 10px 10px 10px;
  display: flex;
  flex-wrap:wrap;
  justify-content: flex-start;
`

export const Option = styled.button`
    border-radius:50px;
    background: #B4CDED;
    white-space: nowrap;
    padding:10px;
    margin:5px;
    color: #0D1821;
    font-size: 12px;
    outline:none;
    border-style:solid;
    border-width:1px;
    border-color:#344966;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;
    &:hover{
        transition:all 0.2s ease-in-out;
        background: #ededed;
        color: #0D1821;
    }
`