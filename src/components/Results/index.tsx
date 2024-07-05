import "./results.css";

type Props = {
  repayment: number;
  termPayment: number;
};

export const Results = ({ repayment, termPayment }: Props) => {
  return (
    <div className="right">
      <div className="results__container">
        <h3 className="right__title">Your Results</h3>
        <p className="right__text">
          Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments"
          again.
        </p>
        <div className="results__info__container">
          <div className="top__results">
            <p className="right__text">Your Monthly repayments</p>
            <h2 className="results__info__value">£{repayment}</h2>
          </div>
          <hr />
          <div className="bottom__results">
            <p className="right__text">Total you'll repay over the term</p>
            <p className="results__total">£{termPayment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
