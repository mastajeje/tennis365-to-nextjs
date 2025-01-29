import styles from "./Modal.module.scss"

interface ModalProps {
    open: boolean;
    close: () => void;
    header: string;
    children: React.ReactNode;
    }

export default function Modal({ open, close, header,children }: ModalProps) {
    return (
        <div className={open ? `${styles['openModal']} ${styles['modal']}` : styles["modal"]}>
        {open ? (
          <section>
            <header>
              {header}
              <button className={styles["close"]} onClick={close}>
                &times;
              </button>
            </header>
            <main>{children}</main>
          </section>
        ) : null}
      </div>
    )
    }