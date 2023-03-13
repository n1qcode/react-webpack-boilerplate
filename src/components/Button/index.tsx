import { FC } from "react";
import cn from "classnames";

import styles from "./Button.module.css";
import { IButton } from "./Button.typings";

const Button: FC<IButton> = (props) => {
  const { children, appearance = "ghost" } = props;
  return (
    <button
      {...props}
      className={cn(styles.root, { [styles.ghost]: appearance === "ghost" })}
    >
      {children}
    </button>
  );
};

export default Button;
