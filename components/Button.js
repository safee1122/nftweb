import buttonStyles from "../styles/Button.module.css";
function Button(props) {
  return (
    <div className={buttonStyles.button}>
      <button>{props.text}</button>
    </div>
  );
}

export default Button;
