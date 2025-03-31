import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef(); // 1.useRef로 레프변수 만듬

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onsubmit();
    }
  };
  const onsubmit = () => {
    if (content === "") {
      contentRef.current.focus(); // 3. 레프변수.커렌트.포커스걸게함
      return; // 종료
    }
    onCreate(content);
    setContent(""); // 입력창을 빈문자열로 state를 초기화시킴
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef} // 2.이 자리에 레프를 아까만든 레프변수 걸고
        value={content} // content state에 잘 저장됨
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onsubmit}>추가</button>
    </div>
  );
};

export default Editor;
