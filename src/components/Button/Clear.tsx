import "./button.css";

type Props = JSX.IntrinsicElements["button"];

export const Clear = ({ children, ...rest }: Props) => {
  return (
    <button className="clear-btn" {...rest}>
      {children}
    </button>
  );
};
