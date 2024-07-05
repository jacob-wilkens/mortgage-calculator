import { Path, useFormContext } from "react-hook-form";
import { MortgageData } from "../../types";

type Props = {
  formField: Path<MortgageData>;
};

export const ErrorMessage = ({ formField }: Props) => {
  const {
    formState: { errors },
  } = useFormContext<MortgageData>();

  return <div className="error">{errors[formField] && <>This field is required </>}</div>;
};
