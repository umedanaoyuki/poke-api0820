import "./Card.css";

export const Card = ({ pokemon }) => {
  // console.log(pokemon);
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt="ポケモン画像" />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemon.types.map((type, index) => {
          return (
            <div key={index}>
              <span className="typeName">{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">重さ: {pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">高さ: {pokemon.height}</p>
        </div>
        <div className="cardData">
          <div className="title">
            能力一覧:
            {pokemon.abilities.map((ability, i) => {
              return <p key={i}>{ability.ability.name}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
