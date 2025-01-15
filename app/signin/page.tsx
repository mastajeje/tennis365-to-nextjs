'use client'
import styles from './signin.module.scss';
import { useState } from 'react';
import Input from '../../components/Input/Input';
import useInputChanges from '../../lib/useInputChange';
import { faIdCard, faLock } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';

export default function page() {
    const initValues = {
        username: "",
        password: "",
      };
    const { values, handleInputChange} = useInputChanges(initValues);
    const [errorMessage, setErrorMessage] = useState("");

    const postLogin = () => {

        return
    }
    const moveToRegisterPage = () => {

        return
    }

  return (
    <div className="form-container">
      {errorMessage && <span>{errorMessage}</span>}
      <form action="" onSubmit={postLogin}>
        <Input
          inputIcon={faIdCard}
          inputName={'username'}
          inputPlaceholder={'아이디'}
          inputType={'text'}
          values={values.username}
          inputOnChange={handleInputChange}
        />
        <Input
          inputIcon={faLock}
          inputName={'password'}
          values={values.password}
          inputPlaceholder={'비밀번호'}
          inputType={'password'}
          inputOnChange={handleInputChange}
        />
        <Button text={'로그인'} />
        {/* <input type="submit" value="로그인" />
         */}
      </form>

      {/* Fixme: 이 버튼도 Button 컴포넌트로 바꾸기 */}
      <button className={styles["login-to-join"]} onClick={moveToRegisterPage}>
        회원가입
      </button>
    </div>
  );
}
