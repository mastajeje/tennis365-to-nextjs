import styles from "./ViewPost.module.scss"

const dummyPost ={
    title: 'dummy title',
    username: 'dummy user',
    createdAt: 'dummy date',
    board_category: 0
}

const dummyAuthState ={
    username: 'dummy user',
    isAdmin: 0
}

export default function ViewPost(){

    return (
        <div className={styles["view-post"]}>
        <div className={styles["post"]}>
          <header className={styles["view-post__header"]}>
            <div className={styles["view-post__header--col1"]}>
              <h2 className={styles["view-post__header--title"]}>{dummyPost.title}</h2>
              <div className={styles["view-post__header--info"]}>
                <div className={styles["info-head"]}>
                  작성자
                  <span className={styles["post-owner"]}> {dummyPost.username}</span>
                </div>
                <span className={styles["info-head"]}>{` 작성일 ${dummyPost.createdAt}`}</span>
              </div>
            </div>
            <div className={styles["view-post__header--col2"]}>
              {(dummyPost.username === dummyAuthState.username ||
                dummyAuthState.isAdmin === 1) && (
                <div className={styles["view-post__header--btns"]}>
                  <button className={styles["post-delete-btn"]} onClick={()=>{}}>
                    삭제하기
                  </button>
                  <button className={styles["post-edit-btn"]} onClick={()=>{}}>
                    수정하기
                  </button>
                </div>
              )}
            </div>
          </header>
          {/* <div className="view-post__body font-face-BBTreeL">
            <Editor
              editorState={body}
              readOnly={true}
              toolbarClassName={"readonly-toolbar"}
            />
          </div> */}
        </div>
        {/* {post.board_category !== 0 && <QnAComment />} */}
      </div>
    )
    }