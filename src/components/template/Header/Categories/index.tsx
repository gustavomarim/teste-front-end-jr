import { CrownSimple } from '../../../icons';
import './Categories.sass';

const Categories = () => {
  return (
    <nav className='categories'>
      <ul>
        <li>todas as categorias</li>
        <li>supermercado</li>
        <li>livros</li>
        <li>moda</li>
        <li>lançamentos</li>
        <li className='active'>ofertas do dia</li>
        <li>
          <CrownSimple />
          assinatura
        </li>
      </ul>
    </nav>
  );
};

export default Categories;
