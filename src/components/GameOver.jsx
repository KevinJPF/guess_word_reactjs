import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div className="gameOver">
      <h1>Fim de Jogo!</h1>
      <p>
        A sua pontuação foi: <span>{score}</span>
      </p>
      <button onClick={retry}>Tentar Novamente</button>
    </div>
  );
};

export default GameOver;
