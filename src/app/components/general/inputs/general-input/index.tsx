import styles from "./index.module.css";

type InputProps = React.ComponentProps<"input">;

export const Input = ({ className, ...props }: InputProps) => {
  const classN = `${className} ${styles.main}`;

  return <input className={classN} {...props} />;
};
