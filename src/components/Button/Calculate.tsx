import "./button.css";

type Props = JSX.IntrinsicElements["button"];

export const Calculate = ({ children, ...rest }: Props) => {
  return (
    <button className="calculate-btn" {...rest}>
      <span style={{ padding: "1rem", justifyContent: "center", alignItems: "flex-end", width: "100%", display: "inline-flex", gap: "1rem" }}>
        <img src="img/icon-calculator.svg" alt="Calculator" />
        {children}
      </span>
    </button>
  );
};
