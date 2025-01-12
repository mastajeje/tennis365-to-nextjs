'use client'
import styles from './register.module.scss'
import { faEnvelope, faIdCard, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Input from "../../components/Input/Input";
import { useState } from "react";
import useInputChanges from "../../libs/useInputChange";

const initValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    address2: "",
  };

export default function page(){
    const { values, handleInputChange } = useInputChanges(initValues);

    const [errorMessage, setErrorMessage] = useState("");

    const postJoin = () => {
        return
    }

    return (
        <div className={styles["form-container"]}>
        {errorMessage && <span>{errorMessage}</span>}
        <form
          action="https://tennis365-api.herokuapp.com/join"
          method="POST"
          onSubmit={postJoin}
        >
          <Input
            inputIcon={faUser}
            inputName={"name"}
            inputPlaceholder={"이름"}
            inputType={"text"}
            values={values.name}
            inputOnChange={handleInputChange}
          />
          <Input
            inputIcon={faIdCard}
            inputName={"username"}
            values={values.username}
            inputPlaceholder={"아이디"}
            inputType={"text"}
            inputOnChange={handleInputChange}
          />
          <Input
            inputIcon={faEnvelope}
            inputName={"email"}
            values={values.email}
            inputPlaceholder={"이메일"}
            inputType={"email"}
            inputOnChange={handleInputChange}
          />
          <Input
            inputIcon={faLock}
            inputName={"password"}
            values={values.password}
            inputPlaceholder={"비밀번호"}
            inputType={"password"}
            inputOnChange={handleInputChange}
          />
          <Input
            inputIcon={faLock}
            inputName={"passwordConfirm"}
            values={values.passwordConfirm}
            inputPlaceholder={"비밀번호 확인"}
            inputType={"password"}
            inputOnChange={handleInputChange}
          />
          {/* <AddressInput
            handleInputChange={handleInputChange}
            handleComplete={handleComplete}
            fullAddress={fullAddress}
            address2={values.address2}
          /> */}
  
          <input className={styles["join-btn"]} type="submit" value="회원가입" />
        </form>
      </div>
    )
    }