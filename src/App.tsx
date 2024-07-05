import { useForm } from "react-hook-form";
import { Calculator, Placeholder, Results } from "./components";
import { MortgageData } from "./types";

function App() {
  const methods = useForm<MortgageData>();

  const {
    formState: { isSubmitSuccessful },
  } = methods;

  return (
    <div className="outer-container">
      <Calculator {...{ methods }} />
      {isSubmitSuccessful ? <Results repayment={1797.74} termPayment={539322.94} /> : <Placeholder />}
    </div>
  );
}

export default App;
