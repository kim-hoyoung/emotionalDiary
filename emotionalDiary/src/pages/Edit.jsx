import { useParams, useNavigate } from "react-router-dom"; //URL parameter로 동적 경로 설정
import Header from "../components/Header";
import Button from "../components/Buttons";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    if (
      window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!") // 확인과 취소 버튼이 달려있는 팝업창 출력
    ) {
      // 일기 삭제 로직
      onDelete(params.id);
      nav("/", { replace: true });
    } // 일기 종료 로직
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor />
    </div>
  );
};

export default Edit;
