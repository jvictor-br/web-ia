import styles from "./styles.module.css";

interface Iprops {
  title?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<Iprops> = ({ title, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {title}
    </button>
  );
};

export default Button;
