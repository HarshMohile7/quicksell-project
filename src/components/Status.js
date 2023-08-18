import React from 'react'
import Card from './Card';

const Status = ({ tickets }) => {
    const outer = {
        display: "flex",
        justifyContent: "space-evenly",
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
            <p style={text}>{tickets.filter((ticket) => ticket.status === "Backlog").length > 0 && "Backlog"}</p>
            {tickets.filter((ticket) => ticket.status === "Backlog").sort((a, b) => (a.title > b.title ? 1 : -1)).map((ticket, index) => {
            return <Card data={ticket} key={index} />
        })}
        </div>

        <div style={inner}>
        <p style={text}>{tickets.filter((ticket) => ticket.status === "Todo").length > 0 && "Todo"}</p>
        {tickets.filter((ticket) => ticket.status === "Todo").sort((a, b) => (a.title > b.title ? 1 : -1)).map((ticket, index) => {
            return <Card data={ticket} key={index} />
        })}
        </div>

        <div style={inner}>
        <p style={text}>{tickets.filter((ticket) => ticket.status === "In progress").length > 0 && "In progress"}</p>
            {tickets.filter((ticket) => ticket.status === "In progress").sort((a, b) => (a.title > b.title ? 1 : -1)).map((ticket, index) => {
            return <Card data={ticket} key={index} />
        })}
        </div>

        <div style={inner}>
            <p style={text}>{tickets.filter((ticket) => ticket.status === "Done").length > 0 && "Done"}</p>
            {tickets.filter((ticket) => ticket.status === "Done").sort((a, b) => (a.title > b.title ? 1 : -1)).map((ticket, index) => {
            return <Card data={ticket} key={index} />
        })}
        </div>

        <div style={inner}>
        <p style={text}>{tickets.filter((ticket) => ticket.status === "Cancelled").length > 0 && "Cancelled"}</p>
            {tickets.filter((ticket) => ticket.status === "Cancelled").sort((a, b) => (a.title > b.title ? 1 : -1)).map((ticket, index) => {
            return <Card data={ticket} key={index} />
        })}
        </div>
    </div>
  )
}

export default Status