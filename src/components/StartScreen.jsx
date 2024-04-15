import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="Start">
      <img
        src="https://static.quizur.com/i/b/57c1c26fc0b812.5998420157c1c26fb156c9.51498011.png"
        alt="logo"
        width="400px"
      />
      <h1>Quem é esse Pokemon?</h1>
      <p>Clique no botão abaixo para começar a jogar.</p>
      <button onClick={startGame}>Começar</button>
    </div>
  );
};

export default StartScreen;
