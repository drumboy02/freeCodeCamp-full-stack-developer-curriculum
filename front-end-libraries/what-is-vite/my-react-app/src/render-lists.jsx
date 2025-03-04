import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
    return (
        <>
            <FruitList />
            <UserList />
        </>
    )
}

function FruitList() {
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={`${fruit}-${index}`}>{fruit}</li>
            ))}
        </ul>
    );
}

function UserList() {
    const users = [
        { id: "user-001-employee", name: "Alice", email: "alice@example.com" },
        { id: "user-002-employee", name: "Bob", email: "bob@example.com" },
        { id: "user-003-employee", name: "John", email: "john@example.com" },
    ];
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}









createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  )