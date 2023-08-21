export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      <li>
        <button onClick={() => onLeaveFeedback(options[0])}>Good</button>
      </li>
      <li>
        <button onClick={() => onLeaveFeedback(options[1])}>Neutral</button>
      </li>
      <li>
        <button onClick={() => onLeaveFeedback(options[2])}>Bad</button>
      </li>
    </ul>
  );
};
