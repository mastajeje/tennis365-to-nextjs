'use client'
import styles from './Button.module.scss'

 const Button = (props) => {
    return (
      <button className={styles["button-component"]} onClick={props.handleBtnClick}>
        {props.text}
      </button>
    );
  };

  export default Button;
