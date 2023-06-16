const Button = ({ onClick, children }) => {
  
  const buttonStyle = {
    color: '#fff',
    backgroundColor: '#3498db',
    borderRadius: '4px',
    border: '1px solid #fff',
    width: '200px',
    height: '32px'
  }

  return (
    <button type="button" style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button