'use client'
import { getPaymentMethod, getShippingStatus } from "../../../../lib/utils";
import styles from "./MyPage.module.scss"

type User = {
    name: string;
    address1: string;
    address2: string;
    email: string;
}

type Order = {
    merchant_uid: string;
    status: number;
    orderedAt: string;
    pay_method: string;
    grandTotal: number;
}

type OrderItem = {
    id: number;
    product_name: string;
    price: number;
    quantity: number;
}

type MyOrderProps = {
    orders: Order[];
    orderItems: OrderItem[];
    user: User;
}

export default function MyOrder({orders, orderItems , user}:MyOrderProps) {

    
    return (
        <>
                  {orders.map((itemsArray, index) => {
        return (
          <div className={styles["my-order"]} key={itemsArray.merchant_uid}>
            <div className={styles["my-order__order-description"]}>
              <div className={styles["my-order__header"]}>
                <div className={styles["my-order__header--top"]}>
                  <h3>{getShippingStatus(itemsArray.status)}</h3>
                  <h3>주문일자{itemsArray.orderedAt}</h3>
                </div>
                <div className={styles["my-order__header--bottom"]}>
                  <small className={styles["merchant-uid"]}>{`주문번호 ${itemsArray.merchant_uid}`}</small>
                </div>
              </div>
              <ul className={styles["my-order__order-list"]}>
                {orderItems.map((item) => {
                  return (
                    <li className={styles["order-list"]} key={item.id}>
                      {/* <ProductImg item={item} class={"order-list__img"} /> */}

                      <span
                        className={styles["order-list__item-name"]}
                        onClick={() =>{}
                        //   history.push(`/productdetails/${item.product_id}`)
                        }
                      >
                        {item.product_name}
                      </span>
                      <div className={styles["order-list__price-info"]}>
                        <span>{`${item.price}원`} </span>
                        <small>{`(${item.quantity}개)`}</small>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles["order-info"]}>
              <h3 className={styles["order-info--h3"]}>주문정보</h3>
              <div className={styles["recipient"]}>
                <div className={`${styles['recipient__name']} ${styles['order-info--row']}`}>
                  <h4>받는사람</h4>
                  <span>{user.name}</span>
                </div>
                <div className={`${styles['recipient__addr']} ${styles['order-info--row']}`}>
                  <h4>받는주소</h4>
                  <span>{`${user.address1} ${user.address2}`}</span>
                </div>
              </div>
              <div className={styles["receipt"]}>
                <div className={`${styles['receipt__pay-method']} ${styles['order-info--row']}`}>
                  <h4>결제수단</h4>
                  <span>{getPaymentMethod(itemsArray.pay_method)}</span>
                </div>
                <div className={`${styles['receipt__billing-amount']} ${styles['order-info--row']}`}>
                  <h4>결제금액</h4>
                  <span>{itemsArray.grandTotal}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
        </>
    )
    }