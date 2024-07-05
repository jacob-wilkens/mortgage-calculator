import "./place-holder.css";

export const Placeholder = () => {
  return (
    <div className="right">
      <div className="place-holder-container">
        <img src="img/illustration-empty.svg" alt="Calculator for Mortgages" />
        <h3 className="right__title">Results shown here</h3>
        <p className="right__text">Complete the form and click "calculate repayments" to see what your monthly repayments would be</p>
      </div>
    </div>
  );
};
