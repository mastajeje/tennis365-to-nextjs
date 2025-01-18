export const getShippingStatus = (orderStatus: number) => {
    if (orderStatus === 0) return "신규주문";
    if (orderStatus === 1) return "발송대기";
    if (orderStatus === 2) return "배송중";
    if (orderStatus === 3) return "배송완료";
    if (orderStatus === 4) return "구매확정";
    if (orderStatus === 5) return "취소요청";
  };

  export const getPaymentMethod = (paymentMethod : string) => {
    if (paymentMethod === "card") return "신용카드";
    if (paymentMethod === "samsung") return "삼성페이";
    if (paymentMethod === "kakaopay") return "카카오페이";
  };

  export const getBrandName = (brandId:string) => {
    if (brandId === "1") return "바볼랏";
    if (brandId === "2") return "윌슨";
    if (brandId === "3") return "헤드";
    if (brandId === "4") return "요넥스";
    if (brandId === "5") return "던롭";
    if (brandId === "6") return "테크니파이버";
  };