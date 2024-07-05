import { FormProvider, RegisterOptions, SubmitHandler, UseFormReturn } from "react-hook-form";
import { Calculate, Clear, Radio, TextBox } from "..";
import { MortgageData } from "../../types";
import { ErrorMessage } from "../ErrorMessage";

const formFieldOptions: RegisterOptions<MortgageData> = {
  required: true,
};

type Props = {
  methods: UseFormReturn<MortgageData, unknown, undefined>;
};

export const Calculator = ({ methods }: Props) => {
  const { handleSubmit, reset } = methods;

  const submitFn: SubmitHandler<MortgageData> = () => reset();

  const clearFn = () => reset(undefined, { keepErrors: false });

  return (
    <FormProvider {...methods}>
      <form className="left" onSubmit={handleSubmit(submitFn)}>
        <div className="title-container">
          <h3>Mortgage Calculator</h3>
          <Clear onClick={clearFn}>Clear All</Clear>
        </div>
        <div className="input-flex-container ">
          <TextBox
            inputProps={{ type: "number" }}
            formFieldOptions={formFieldOptions}
            formField="amount"
            label="Mortgage Amount"
            divider="£"
            dividerPosition="left"
          />
        </div>
        <div className="financials-container">
          <div className="input-flex-container ">
            <TextBox
              inputProps={{ type: "number" }}
              formFieldOptions={formFieldOptions}
              formField="term"
              label="Mortgage Term"
              divider="years"
              dividerPosition="right"
            />
          </div>
          <div className="input-flex-container ">
            <TextBox
              inputProps={{ type: "number" }}
              formFieldOptions={formFieldOptions}
              formField="rate"
              label="Interest Rate"
              divider="%"
              dividerPosition="right"
            />
          </div>
        </div>
        <div className="type-container">
          <label>Mortgage Type</label>
          <Radio formFieldOptions={formFieldOptions} formField="type" formLabel="Repayment" radioProps={{ value: "repayment" }} />
          <Radio formFieldOptions={formFieldOptions} formField="type" formLabel="Interest Only" radioProps={{ value: "interest" }} />
          <ErrorMessage formField="type" />
        </div>
        <div className="calculate-container">
          <Calculate>Calculate Repayments</Calculate>
        </div>
      </form>
    </FormProvider>
  );
};
