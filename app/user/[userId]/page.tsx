import styles from "../user.module.scss"
import { dummyOrderItems, dummyOrders, dummyUser } from "../../dummyData";
import MyPage from "../_PageSections/MyPage/MyPage";

const authorized = true;

export default function page(){
    return (
        <section id={styles["mypage"]}>
        {authorized ? (
          <MyPage orders={dummyOrders} orderItems={dummyOrderItems} user={dummyUser} />
        ) : (
        //   <Redirect to="/" />
        <></>
        )}
      </section>
    )
    }