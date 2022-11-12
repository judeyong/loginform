import React, { useState } from 'react'
import styled from 'styled-components';

const StyledH1 = styled.h1`
  color: black;
  font-weight: 600;
  font-size: 30px;
  border-radius: 5px;
  background-color: darkorange;
  width: 50%;
  text-align:center;
`;

const StyledInnerDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const StyledButton = styled.button`
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;

color: ${props => props.theme.main};
border: 2px solid ${props => props.theme.main};
`;

const StyledSubmit = styled.input`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 3px;

color: ${props => props.theme.main};
border: 2px solid ${props => props.theme.main};
`;

const StyledList = styled.li`
text-decoration: ${props => props.line ? "none" : "line-through"};
`;

function Todos() {

  const [todos, setTodos] = useState('');
  const [tododatas, setTododatas] = useState([]);
  const [dataTf, setDatatf] = useState(true);
  const [middleLines, setMiddleLines] = useState([]);

  const inputTodos = (e) => {
    if(e.target.value.length > 0) {
      setDatatf(false);
    }
    else if (e.target.value.length  === 0){
      setDatatf(true);
    }
    else if (todos === ''){
      setDatatf(true);
    }
    setTodos(e.target.value);
  }

  const addTodos = (e) => {
    e.preventDefault();
    let temp = [...todos];
    temp = temp.join('');

    setTododatas((element) => [...element, temp]);
    setTodos('');
    setDatatf(true);
    setMiddleLines((element) => [...element, true]);
  }

  const deleteTodo = (idx) => {
    const temp = tododatas.splice(idx,1);
    const newTodos = [];

    tododatas.map((element) => {
      console.log("element",element);
      if( element !== temp ){
          newTodos.push(element);
        }
    });
    setTododatas(newTodos);
    console.log('tododatas ',tododatas);
  }

  const addMiddleLine = (idx) => {
    const stateValue = [];
    stateValue[idx] = false;
    const temp = [...middleLines];
    
    if (temp[idx] === false){
      temp[idx] = true;
    }
    else if(stateValue[idx] !== true){
      temp[idx] = stateValue[idx];
    }
    setMiddleLines(temp);

  };
  
  return (
    <div>
        <StyledInnerDiv>
          <StyledH1>To do list</StyledH1>
        </StyledInnerDiv>
        <StyledInnerDiv>
          <form onSubmit={addTodos}>
            <input type="text" value={todos} onChange={inputTodos} placeholder='할 일을 입력하세요.'></input>
            <StyledSubmit theme={{main : "royalblue"}} type="submit" disabled={dataTf} value="확인"></StyledSubmit>
          </form>
        </StyledInnerDiv>
        <StyledInnerDiv>
            <ul>
              {tododatas.map((element, idx) => { 
                  return (
                    <StyledList line={middleLines[idx]} key={idx}>{element} <StyledButton onClick={() => deleteTodo(idx)}>삭제</StyledButton><StyledButton onClick={() => addMiddleLine(idx)} theme={{ main: "olive" }}>완료</StyledButton></StyledList>
                    )
                }
              )}
            </ul>
        </StyledInnerDiv>
    </div>
  )
}

export default Todos
