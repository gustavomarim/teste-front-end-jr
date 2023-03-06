import { VtexLogo } from '../../icons';
import Categories from './Categories/index';
import './Header.sass';
import Input from './Input';
import PurchaseInformation from './PurchaseInformation/index';
import UserNav from './UserNavigation/index';

const Header = () => {
  return (
    <header>
      <PurchaseInformation />
      <div className='navigation'>
        {VtexLogo()}
        <Input placeholder='O que você está buscando?' />
        <UserNav />
      </div>
      <Categories />
    </header>
  );
};

export default Header;
