import { Group, Heart, ShoppingCart, UserCircle } from '../../../icons';
import './UserNavigation.sass';

const UserNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Group />
        </li>
        <li>
          <Heart />
        </li>
        <li>
          <UserCircle />
        </li>
        <li>
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  );
};

export default UserNavigation;
