import { useState } from "react";

export default function Home() {

  const [submittedBricks, setSubmittedBricks] = useState(null);

  async function FormHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = formData.get("username");
    const bricks = formData.get("bricks-amount");

    if (user?.length && bricks?.length > 0) {
      setSubmittedBricks(bricks);
    } else {
      console.log("Invalid details");
    }
  }

  return (
    <>
    <h1 className="bricks-title">Polytoria brick generator</h1>
    <div className="bricks-container">
        <form onSubmit={FormHandler} className="bricks-form">
            <input type="text" name="username" placeholder="Username" className="bricks-input"></input>
            <input type="number" name="bricks-amount" placeholder="Bricks Amount" min="1" max="1000000" className="bricks-input"></input>
            <p className="bricks-sign">FREE</p>
            <input type="submit" value="Receive" className="bricks-submit"></input>
        </form>
    </div>
    {submittedBricks && (
    <div className="submit-notification">
        <button className="submit-close" onClick={() => setSubmittedBricks(null)}>x</button>
        <p className="notification-header">Success!</p>
        <img src="./assets/images/brick.png" className="polytoria-brick"></img>
        <p className="notification-text">
        <span className="brick-highlight">
            {submittedBricks}
        </span>{" "}
        Bricks have been deposited to your polytoria account!
        </p>
    </div>  
    )}
    <h6 className="site-warning">Obviously this is a joke website, you will not get free bricks. </h6>
    </>
  );
}