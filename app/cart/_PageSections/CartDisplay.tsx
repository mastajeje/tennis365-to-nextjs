import { getBrandName } from "../../../lib/utils";
import styles from "./CartDisplay.module.scss";
//create dummy cartItems


export default function CartDisplay({ cartItems, handleQuantity, handleDelete }){


    
      const getTotal = (quantity, unitPrice) => {
        return quantity * unitPrice;
      };

    return (
        <>
          {cartItems.map((item) => {
            return (
              <li className={styles["cart_item"]} key={item.id}>
                <div className={styles["img-description"]}>
                  <ProductImg item={item} class={"cart__img"} />
    
                  <div className={styles["cart__description"]}>
                    <strong className={styles["item-name"]}>{item.product_name}</strong>
                    <span>{getBrandName(item.brand)}</span>
                    <div className="rating">
                      <span>평점</span>
                      <span>{item.rating}</span>
                    </div>
                    <div className={styles["item__price"]}>
                      <span className={styles["info-title"]}>판매가</span>
                      <span>{`${item.price.toLocaleString()}원`}</span>
                    </div>
                    <div className={styles["item__quantity"]}>
                      <div className={styles["info-title"]}>수량</div>
                      <input
                        min={1}
                        max={item.stock}
                        value={item.quantity}
                        name={`quantity_id_${item.id}`}
                        // onChange={changeQuantity}
                        onChange={(e) => {
                          const value = e.target.value;
                          handleQuantity(item, value);
                        }}
                        type="number"
                        placeholder="수량"
                      />
                    </div>
                    <div className={styles["item__total"]}>
                      <span className={styles["info-title"]}>합계</span>
                      <span id={item.id}>
                        {getTotal(item.quantity, item.price).toLocaleString(
                          "ko-KR",
                          {
                            style: "currency",
                            currency: "KRW",
                          }
                        )}
                      </span>
                    </div>
                    <div
                      className={styles["delete-btn"]}
                      onClick={() =>
                        handleDelete(
                          "https://tennis365-api.herokuapp.com/cart/update",
                          item
                        )
                      }
                    >
                      삭제하기
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </>
      );
    }