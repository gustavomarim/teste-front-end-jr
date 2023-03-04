import { MagnifyingGlass } from '../../../icons';
import './Input.sass';

export interface InputProps {
  placeholder: string;
}

const Input = (props: InputProps) => {
  return (
    <div className='input-container'>
      <input className='input' placeholder={props.placeholder} />
      <div className='input-icon'>
        <MagnifyingGlass />
      </div>
    </div>
  );
};

export default Input;
