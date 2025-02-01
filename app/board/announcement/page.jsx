'use client'
import { useState } from "react";
import Button from "../../../components/Button/Button";
import MessageBoard from "../_PageSections/MessageBoard/MessageBoard";

const dummyPost = [
    {
      id: 1,
      title: "첫번째 게시글",
      username: "김철수",
      createdAt: "2021-10-10",
    },
    {
      id: 2,
      title: "두번째 게시글",
      username: "김영희",
      createdAt: "2021-10-11",
    },
    {
      id: 3,
      title: "세번째 게시글",
      username: "김철수",
      createdAt: "2021-10-12",
    },
    {
      id: 4,
      title: "네번째 게시글",
      username: "김영희",
      createdAt: "2021-10-13",
    },
    {
      id: 5,
      title: "다섯번째 게시글",
      username: "김철수",
      createdAt: "2021-10-14",
    },
    {
      id: 6,
      title: "여섯번째 게시글",
      username: "김영희",
      createdAt: "2021-10-15",
    },
    {
      id: 7,
      title: "일곱번째 게시글",
      username: "김철수",
      createdAt: "2021-10-16",
    },
    {
      id: 8,
      title: "여덟번째 게시글",
      username: "김영희",
      createdAt: "2021-10-17",
    },
    {
      id: 9,
      title: "아홉번째 게시글",
      username: "김철수",
      createdAt: "2021-10-18",
    },
    {
      id: 10,
      title: "열번째 게시글",
      username: "김영희",
      createdAt: "2021-10-19",
    },
]

const Announcement = () => {
    const [announcementPost, setAnnouncementPost] = useState([]);
  
    // let history = useHistory();
    // const { response } = useAxios({
    //   method: "get",
    //   url: `/board/announcement`,
    // });
  
    // const createAnnouncementBtn = () => {
    //   history.push("/board/create-post");
    // };
  
    // useEffect(() => {
    //   setAnnouncementPost(response);
    // }, [response]);
  
    return (
      <main className="announcement">
        <header>
          <h1>공지사항</h1>
        </header>
        <MessageBoard
          messageList={dummyPost}
          historyUrl={`/board/view-post/`}
        />
        <div className="write-a-post-button">
          <Button text={"글쓰기"} handleBtnClick={()=>{}} />
        </div>
      </main>
    );
  };
  
  export default Announcement;
  