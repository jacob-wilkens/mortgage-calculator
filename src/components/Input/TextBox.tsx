import { ReactNode } from "react";

import { Path, RegisterOptions, useFormContext } from "react-hook-form";
import { MortgageData } from "../../types";
import { ErrorMessage } from "../ErrorMessage";
import "./textbox.css";

type Props = {
  formField: Path<MortgageData>;
  formFieldOptions?: RegisterOptions<MortgageData>;
  label: string;
  inputProps?: JSX.IntrinsicElements["input"];
  divider?: ReactNode;
  dividerPosition?: "left" | "right";
};

export const TextBox = ({ formField, formFieldOptions, label, inputProps, divider, dividerPosition }: Props) => {
  const { register } = useFormContext<MortgageData>();

  let dividerClass = "";

  if (divider && dividerPosition === "left") {
    dividerClass = "place-holder-start";
  } else if (divider && dividerPosition === "right") {
    dividerClass = "place-holder-end";
  }

  return (
    <>
      <label className="input-label" htmlFor={formField}>
        {label}
      </label>
      <div className={`input-container ${dividerClass}`}>
        {divider && <div className="placeholder">{divider}</div>}
        <input {...register(formField, formFieldOptions)} {...inputProps} className="text-box" id={formField} />
      </div>
      <ErrorMessage {...{ formField }} />
    </>
  );
};
