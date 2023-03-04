import FashionImg from '../../assets/images/fashion.png';
import HealthCareImg from '../../assets/images/health-care.png';
import MonitorsImg from '../../assets/images/monitors.png';
import RaceImg from '../../assets/images/race.png';
import SuperMarketImg from '../../assets/images/supermarket.png';
import ToolsImg from '../../assets/images/tools.png';
import WhiskeyImg from '../../assets/images/whiskey.png';
import { ProductsFilter } from '../../core/models/productsFilter';

export const productsFilter: ProductsFilter[] = [
  {
    title: 'Tecnologia',
    image: MonitorsImg,
  },
  {
    title: 'Supermercado',
    image: SuperMarketImg,
  },
  {
    title: 'Bebidas',
    image: WhiskeyImg,
  },
  {
    title: 'Ferramentas',
    image: ToolsImg,
  },
  {
    title: 'Saúde',
    image: HealthCareImg,
  },
  {
    title: 'Esportes e Fitness',
    image: RaceImg,
  },
  {
    title: 'Moda',
    image: FashionImg,
  },
];
