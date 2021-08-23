import React, { useRef,useState,useEffect} from 'react'
import './chatbotelements.js'
import {Option,OptionArea, Icon,CloseIcon,PopCon,Chatcon,Chatbox,Header,MessageArea,Right,SpanLeft,SpanRight,Left,Footer,Input,Button,Pop,P,Open} from './chatbotelements'
import { Link as LinkS} from 'react-scroll'
import {FaPaperPlane} from 'react-icons/fa'
import {IoIosChatboxes} from 'react-icons/io'
export const PopChat = ( props ) => {

  const [chatopen, setChatopen] = useState(false)

  const toggle = e => {
    setChatopen(!chatopen)
  }
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const messages = props.message

  const [text, setText] = useState("");
  const [question,setQuestion]=useState(false)
  const [option,setOption]=useState('')

  const get = props.getMessage

  const check = (s2)=>{
    if (s2[0]==='bot'){
      get(s2);
      setQuestion(false)
    } else{
      get(s2[0])
      get(s2[1])
      if (s2[1][1][s2[1][1].length-1]==='?'){
        setQuestion(true)
      } else{
        setQuestion(false)
      }
    }
    
  }

  const handleQuestion = (response) =>{
    if (response){
      get(['user','Yes'])
      if (option === 'education' || option ==='experience'){
        get(['link','<a href="https://drive.google.com/uc?export=view&id=1QSVC4S5uB8WVSmjafAhAkpNMqnJFYZKQ" target="_blank">Resume</a>'])
      }
      if (option === 'skills'){
        get(['scroll','skills'])
      }
      if (option === 'projects'){
        get(['scroll','projects'])
      }
    } else{
      get(['user','No'])
    }
    get(['bot','Okay! Can I help you with anything else?'])
    setQuestion(false)
    setText("");
  }
  const handle = (input) =>{
    get(['user',input])
    setQuestion('temp')
    fetch("/input", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input)
    }).then(res => res.json()).then(data => {
        console.log(data)
        check(data.message)
        setOption(data.tag)
      });
  }
  const handleKeypress = e => {
    if (e.charCode === 13) {
      handle(text);
      setText("");
    }
  }

  const handleClick =e =>{
    handle(text);
    setText("");
  }
  return ( 
    <>
    <Chatcon chatopen={chatopen}>
      <Chatbox>
        <Header>Ask Colin </Header>
        <Icon onClick = {toggle}>
          <CloseIcon />
        </Icon>
        <MessageArea>
          {
            messages.map((item,index) => (
                (item[0]==='user') ? 
                (<Right key={index}><SpanRight >{ item[1]}</SpanRight></Right>)
                : item[0]==='bot' ? 
                (<Left key={index}><SpanLeft>{ item[1] }</SpanLeft></Left>)
                : item[0]==='link' ?
                (<Left key={index}><SpanLeft dangerouslySetInnerHTML={{ __html: item[1] }}></SpanLeft></Left>)
                :
                (<Left key={index}><SpanLeft><LinkS style={{cursor:'pointer',color:"#344966",textDecoration: 'underline'}}to={item[1]} smooth={true} spy={true} exact='true' offset={-80}>{item[1].charAt(0).toUpperCase() + item[1].slice(1)}</LinkS></SpanLeft></Left>))
              )
          }
          <OptionArea>
            {question ? question ==='temp'? null :
            <>
              <Option onClick={()=>handleQuestion(true)}>Yes</Option>
              <Option onClick={()=>handleQuestion(false)}>No</Option>
            </>:
            <>
              <Option onClick={e=>{handle("Tell me about yourself");setText("")}}>About Me</Option>
              <Option onClick={e=>{handle("Share your academic qualifications");setText("")}}>Education</Option>
              <Option onClick={e=>{handle("Talk about your skills");setText("")}}>Skills</Option>
              <Option onClick={e=>{handle("What work experience do you have");setText("")}}>Experience</Option>
              <Option onClick={e=>{handle("What are your interests");setText("")}}>Interests</Option>
            </>
            }
          </OptionArea>
          <div ref={divRef} />
        </MessageArea>
        <Footer>
          <Input placeholder="Ask a question about me..." value={text} onChange={e => setText(e.target.value)} onKeyPress={handleKeypress}/>
          <Button to="contact" onClick={()=>handleClick()}><FaPaperPlane/></Button>
        </Footer>
      </Chatbox>
    </Chatcon>    
    <PopCon chatopen={!chatopen}>
      <Pop>
        <P>
          <Open onClick={toggle}><IoIosChatboxes/></Open>
        </P>
      </Pop> 
    </PopCon>
  </>  
  )
}
export default PopChat
/*<Left><SpanLeft >{ item[1] }</SpanLeft></Left>*/