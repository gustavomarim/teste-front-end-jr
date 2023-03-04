import './CategoryCard.sass';

export interface CategoryCardProps {
  path: string;
  alt: string;
  title: string;
}

const CategoryCard = (props: CategoryCardProps) => {
  return (
    <li id='product-card'>
      <div>
        <img src={props.path} alt={props.alt} />
      </div>
      <span>{props.title}</span>
    </li>
  );
};

export default CategoryCard;
