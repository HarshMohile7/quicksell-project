// import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

function Card({ data }) {
  const cardStyle = {
    display: "block",
    borderRadius: "0.5rem",
    backgroundColor: "rgb(229 231 235)",
    width: "300px",
    height: "160px",
    position: "relative",
    margin: "0.5rem"
  }

  const style2 = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderBottomWidth: "2px",
    borderColor: "rgb(245 245 245)"
  }

  const style3 = {
    textAlign: "left",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem"
  }

  const style4 = {
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem"
  }

  const style5 = {
    marginBottom: "0.5rem",
    marginTop: "0.25rem",
    textAlign: "center",
    fontWeight: "500",
    color: "rgb(38 38 38)",
    fontSize: "0.875rem",
    // lineHeight: "1.25rem"
  }

  const style6 = {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingBottom: "1rem",
    display: "flex",
    justifyContent: "flex-start",
    position: "absolute",
    bottom: 0
  }

  const style7 = {
    display: "inline-block",
    borderRadius: "0.25rem",
    backgroundColor: "rgb(191 219 254)",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    paddingBottom: "0.5rem",
    paddingTop: "0.625rem",
    fontSize: "0.75rem",
    fontWeight: "500"
  }

  return (
    <div className="App">
      <div className="container ">
        <div style={cardStyle}>
          <div style={style2}>
          <div style={style3}>
            {data.id}
          </div>
          <div style={style3}>
            {data.status}
          </div>
          <div style={style3}>
            {data.userId}
          </div>
          <div style={style3}>
            {data.priority}
          </div>
          </div>
          <div style={style4}>
            <h5 style={style5}>
              {data.title}
            </h5>
          </div>
          <div style={style6}>
            <div
              type="button"
              href="#"
              style={style7}
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Feature Request
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
