import React, { useRef,useState,useEffect} from 'react'
import './chatbotelements.js'
import {Option,OptionArea, Icon,CloseIcon,PopCon,Chatcon,Chatbox,Header,MessageArea,Right,SpanLeft,SpanRight,Left,Footer,Input,Button,Pop,P,Open} from './chatbotelements'
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

  const get = props.getMessage

  const deliver = (s1,s2)=>{
    get(s1);
    get(s2);
  }
  const handle = (input) =>{
    fetch("/input", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(input)
    }).then(res => res.json()).then(data => {
      deliver(['user',input],data.message);
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
                : 
                (<Left key={index}><SpanLeft>{ item[1] }</SpanLeft></Left>)
              ))
          }
          <OptionArea>
            <Option onClick={e=>handle("Tell me about yourself")}>About Me</Option>
            <Option onClick={e=>handle("Share your academic qualifications")}>Education</Option>
            <Option onClick={e=>handle("Talk about your skills")}>Skills</Option>
            <Option onClick={e=>handle("What work experience do you have")}>Experience</Option>
            <Option onClick={e=>handle("What are your interests")}>Interests</Option>
          </OptionArea>
          <div ref={divRef} />
        </MessageArea>
        <Footer>
          <Input placeholder="Ask a question about me..." value={text} onChange={e => setText(e.target.value)} onKeyPress={handleKeypress}/>
          <Button to="contact" onClick={handleClick}><FaPaperPlane/></Button>
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