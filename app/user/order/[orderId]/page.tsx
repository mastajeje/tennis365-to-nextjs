import { dummyOrderInfo, dummyOrderItems, dummyTransactionInfo, dummyUser } from "../../../dummyData";
import Order from "../../_PageSections/Order/Order";

export default function page(){
    return (
        <section className="order-page" style={{ margin: "0 auto" }}>
        {/* {authorized ? ( */}
          <Order
            // initValues={initValues}
            transactionInfo={dummyTransactionInfo}
            orderInfo={dummyOrderInfo}
            orderItems={dummyOrderItems}
            user={dummyUser}
          />
        {/* ) : (
           <Redirect to="/" />
         )} */}
      </section>
    )
    }