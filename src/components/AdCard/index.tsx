import Button from '../shared/Button';
import './AdCard.sass';

export interface AdCardProps {
  title: string;
  content: string;
  padding?: string;
  borderRadius: string;
}

export const AdCard = (props: AdCardProps) => {
  const style = {
    padding: props.padding,
    borderRadius: props.borderRadius,
  };
  return (
    <div style={style} className='ad-card'>
      <h2>{props.title}</h2>
      <p>{props.content}</p>

      <Button
        borderRadius={10}
        fontSize={16}
        width={131}
        height={48}
        fontWeight={900}
      >
        CONFIRA
      </Button>
    </div>
  );
};
