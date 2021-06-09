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
        {tableData.users.map((count) => (
          <tr>
            {tableData.users.map((user, infoIndex) => (
              <td key={user.id}>{Object.values(count)[infoIndex + 1]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return <div className="App">{createTable()}</div>;
}

export default App;
