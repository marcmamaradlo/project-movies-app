const CustomButton = ({text, style, action, name}) => {
  return (
      <button
      className={style}
      onClick={action}
      name={name}
      >
        {text}
      </button>
  );
}

export default CustomButton;