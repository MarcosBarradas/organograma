import "./Card.css";

const Card = ({ collaborator }) => {
  return (
    <div className="card">
      <div className="image-card">
        <img
          src={
            collaborator.inputImage || `https://tse1.explicit.bing.net/th?id=OIP.J2ytSztppgm-PXkH5jtPkgHaG7&pid=Api&P=0&h=180` || `https://tse4.mm.bing.net/th?id=OIP.JT_6-QOs3HPk6DzWeap-qwAAAA&pid=Api&P=0&h=180` || `https://tse3.mm.bing.net/th?id=OIP.fjrooo1XQXt5TYi1fHTJXgHaHa&pid=Api&P=0&h=180`
            
          }
          alt={`imagem do ${collaborator.inputName}`}
        />
      </div>
      <div className="card-content">
        <h4 className="card-name">{collaborator.inputName}</h4>
        <h5 className="card-title">{collaborator.inputPosition}</h5>
      </div>
    </div>
  );
};

export default Card;
