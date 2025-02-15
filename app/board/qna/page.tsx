'use client'
import styles from "./qna.module.scss"

import Button from "../../../components/Button/Button";
import MessageBoard from "../_PageSections/MessageBoard/MessageBoard";
import { dummyPost } from "../../dummyData";

export default function QnA(){
    return (
        <main className={styles["qna"]}>
        <header>
          <h1>QnA</h1>
        </header>
        <MessageBoard messageList={dummyPost} targetUrl={`/board/qna/`} />
        <div className={styles["write-a-post-button"]}>
          <Button text={"글쓰기"} handleBtnClick={()=>{}} />
        </div>
      </main>
    )
    }