import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Row, Button } from 'antd';
import styled from 'styled-components';

const InputSize = styled.div`
  input {
    height: 50px;
    /* font-size: 14px; */
    margin-bottom: 1.5rem;
    margin-right: 1rem;
  }
`;
const Message = styled.textarea`
  width: 42rem;
  height: 15rem;
  font-size: 1rem;
`;
const EmailSend = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_v2sdirn',
        'template_0nmd4ws',
        form.current,
        'IBQTZOrDCufg1Uwwe'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <InputSize>
      <form ref={form} onSubmit={sendEmail}>
        <Row>
          <Col span={6} offset={4}>
            <input
              type="text"
              name="from_name"
              placeholder="이름을 입력해주세요."
              style={{ width: '12rem' }}
            />
          </Col>
          <Col span={6}>
            <input
              type="tel"
              name="phone"
              placeholder="연락처를 입력해주세요."
              style={{ width: '27rem' }}
            />
          </Col>
          <Col span={8} offset={4}>
            <input
              type="email"
              name="email"
              placeholder="메일 주소를 입력해주세요"
              style={{ width: '25rem' }}
            />
          </Col>
          <Col span={4} offset={3}>
            <input
              type="text"
              name="vihicle"
              placeholder="차종을 입력해주세요."
              style={{ width: '14.5rem' }}
            ></input>
          </Col>
          <Col span={24} offset={4}>
            <Message name="message" placeholder="문의사항을 입력해주세요." />
          </Col>

          <Col span={12} offset={10}>
            <Button type="submit">
              <Button type="primary" style={{ width: '10rem', height: '3rem' }}>
                문의하기
              </Button>
            </Button>
          </Col>
        </Row>
      </form>
    </InputSize>
  );
};

export default EmailSend;
