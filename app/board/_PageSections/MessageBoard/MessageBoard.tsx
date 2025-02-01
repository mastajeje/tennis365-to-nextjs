
import styles from './MessageBoard.module.scss'

export default function MessageBoard({ messageList, historyUrl }){
    return (
        <ul className={styles["noticeboard__post-container"]}>
        {messageList.map((data) => (
          <li className={styles["noticeboard__post"]} key={data.id}>
            <h2
            //   onClick={() => history.push(`${historyUrl}${data.id}`)}
              className={styles["noticeboard__post--title"]}
            >
              {data.title}
            </h2>
            <div className={styles["noticeboard__post--info"]}>
              <div className={styles["info-head"]}>
                작성자
                <span className={styles["post-owner"]}> {data.username}</span>
              </div>
              <span className={styles["info-head"]}>{` 작성일 ${data.createdAt}`}</span>
            </div>
          </li>
        ))}
        {/* <Paginator
          totalRecords={data.length}
          pageLimit={pageLimit}
          pageNeighbours={3}
          setOffset={setOffset}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        /> */}
        {/* <div className="write-a-post-button">
          <Button text={"글쓰기"} handleBtnClick={createPostBtn} />
        </div> */}
      </ul>
    )
    }