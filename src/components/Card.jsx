export default function Card(props) {
  const { data } = props;
  return (
    <div className="card" style={{margin: '5px'}}>
      <div className="card-body">
        <h5 className="card-title">Joke</h5>
        <h6 className="card-subtitle mb-2 text-muted">{data.setup}</h6>
        <p className="card-text">{data.punchLine}</p>
      </div>
    </div>
  );
}
