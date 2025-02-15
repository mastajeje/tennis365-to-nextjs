'use client'
import { useState } from "react";
import Button from "../../../components/Button/Button";
import MessageBoard from "../_PageSections/MessageBoard/MessageBoard";
import { dummyPost } from "../../dummyData";



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
          targetUrl={`/board/announcement/`}
        />
        <div className="write-a-post-button">
          <Button text={"글쓰기"} handleBtnClick={()=>{}} />
        </div>
      </main>
    );
  };
  
  export default Announcement;
  