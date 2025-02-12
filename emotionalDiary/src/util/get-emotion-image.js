import emotion1 from "./../assets/emotion1.png"; // 이렇게 불러오면 메모리에 이미지가 캐싱되기 때문에 최적화 부분에선 좋다.
import emotion2 from "./../assets/emotion2.png"; // but 이미지가 많아지면 public 에 넣는걸 추천함.
import emotion3 from "./../assets/emotion3.png";
import emotion4 from "./../assets/emotion4.png";
import emotion5 from "./../assets/emotion5.png";

export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    default:
      return null;
  }
}
