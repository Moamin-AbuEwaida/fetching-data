import useFetch from "./useFetch"
import './App.css';

function App() {
  const BASEURL = 'https://reqres.in/api/users/';
  const { data:users, loading, error } = useFetch( BASEURL );
  return (
    <div>
      <h1>fetching data</h1>
      {loading && <h3>loading...</h3>}
      {error && <h3> something went wrong!!</h3>}
      <div>
        {/* <pre>{JSON.stringify(users, undefined, 2)}</pre> */}
        <div className="App">
          <h1>Hello ReqRes users!</h1>
          <div className="flex">
            {users.length &&
              users.map((user) => {
                return (
                  <div key={user.id}>
                    <p>
                      <strong>{user.first_name}</strong>
                    </p>
                    <p>{user.email}</p>
                    <img key={user.avatar} src={user.avatar} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
