import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
    return (
        <div className="App">
            <Greeting isLoggedIn={false} />
            <Notification message="message" />
        </div>
    )
}

function Greeting({ isLoggedIn }) {
    return <h1>{isLoggedIn ? "Welcome back!" : "Please sign in."}</h1>;
}

function Notification({ message }) {
    return (
        <div>
            {message && <p>{message}</p>}
        </div>
    )
}












createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  )