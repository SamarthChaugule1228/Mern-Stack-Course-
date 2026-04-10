import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, price, features = [] , idx }) {
    let oldPrices = ["12,4000", "11,900", "1,599", "599"];
    let newPrices = ["8,4000", "5,900", "6,599", "499"];
    let description = ["8,000 DPI", "Intuitive Surface", "design for ipad Pro", "Wireless"];
    return (
      <div className="Product" >
          <h4>{ title}</h4>
          <p> {description[idx]} </p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx] } />
    </div>
  );
}

export default Product;
