import Product from '../components/homePage/Product';

function Frame(props) {
    return (
      <>
        {props.products.map((product) => {
          return (
            <Product
              key={product.number}
              number={product.number}
              name={product.name}
              descrip={product.descrip}
              photo="hhh"
            />
          );
        })}
      </>
    );
}

export default Frame;