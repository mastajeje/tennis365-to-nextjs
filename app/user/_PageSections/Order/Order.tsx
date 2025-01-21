'use client'
import { faBarcode, faCashRegister, faEnvelope, faMobileAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import Input from "../../../../components/Input/Input";
import useInputChanges from "../../../../lib/useInputChange";


export default function Order({ orderInfo, orderItems, user, transactionInfo }){
    const { values, handleInputChange, setValues } = useInputChanges({});

    return (
        <form className="order-form" onSubmit={()=>{}}>
        <div className="customer">
          <h2 className="customer__h2">받는사람정보</h2>
          <Input
            inputIcon={faUser}
            inputName={"name"}
            inputPlaceholder={"이름"}
            inputType={"text"}
            values={values.name}
            inputOnChange={handleInputChange}
          />
          <Input
            inputIcon={faEnvelope}
            inputName={"email"}
            inputPlaceholder={"이메일"}
            inputType={"email"}
            values={values.email}
            inputOnChange={handleInputChange}
          />
          <Input
            inputIcon={faMobileAlt}
            inputName={"buyer_tel"}
            inputPlaceholder={"연락처('-'을 제외하고 입력해주세요)"}
            inputType={"tel"}
            inputPattern={"^[0-9]+$"}
            values={values.buyer_tel}
            inputOnChange={handleInputChange}
          />
          {/* <AddressInput
            address2={values.address2}
            handleInputChange={handleInputChange}
            handleComplete={handleComplete}
            fullAddress={fullAddress}
          /> */}
        </div>
        <div className="order-checkout">
          <div className="order">
            <h2>상품정보</h2>
            {/* {orderItems.map((item) => {
              return (
                <InfoBox
                  key={item.id}
                  // propsKey={item.id}
                  faIcon={faBarcode}
                  infoText={`${item.product_name}`}
                  additionalInfo={`${item.quantity} 개`}
                />
              );
            })} */}
          </div>
          {/* <div className="checkout">
            <h2>결제정보</h2>
            <InfoBox
              faIcon={faCashRegister}
              infoText={`결제금액 ${orderInfo.grandTotal}원`}
            />
            <PaymentApi handleInputChange={handleInputChange} />
          </div>
          <Button text={"결제하기"} /> */}
        </div>
      </form>
    )
    }