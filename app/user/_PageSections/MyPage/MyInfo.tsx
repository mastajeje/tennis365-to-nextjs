import styles from './MyPage.module.scss'

type User = {
    name: string;
    address1: string;
    address2: string;
    email: string;
}
type MyInfoProps = {
    user: User;
}

export default function MyInfo({user}: MyInfoProps){
    
    return (
        <div className={styles["my-info"]}>
        <h2 className={styles["my-info__name"]}>안녕하세요 {user.name}님</h2>
        <div className={styles["my-info__data"]}>
          <div className={styles["my-info__address"]}>
            <h3>주소</h3>
            <span className={styles["mypage__data--address1"]}>{user.address1}</span>
            <span className={styles["mypage__data--address2"]}>{user.address2}</span>
          </div>

          <div className={styles["mypage__data--email"]}>
            <h3>이메일</h3>
            <span>{user.email}</span>
          </div>
        </div>
      </div>
    )
    }