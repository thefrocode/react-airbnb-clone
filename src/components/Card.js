import star from "../images/star.png";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      {props.openSpots === 0 &&<div className="card--badge">SOLD OUT</div>}
      <img src={props.image} alt="Card" className="card--img" />
      <div className="card--rating">
        <img src={star} alt="Star" />
        <span>{props.rating}</span>
        <span>({props.reviewCount})</span>
        <span>{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--pricing">From $ {props.pricing} / person</p>
    </div>
  );
}
