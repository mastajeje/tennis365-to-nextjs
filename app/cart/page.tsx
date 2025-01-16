'use client'
import styles from './cart.module.scss'
import { useState } from "react";
import Button from "../../components/Button/Button";


const dummyCartItems = [
    {
        id: 1,
        product_name: "테니스라켓",
        brand: "1",
        price: 50000,
        quantity: 1,
        stock: 10,
        imgUrl: "https://tennis365-api.herokuapp.com/admin/uploads/tennisracket1.jpg",
    },
    {
        id: 2,
        product_name: "테니스라켓",
        brand: "2",
        price: 100000,
        quantity: 1,
        stock: 10,
        imgUrl: "https://tennis365-api.herokuapp.com/admin/uploads/tennisracket2.jpg",
    },
    {
        id: 3,
        product_name: "테니스라켓",
        brand: "3",
        price: 150000,
        quantity: 1,
        stock: 10,
        imgUrl: "https://tennis365-api.herokuapp.com/admin/uploads/tennisracket3.jpg",
    },
    {
        id: 4,
        product_name: "테니스라켓",
        brand: "4",
        price: 200000,
        quantity: 1,
        stock: 10,
        imgUrl: "https://tennis365-api.herokuapp.com/admin/uploads/tennisracket4.jpg",
    },
    {
        id: 5,
        product_name: "테니스라켓",
        brand: "5",
        price: 250000,
        quantity: 1,
        stock: 10,
        imgUrl: "https://tennis365-api.herokuapp.com/admin/uploads/tennisracket5.jpg",
    },
    {
        id: 6,
        product_name: "테니스라켓",
        brand: "6",
        price: 300000,
        quantity: 1,
        stock: 10,
        imgUrl: "https://tennis365-api.herokuapp.com/admin/uploads/tennisracket6.jpg",

    }
]

export default function page(){
    const [errorMessage, setErrorMessage] = useState("");
    const [cartItems, setCartItems] = useState([]);
    const [grandTotal, setGrandTotal] = useState("");


    return (
        <section className={styles["cart"]}>
        {errorMessage || dummyCartItems.length === 0 ? (
          <div className={styles["cart-is-empty"]}>
            <span>장바구니에 담긴 상품이 없습니다</span>
          </div>
        ) : null}
        <ul className={styles["cart-items"]}>
          {!errorMessage && (
            // <DisplayCart
            //   errorMessage={errorMessage}
            //   cartItems={cartItems}
            //   handleQuantity={handleQuantity}
            //   handleDelete={handleDelete}
            // />
            <div>Cart</div>
          )}
        </ul>
        <div className={styles["cart_bottom"]}>
          <div className={styles["empty-div"]}></div>
          {errorMessage || dummyCartItems.length === 0 ? null : (
            <div className={styles["order-summary"]}>
              <div className={styles["total"]}>
                <span>합계</span>
                <span>
                  {errorMessage || dummyCartItems.length === 0
                    ? null
                    : `${grandTotal.toLocaleString()}원`}
                </span>
              </div>
              <div className={styles["cart__orderBtn"]}>
                <Button handleBtnClick={()=>{}} text={"주문하기"} />
              </div>
            </div>
          )}
        </div>
      </section>
    )
    }