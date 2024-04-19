const Button = ({ title, color }: IButton) => {
  return (
    <button className={color === "white" ? "white-btn" : "black-btn"}>
      {title}
    </button>
  );
};

export default Button;
