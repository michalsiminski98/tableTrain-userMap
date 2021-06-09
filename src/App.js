import { tableData } from "./users";

function App() {
  const createTable = () => (
    <table>
      <thead>
        <tr>
          {tableData.titles.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {tableData.users.map((user) => (
            <td key={user.id}>{user.id}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );

  return <div className="App">{createTable()}</div>;
}

export default App;
