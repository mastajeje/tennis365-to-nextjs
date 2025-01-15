export const getShippingStatus = (orderStatus: number) => {
    if (orderStatus === 0) return "신규주문";
    if (orderStatus === 1) return "발송대기";
    if (orderStatus === 2) return "배송중";
    if (orderStatus === 3) return "배송완료";
    if (orderStatus === 4) return "구매확정";
    if (orderStatus === 5) return "취소요청";
  };

  export const getPaymentMethod = (paymentMethod) => {
    if (paymentMethod === "card") return "신용카드";
    if (paymentMethod === "samsung") return "삼성페이";
    if (paymentMethod === "kakaopay") return "카카오페이";
  };