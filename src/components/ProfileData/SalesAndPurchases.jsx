import formatValue from "../../utils/formatValue";

const SalesAndPurchases = ({whichHistory, ProductsOfSalesOrPurchases, isSellerToShowTotal}) => {

  const printSalesOrPurchases = ({name, price}, index) => (
    <div key={index} >
      <h4>{name}</h4>
      <h5>{formatValue(price)}</h5>
    </div>
  );

  const TotalSales = (acc, element) => acc += element.price;

  return (
    <div>
      <h3>{whichHistory}</h3>
      {ProductsOfSalesOrPurchases.map(printSalesOrPurchases)}
      { isSellerToShowTotal !== "client" && <h5> Total { formatValue(ProductsOfSalesOrPurchases.reduce(TotalSales, 0)) } </h5> }
    </div>
  );
};

export default SalesAndPurchases;