import React, { useState, useEffect } from "react";
import Status from "./Status";
import Priority from "./Priority";
import Users from "./Users";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState({});
  const [choice, setChoice] = useState(
    localStorage.getItem("display") === null
      ? "status"
      : localStorage.getItem("display")
  );

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const info = await response.json();
      // console.log(info);
      setTickets(info.tickets);
      
      let doc = {}
      info.users.forEach((user) => doc[user.id] = user.name);
      setUsers(doc);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const style = {
    marginLeft: "2.5rem",
    marginTop: "1rem",
    marginBottom: "1rem"
  }

  return (
    <>
      <div style={style}>
        <label htmlFor="options">Display by:</label>
        &nbsp;&nbsp;&nbsp;
        <select
          name="options"
          id="options"
          onChange={(e) => {
            setChoice(e.target.value);
            localStorage.setItem("display", e.target.value);
          }}
        >
          <option value="status" selected={choice === "status"}>
            Status
          </option>
          <option value="priority" selected={choice === "priority"}>
            Priority
          </option>
          <option value="user" selected={choice === "user"}>
            User
          </option>
        </select>
      </div>
      {choice === "priority" && <Priority tickets={tickets} />}
      {choice === "status" && <Status tickets={tickets} />}
      {choice === "user" && <Users tickets={tickets} users={users} />}
    </>
  );
};

export default Dashboard;
