import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const dummy_procuts = [
    {
      id: 'P1',
      title: 'test1',
      price: 6,
      description: 'This is a first product - amazing!'
    },
    {
      id: 'P2',
      title: 'test2',
      price: 7,
      description: 'This is a second product - amazing!'
    },
    {
      id: 'P3',
      title: 'test3',
      price: 8,
      description: 'This is a third product - amazing!'
    },
    {
      id: 'P4',
      title: 'test4',
      price: 9,
      description: 'This is a fourth product - amazing!'
    }
  ]

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>

        {
          dummy_procuts.map(product =>

            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />

          )
        }


      </ul>
    </section>
  );
};

export default Products;
