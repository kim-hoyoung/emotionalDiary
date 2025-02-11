import { useParams } from "react-router-dom"; //URL parameter로 동적 경로 설정

const Diary = () => {
  const params = useParams();
  console.log(params);
  return <div>{params.id}번 일기입니다.</div>;
};

export default Diary;
