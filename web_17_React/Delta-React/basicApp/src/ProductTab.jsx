import Product from "./Product.jsx";

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems:"center",
    };
  return (
      <div style={styles}>
          <Product title="Logictech Mx Master" idx={ 0} />
          <Product title="Apple Pencil(2nd Gen)" idx={ 1}/>
          <Product title="Zebronics zeb" idx={2}/>
           <Product title="Petronics" idx={3}/>
    </div>
  );
}

export default ProductTab;
