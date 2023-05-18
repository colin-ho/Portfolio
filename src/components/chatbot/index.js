import React, { useRef, useState, useEffect } from "react";
import "./chatbotelements.js";
import {
  Option,
  OptionArea,
  Icon,
  CloseIcon,
  PopCon,
  Chatcon,
  Chatbox,
  Header,
  MessageArea,
  Right,
  SpanLeft,
  SpanRight,
  Left,
  Footer,
  Input,
  Button,
  Pop,
  P,
  Open,
  Loading,
} from "./chatbotelements";
import { FaPaperPlane } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";

export const PopChat = () => {
  const [chatopen, setChatopen] = useState(false);
  const [messages, setMessage] = useState([]);
  const [text, setText] = useState("");
  const [disable, setDisable] = useState(false);

  const addMessage = (newMessage) => {
    setMessage((currentMessages) => [...currentMessages, newMessage]);
  };

  const toggle = () => {
    setChatopen(!chatopen);
  };
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const handle = async (input) => {
    if (!input.trim()) return;

    setDisable(true);
    const history = messages;
    addMessage(["user", input]);

    try {
      const res = await fetch("/input", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chat_history: history, question: input }),
      });
      console.log(res);
      if (res.status === 429) {
        addMessage([
          "bot",
          "Sorry, I'm a bit busy right now. Please try again later",
        ]);
      } else if (res.status === 413) {
        addMessage([
          "bot",
          "Sorry, your question is too long. Please try again.",
        ]);
      } else {
        const data = await res.json();
        addMessage(["bot", data.message]);
      }
    } catch (err) {
      addMessage(["bot", "Sorry, something went wrong. Please try again."]);
    }

    setDisable(false);
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13 && !disable) {
      e.preventDefault();
      handle(text);
      setText("");
    }
  };

  const handleClick = (e) => {
    if (!disable) {
      handle(text);
      setText("");
    }
  };

  const handleType = (e) => {
    if (e.target.value.length < 500) {
      setText(e.target.value);
    } else {
      setText(e.target.value.substring(0, 500));
    }
  };

  return (
    <>
      <Chatcon chatopen={chatopen}>
        <Chatbox>
          <Header>Ask Colin </Header>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
          <MessageArea>
            <Left>
              <SpanLeft>
                Hello! This chatbot is programmed to answer professional
                questions about me.
              </SpanLeft>
            </Left>
            <Left>
              <SpanLeft>
                Select an option below, or type in your question.
              </SpanLeft>
            </Left>
            {messages.map((item, index) =>
              item[0] === "user" ? (
                <Right key={index}>
                  <SpanRight>{item[1]}</SpanRight>
                </Right>
              ) : item[0] === "bot" ? (
                <Left key={index}>
                  <SpanLeft>{item[1]}</SpanLeft>
                </Left>
              ) : null
            )}
            {disable ? (
              <Left>
                <Loading />
              </Left>
            ) : (
              <OptionArea>
                <Option
                  onClick={(e) => {
                    handle("Who is Colin?");
                    setText("");
                  }}
                >
                  About Me
                </Option>
                <Option
                  onClick={(e) => {
                    handle("What are Colin's academic qualifications?");
                    setText("");
                  }}
                >
                  Education
                </Option>
                <Option
                  onClick={(e) => {
                    handle("What work experience does Colin have?");
                    setText("");
                  }}
                >
                  Work Experience
                </Option>
                <Option
                  onClick={(e) => {
                    handle("What are Colin's interests?");
                    setText("");
                  }}
                >
                  Interests
                </Option>
              </OptionArea>
            )}
            <div ref={divRef} />
          </MessageArea>
          <Footer>
            <Input
              placeholder="Ask a question about me..."
              value={text}
              onChange={(e) => handleType(e)}
              onKeyPress={handleKeypress}
            />
            <Button to="contact" onClick={() => handleClick()}>
              <FaPaperPlane />
            </Button>
          </Footer>
        </Chatbox>
      </Chatcon>
      <PopCon chatopen={!chatopen}>
        <Pop>
          <P>
            <Open onClick={toggle}>
              <IoIosChatboxes />
            </Open>
          </P>
        </Pop>
      </PopCon>
    </>
  );
};
export default PopChat;
