import { Path, RegisterOptions, useFormContext } from "react-hook-form";
import { MortgageData } from "../../types";
import "./radio.css";

type Props = {
  formField: Path<MortgageData>;
  formFieldOptions?: RegisterOptions<MortgageData>;
  radioProps: Omit<JSX.IntrinsicElements["input"], "type">;
  formLabel: string;
};

export const Radio = ({ formField, formFieldOptions, radioProps, formLabel }: Props) => {
  const { register } = useFormContext<MortgageData>();
  const { value } = radioProps;

  return (
    <div className="radio-container">
      <input {...register(formField, formFieldOptions)} type="radio" {...radioProps} id={value?.toString()} />
      <label htmlFor={value?.toString()}>{formLabel}</label>
    </div>
  );
};
