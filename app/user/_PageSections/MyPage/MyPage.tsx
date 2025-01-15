import styles from './MyPage.module.scss'
import MyInfo from "./MyInfo";
import MyOrder from "./MyOrder";

export default function MyPage({user, orderItems, orders}){
    return (
        <div className={styles["mypage__container"]}>
        <MyInfo user={user} />
  
        <MyOrder user={user} orderItems={orderItems} orders={orders}/>
      </div>
    )
    }