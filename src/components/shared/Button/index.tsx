import './Button.sass';

export interface ButtonProps {
  borderRadius: 4 | 5 | 10;
  fontSize: number;
  width: number;
  height: number;
  fontWeight: number;
  children?: string;
}

const Button = (props: ButtonProps) => {
  const buttonStyle = {
    borderRadius: `${props.borderRadius}px`,
    width: `${props.width}px`,
    height: `${props.height}px`,
    fontSize: `${props.fontSize}px`,
    fontWeight: `${props.fontWeight}`,
  };

  return <button style={buttonStyle}>{props.children}</button>;
};

export default Button;
