import { useSearchParams } from "react-router-dom"; // Query String 동적 경로 생성해보기.

const Home = () => {
  const [params, , setParams] = useSearchParams();

  return <div>Home</div>;
};

export default Home;
