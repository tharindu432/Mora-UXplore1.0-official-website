import { useEffect, useState, Fragment, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../../img/success.png";
import styles from "./styles.module.css";
//import { Fragment } from "react/cjs/react.production.min";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);
  const [hasSentRequest, setHasSentRequest] = useState(false);
  const hasSentRequestB = useRef(false);
  const param = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/teams/activate/${param.token}`, {
      method: "PATCH",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Hello");
          setValidUrl(true);
        } else {
          setValidUrl(false);
        }
      })
      .catch((error) => {
        setValidUrl(false);
        console.error(error);
      });
  }, []);

  //   useEffect(() => {
  //     if (!hasSentRequestB.current) {
  //       fetch("https://example.com/api/v1/teams/1", {
  //         method: "PATCH",
  //       })
  //         .then((response) => {
  //           if (response.ok) {
  //             setValidUrl(true);
  //           } else {
  //             setValidUrl(false);
  //           }
  //         })
  //         .catch((error) => {
  //           setValidUrl(false);
  //           console.error(error);
  //         })
  //         .finally(() => {
  //           hasSentRequestB.current = true;
  //         });
  //     }
  //   }, []);

  //   useEffect(() => {
  //     if (!hasSentRequest) {
  //       fetch(`http://localhost:3001/api/v1/teams/activate/${param.token}`, {
  //         method: "PATCH",
  //       })
  //         .then((response) => {
  //           if (response.ok) {
  //             setValidUrl(true);
  //           } else {
  //             setValidUrl(false);
  //           }
  //         })
  //         .catch((error) => {
  //           setValidUrl(false);
  //           console.error(error);
  //         })
  //         .finally(() => {
  //           setHasSentRequest(true);
  //         });
  //     }
  //   }, [hasSentRequest]);

  return (
    <Fragment>
      {validUrl ? (
        <div className={styles.container}>
          <img src={success} alt="success_img" className={styles.success_img} />
          <h1>Email verified successfully</h1>
          <Link to="/teamregister">
            <button className={styles.green_btn}>Add Team Members</button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </Fragment>
  );
};

export default EmailVerify;
