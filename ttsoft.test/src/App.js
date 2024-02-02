import Axios, { spread } from "axios";
import { useState } from "react";


function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [userList, setUserList] = useState([]);


  const getUser = () => {
    Axios.get("http://localhost:3001/userInfo").then((response) => {
      setUserList(response.data);
    });
  };

  const addUser = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setUserList([
        ...userList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
    });
  };

  return (
    <div className="App container">
      <h1>Employees Infomation</h1>
      <div className="information">
        <form action="">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              onChange={(event) => {
                setName(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter age"
              onChange={(event) => {
                setAge(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter country"
              onChange={(event) => {
                setCountry(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Position">Position:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Position"
              onChange={(event) => {
                setPosition(event.target.value)
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Wage">Wage:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Wage"
              onChange={(event) => {
                setWage(event.target.value)
              }}
            />
          </div>
          <button onClick={addUser} class="btn btn-success">
            Add Employee
          </button>
        </form>
      </div>
      <hr />
      <div className="employees">
        <button class="btn btn-primary" onClick={getUser}>
          Show Employees
        </button>
        <br />
        <br />
        {userList.map((val, key) => {
          return (
            <div className="employee card">
              <div className="card-body text-left">
                <p className="card-text">Name: {val.name}</p>
                <p className="card-text">Age: {val.age}</p>
                <p className="card-text">Country: {val.country}</p>
                <p className="card-text">Position: {val.position}</p>
                <p className="card-text">Wage: {val.wage}</p>
                <div className="d-flex">
                  <input
                    className="form-control"
                    style={{ width: "300px" }} 
                    type="number"
                    placeholder="15000..."
                    onChange={(event) => {
                      // setNewWage(event.target.value)
                    }}
                  />
                  <button className="btn btn-warning" onClick={() => {null(val.id)}}>Update</button>

                  <button className="btn btn-danger" onClick={() => {null(val.id)}}>Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;