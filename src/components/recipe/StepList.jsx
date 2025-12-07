import "./StepList.css";

function StepList({ steps }) {
  return (
    <div className="step-list">
      <h2>Steps</h2>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>
            <p>
              {index + 1}. {step}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StepList;
