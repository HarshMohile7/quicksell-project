import React from "react";
import Card from "./Card";

const Priority = ({ tickets }) => {
  const outer = {
    display: "flex",
    justifyContent: "space-between",
  };

  const inner = {
    display: "flex",
    flexDirection: "column",
  };

  const text = {
    textAlign: "center",
    fontWeight: "700"
  }

  return (
    <div style={outer}>
      <div style={inner}>
        <p style={text}>
          {tickets.filter((ticket) => ticket.priority === 4).length > 0 &&
            "Urgent"}
        </p>
        {tickets
          .filter((ticket) => ticket.priority === 4)
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map((ticket, index) => {
            return <Card data={ticket} key={index} />;
          })}
      </div>

      <div style={inner}>
        <p style={text}>
          {tickets.filter((ticket) => ticket.priority === 3).length > 0 &&
            "High"}
        </p>
        {tickets
          .filter((ticket) => ticket.priority === 3)
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map((ticket, index) => {
            return <Card data={ticket} key={index} />;
          })}
      </div>

      <div style={inner}>
        <p style={text}>
          {tickets.filter((ticket) => ticket.priority === 2).length > 0 &&
            "Medium"}
        </p>
        {tickets
          .filter((ticket) => ticket.priority === 2)
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map((ticket, index) => {
            return <Card data={ticket} key={index} />;
          })}
      </div>

      <div style={inner}>
        <p style={text}>
          {tickets.filter((ticket) => ticket.priority === 1).length > 0 &&
            "Low"}
        </p>
        {tickets
          .filter((ticket) => ticket.priority === 1)
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map((ticket, index) => {
            return <Card data={ticket} key={index} />;
          })}
      </div>

      <div style={inner}>
        <p style={text}>
          {tickets.filter((ticket) => ticket.priority === 0).length > 0 &&
            "No priority"}
        </p>
        {tickets
          .filter((ticket) => ticket.priority === 0)
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map((ticket, index) => {
            return <Card data={ticket} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Priority;
