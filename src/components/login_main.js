import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledSubmit = styled.input`
margin-left: 60px;
display: ${(props) => props.displayTf ? "none" : "block" };
`;

const StyledMainDiv = styled.div`
display: flex;
justify-content: center;
align-items:center;
margin-top: 150px;
`;

const StyledContents = styled.div`
justify-content: center;
border: solid black 1px;
`;

const StyledLoginForm = styled.form`
margin: 200px 100px;
`;

const StyledLoginId = styled.input`
display:flex;
margin-top: 10px;
margin-bottom: 10px;
`;

const StyledLoginPw = styled.input`
display: flex;
margin-top: 10px;
margin-bottom: 10px;
`;
const StyledLabel = styled.label`
display: flex;
justify-content: center;
align-items:center;
`;

function LoginMain() {
  //test id = test@test.com
  //test password = 123456

  const [id, setId] = useState("test@test.com");
  const [password, setPassoword] = useState("123456");

  const [checkId, setCheckId] = useState("");
  const [checkpw, setCheckPw] = useState("");
  const [msg, setMsg] = useState("");

  const [loginDisabled, setloginDisabled] = useState(true);
  let navigate = useNavigate();

  const idFromCheck = (e) => {
    const arr = e.target.value;
    console.log(arr.includes('.com') && arr.includes('@'));

    if(arr.includes('.com') && arr.includes('@')){
      setloginDisabled(false);
    }
    if( e.target.value.length === 0){
      setloginDisabled(true);
      
    }
    setCheckId(arr);
  }

  const pwFromCheck = (e) => {
    const arr = e.target.value;
    setCheckPw(arr);
  }

  const loginConn = (e) => {
    e.preventDefault();

    console.log('checkId',checkId);
    console.log('id',id);

    if(checkId !== id ){
      setMsg("아이디가 틀렸습니다.");
      return;
    }
    else if (checkpw !== password){
      setMsg("비밀번호가 틀렸습니다.");
      return;
    }
    else{
      navigate(`/MyPage/${id}`);
    }
  }

  return (
    <StyledMainDiv>
      <StyledContents>
            <StyledLoginForm onSubmit={loginConn}>
                <StyledLabel>아이디</StyledLabel>
                <StyledLoginId type='text' onChange={idFromCheck} placeholder='아이디 입력'></StyledLoginId>
                <br/>
                <StyledLabel>비밀번호</StyledLabel>
                <StyledLoginPw type='password' onChange={pwFromCheck} placeholder='비밀번호 입력'></StyledLoginPw>
                <br/>
                <StyledSubmit displayTf={loginDisabled} type="submit" value="로그인"/>
                <br/>
                <div>{msg}</div> 
            </StyledLoginForm>
      </StyledContents>
    </StyledMainDiv>
  )
}

export default LoginMain
