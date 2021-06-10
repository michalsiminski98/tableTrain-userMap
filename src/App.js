import { tableData } from "./users";
import "./App.css";
import { useState } from "react";

function App() {
  const [users, setUser] = useState(tableData.users);
  const [titles] = useState(tableData.titles);

  const handleDeleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUser(newUsers);
  };
  const createTable = () => (
    <table>
      <thead>
        <tr>
          {titles.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            {titles.map((title, infoIndex) =>
              infoIndex !== 3 ? (
                <td key={title[infoIndex]}>
                  {Object.values(user)[infoIndex + 1]}
                </td>
              ) : (
                <td key={title[infoIndex]}>
                  <button onClick={() => handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      <nav></nav>
      <main>
        <div className="tableWrapper">{createTable()}</div>
        <aside></aside>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
