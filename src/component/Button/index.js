import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  primary,
  outline,
  text,
  rounded,
  small,
  large,
  children,
  onClick,
  passProps,
}) {
  let Comp = "button";

  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classnames = cx("wrapper", {
    primary,
    text,
    outline,
    rounded,
    small,
    large,
  });
  return (
    <Comp className={classnames} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
