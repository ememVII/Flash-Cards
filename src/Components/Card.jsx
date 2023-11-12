
function Card({question, answer, id, selectedId, onClickAnswer}) {
    
  return (
    <div className={`card ${id === selectedId ? 'active' : ''}`} onClick={() => onClickAnswer(id)}>
      <h1 className="text-xl">{id === selectedId ? answer : question}</h1>
    </div>
  );
}

export default Card;
