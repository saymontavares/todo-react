import styles from "./Button.module.css";
import IconAdd from "./../../assets/add.svg?react";

type Props = {
  onClick: () => void;
};

export const Button = ({ onClick }: Props) => {
  return (
    <div className={styles.container}>
      <button onClick={onClick}>
        Criar <IconAdd />
      </button>
    </div>
  );
};
