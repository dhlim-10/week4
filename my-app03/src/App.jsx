function Book(props) {
  return(
    <div>
      <h2>이책의 제목은 {props.title}</h2>
      <p>이책의 저자은 {props.author}</p>
      <p>이책의 가격은 {props.price}</p>
    </div>
  );
}

function GreetingCard({name, message}) {
  return (
    <div>
      <h3>{name}님께</h3>
      <p>{message}</p>
    </div>
  );
}

function Button({ text, color }) {
  return(
    <button style={{backgroundColor: color, color: "white"}}>
      {text}
    </button>
  );
}

function VideoCard({ title, channel, views }) {
  return(
    <div>
      <h3>{title}</h3>
      <p>{channel}</p>
      <p>{views}</p>
    </div>
  );
}

function VideoList({ videos }) {
  return(
    <div>
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          title={video.title}
          channel={video.channel}
          views={video.views}
        />
      ))}
    </div>
  );
}

function App() {
  const videos = [
    { title: "리액트 강의", channel: "코딩채널", views: 1000 },
    { title: "자바스크립트 기초", channel: "개발자TV", views: 2000 },
  ];

  return(
    <div>
      <h1>4주차 과제1</h1>
      <hr />
      <Book title="파이썬" author="김길동" price={30000} />
      <hr />
      <GreetingCard name="도훈" message="생일축하" />
      <hr />
      <Button text="로그인" color="blue" />
      <Button text="회원가입" color="green" />
      <Button text="삭제" color="red" />
      <hr />
      <h1>추천 영상</h1>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;