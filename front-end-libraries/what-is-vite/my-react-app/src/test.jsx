import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
    const developerObj = {
        name: "Alice",
        age: 30,
        country: "USA",
    };

    return (
        <div className="App">
            <DeveloperCard {...developerObj} />
        </div>
    );
}

function Greeting({ name }) {
    return <h1>Hi {name}!</h1>
}

function DeveloperCard({ name, age, country }) {
    return (
        <div className="developer-card">
            <h1>Developer: {name}</h1>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
        </div>
    )
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  )