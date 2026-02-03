import visa from "../assets/images/visa.png";
import mastercard from "../assets/images/master-card.svg";
import "./CreditCard.css";

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const maskedCard = `•••• •••• •••• ${number.slice(-4)}`;

  const formattedMonth =
    expirationMonth.toString().padStart(2, "0");

  const formattedYear =
    expirationYear.toString().slice(-2);

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="card-top">
        <img src={type === "Visa" ? visa : mastercard} alt={type} />
      </div>

      <div className="card-number">{maskedCard}</div>

      <div className="card-bottom">
        <div className="left-info">
          <div className="bank-exp">
            Expires {formattedMonth}/{formattedYear} {bank}
          </div>

          <div className="owner">{owner}</div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
