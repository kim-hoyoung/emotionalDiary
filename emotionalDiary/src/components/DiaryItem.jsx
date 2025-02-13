import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Buttons";
import "./DiaryItem.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const { onDelete } = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  const DeleteButton = () => {
    onDelete(id);
  };
  return (
    <div className="DiaryItem">
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div onClick={() => nav(`/diary/${id}`)} className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button onClick={() => nav(`/Edit/${id}`)} text={"수정하기"} />
        <Button onClick={DeleteButton} type={"NEGATIVE"} text={"삭제하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
