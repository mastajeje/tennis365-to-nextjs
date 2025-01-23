import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import styles from "./Order.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type InfoBoxProps = {
    faIcon: IconDefinition;
    infoText: string;
    additionalInfo?: string;
}


export default function InfoBox({ faIcon, infoText, additionalInfo }:InfoBoxProps){
    return (
        <div className={styles["info-box"]}>
          <div className={styles["info-box__icon"]}>
            <FontAwesomeIcon icon={faIcon} className={styles["info-icon"]} />
          </div>
          <div className={styles["info-box__col"]}>{infoText}</div>
          {additionalInfo ? (
            <div className={styles["info-box__col2"]}>{additionalInfo}</div>
          ) : null}
        </div>
    )
    }