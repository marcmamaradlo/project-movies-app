const CustomButton = ({ text, style, action, name, id }) => {
  return (
    <button
      className={style}
      onClick={action}
      name={name}
      id={id}
    >
      {text}
    </button>
  );
}
export default CustomButton;

export const ButtonRounded = ({ onClick, className, title, name, id }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      title={title}
      name={name}
      id={id}
    >
      {title}
    </button>
  );
}

export const ButtonSquared = ({ onClick, className, title, name, id }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      title={title}
      name={name}
      id={id}
    >
      Rounded Custom Button
    </button>
  );
}

export const ButtonLink = ({ onClick, className, title, name, id }) => {
  return (
    <button
      onClick={onClick}
      className={className}
      title={title}
      name={name}
      id={id}
    >
      Rounded Custom Button
    </button>
  );
}