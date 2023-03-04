import { CreditCard, ShieldCheck, Truck } from '../../../icons';
import './PurchaseInformation.sass';

const PurchaseInformation = () => {
  return (
    <ul className='purchase-information'>
      <li>
        <ShieldCheck />
        <p>
          Compra <span>100% segura</span>
        </p>
      </li>
      <li>
        <Truck />
        <p>
          Frete grátis <span>acima de R$ 200</span>
        </p>
      </li>
      <li>
        <CreditCard />
        <p>
          Parcele <span>suas compras</span>
        </p>
      </li>
    </ul>
  );
};

export default PurchaseInformation;
