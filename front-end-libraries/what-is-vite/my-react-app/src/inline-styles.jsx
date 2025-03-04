import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
    return (
      <>
        <Button buttonText="text" />
        <ButtonTwo buttonText="textTwo" />
        <DynamicButton />
        <DynamicButton isActive />
      </>
    )
}

function Button({ buttonText }) {
  const defaultStyles = {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return <button style={defaultStyles}>{buttonText}</button>;
}

function ButtonTwo({ buttonText }) {
  return (
    <button
      style={{
        backgroundColor: "#007BFF",
        color: "white",
      }}
    >
      {buttonText}
    </button>
  );
}

function DynamicButton({ isActive }) {
  const buttonStyles = {
    backgroundColor: isActive ? "green" : "red",
    color: "white",
    padding: "10px 15px",
    border: "none",
    cursor: "pointer",
  };

  return <button style={buttonStyles}>Login</button>;
}





createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  )