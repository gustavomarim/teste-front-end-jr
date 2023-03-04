import Button from '../shared/Button/index';
import './Promotion.sass';

const Promotion = () => {
  return (
    <article className='promotion'>
      <h1>Venha conhecer nossas promoções</h1>
      <h2>50% Off nos produtos</h2>

      <Button
        width={227}
        height={60}
        borderRadius={5}
        fontSize={18}
        fontWeight={600}
      >
        Ver Produto
      </Button>
    </article>
  );
};

export default Promotion;
