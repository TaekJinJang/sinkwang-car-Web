import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button, Row, Col } from 'antd';
import Container from '../container/Container';
import BoardNew from './BoardNew';

const Voc = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  input {
    border: 2px solid var(--dark);
    border-radius: 5px;
    font-size: 15px;
    width: 50%;
    margin: 10px 0;
    padding: 0;
  }
  .infoFeild {
    display: flex;
    width: 50%;
  }
  .cusInfo {
    height: 30px;
    margin-right: 2px;
  }
  .voc-title {
    height: 30px;
  }
  .voc-contents {
    /* width: 600px; */
    width: 100%;
    height: 300px;
  }
  button {
    margin-right: 10px;
    font-size: 15px;
    font-weight: 700;
  }
  .btn-group {
    display: flex;
  }
`;

const MattersForInquiry = () => {
  // title, content state 생성
  const [VocContent, setVocContent] = useState({});
  const [writeBoard, setWriteBoard] = useState(false);

  // 입력받은 title, content를 value값으로 state변경
  // const getValue = (e) => {
  //   const { name, value } = e.target;
  //   setVocContent({
  //     ...VocContent,
  //     [name]: value,
  //   });

  const onChangeWriteBoard = useCallback(() => {
    setWriteBoard((prev) => !prev); // state를 True/False로 바꾸기
    console.log(writeBoard);
  });

  const submit = () => {
    console.log(VocContent);
  };

  return (
    <>
      <Row justify="end" align="top">
        <Col offset={24}>
          <Button onClick={onChangeWriteBoard}>글 쓰기</Button>
        </Col>
      </Row>
      {writeBoard && <BoardNew />}

      <Voc>
        <Container />
        {/* <div className="infoFeild">
          <input
            type="text"
            className="cusInfo"
            placeholder="이름을 입력해주세요"
            name="name"
            onChange={getValue}
          />
          <input
            type="tel"
            className="cusInfo"
            placeholder="연락처를 입력해주세요"
            name="num"
            onChange={getValue}
          />
        </div>
        <input
          className="voc-title"
          type="text"
          placeholder="제목"
          name="title"
          onChange={getValue}
        /> */}
        {/* <input
        type="text"
        className="voc-contents"
        placeholder="문의내용"
        name="contents"
        onChange={getValue}
      /> */}
      </Voc>
    </>
  );
};

export default MattersForInquiry;
