import { useSearchParams } from "react-router-dom"; // Query String 동적 경로 생성해보기.

const Home = () => {
  const [params, , setParams] = useSearchParams();
  console.log(params.get("value"));

  return <div>Home</div>;
};

export default Home;
