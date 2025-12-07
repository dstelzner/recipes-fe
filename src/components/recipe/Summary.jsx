import "./Summary.css";

function Summary({ summary, tags }) {
  return (
    <div>
      {tags.map((tag) => (
        <div key={tag} className="tag">
          {tag}
        </div>
      ))}
      <h2>Summary</h2>
      <p>{summary}</p>
    </div>
  );
}

export default Summary;
