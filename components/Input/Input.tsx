import styles from './Input.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InputProps = {
    inputName: string;
    inputPlaceholder: string;
    inputType: string;
    inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: string | number;
    inputIcon: any;
    inputPattern?: string;
}


export default function Input({  inputIcon,
    inputName,
    inputPlaceholder,
    inputType,
    inputOnChange,
    values,
    inputPattern}: InputProps){
    return (
        <div className={styles["customer__input"]}>
        <div className={styles["customer__input--icon"]}>
          <FontAwesomeIcon icon={inputIcon} className={styles["fa-icon"]} />
        </div>
        <div className={styles["customer__input-box"]}>
          <input
            name={inputName}
            placeholder={inputPlaceholder}
            type={inputType}
            onChange={inputOnChange}
            value={values || ""}
            pattern={inputPattern}
            required
          />
        </div>
      </div>
    )
    }