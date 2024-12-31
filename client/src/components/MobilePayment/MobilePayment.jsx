import { useHistory, useLocation, useParams } from "react-router";
import queryString from "query-string";

import { useEffect } from "react";
import { useAxios } from "../../hooks/useAxios";
import axios from "axios";

const MobilePayment = () => {
  let history = useHistory();
  let { id } = useParams();
  let location = useLocation();
  const { search } = location;
  const query = queryString.parse(search);
  const { merchant_uid, imp_uid } = query;

  const { response } = useAxios({
    method: "get",
    url: `/order/payment/${id}/mobile`,
    params: { merchant_uid },
  });

  useEffect(() => {
    if (response) {
      const orderInfo = response.orderInfo[0];
      const orderItems = response.orderItems;

      orderItems.forEach((item) => {
        item.stock = item.stock - item.quantity;
      });

      axios
        .post("https://tennis365-api.herokuapp.com/order/result", {
          user_id: orderInfo.user_id,
          order_id: id,
          merchant_uid,
          imp_uid,
          status: 0,
          amount: orderInfo.grandTotal,
          orderItems,
        })
        .then((res) => {
          if (res.status === 200) {
            history.push({
              pathname: `/order/payment/${merchant_uid}`,
            });
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <div style={{ margin: "0 auto" }}>
      <h1>결제 확인중입니다</h1>
    </div>
  );
};

export default MobilePayment;
