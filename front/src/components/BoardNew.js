import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { boardRemove, boardSave, boardSelectRow } from '../module/boardReducer';

function BoardNew() {
  let [inputData, setInputData] = useState({
    boardId: '',
    boardTitle: '',
    boardContent: '',
  });
  const saveBtnClick = (e) => {
    e.preventDefault();
    onSave(inputData);
    resetForm();
  };

  const dispatch = useDispatch();
  const onSave = (saveData) => dispatch(boardSave(saveData));

  // reducer state 의 selectRowData field 를 가져온 뒤 subscribe(구독)
  const { selectRowData } = useSelector((state) => state.boardReducer);

  // inputData 에 selectRowData 의 값을 반영
  if (JSON.stringify(selectRowData) !== '{}') {
    setInputData({
      boardId: selectRowData.boardId,
      boardTitle: selectRowData.boardTitle,
      boardContent: selectRowData.boardContent,
    });
  }

  const changeInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setInputData({
      boardId: '',
      boardTitle: '',
      boardContent: '',
    });
  };

  return (
    <div>
      <form onSubmit={saveBtnClick}>
        <div>
          제목 :{' '}
          <input
            type="text"
            name="boardTitle"
            onChange={changeInput}
            value={inputData.boardTitle}
          />
        </div>
        <div>
          내용 :{' '}
          <input
            type="text"
            name="boardContent"
            onChange={changeInput}
            value={inputData.boardContent}
          />
        </div>
        <div>
          비밀번호 :{' '}
          <input
            type="text"
            name="boardPassword"
            onChange={changeInput}
            value={inputData.boardPassword}
          />
        </div>
        <input
          type="hidden"
          name="boardId"
          onChange={changeInput}
          value={inputData.boardId}
        />
        <button type="submit">게시글 등록</button>
      </form>
    </div>
  );
}

export default BoardNew;
