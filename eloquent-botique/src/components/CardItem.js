export default function CardItem({ item }) {
  return (
    <div className="card-item">
      <img src={item.image} alt={item.title} className="item-image" />
      <div className="item-details">
        <h2 className="item-title">{item.title}</h2>
        <p className="item-price">${item.price}</p>
      </div>
    </div>
  );
}
