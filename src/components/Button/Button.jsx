export default function Button({
  onClick = () => {},
  children,
  className = "btn-toggle",
}) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
