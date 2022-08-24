import React, { useState } from "react";
import "../style.scss";
import axios from "axios";

const SubscribeComponent = () => {
  const [email, setemail] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setemail(event.target.value);
  };

  const submitEmail = (e) => {
    e.preventDefault();

    if (email !== null && email !== undefined) {
      axios
        .post(
          "https://newsroom-backend.herokuapp.com/userSubscribe/create-user-sub",
          { email: email }
        )
        .then((res) => {
          console.log(res, res.data);
          if (res.status === 200) {
            alert("Email submitted");
            setemail("");
          } else Promise.reject();
        })
        .catch((error) => console.log(error.message));
    }
  };

  return (
    <>
      <div
        style={{ marginTop: `40px`, background: `#ef1f1f`, padding: `40px` }}
      >
        <div className="" style={{ textAlign: `center` }}>
          <p className="subscribeTitle">
            Subscribe for the latest news updates !
          </p>

          <div className="subscribeDiv">
            <form onSubmit={(e) => submitEmail(e)}>
              <button style={{ float: `right` }}>Join now</button>
              <div style={{ overflow: `hidden`, paddingRight: `.5em` }}>
                <input
                  type="text"
                  style={{ width: `100%` }}
                  placeholder="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <span>{error}</span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeComponent;
