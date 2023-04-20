import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { CAlert } from "@coreui/react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { API_URL } from "../constants";

function Register() {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(null);
  // const [message, setMessage] = useState("");
  // const [error, setError] = useState("");
  // const [msg, setMsg] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:3001/api/v1/teams/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ teamName: username, email: email }),
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //   // you can handle the response data here, such as showing a success message to the user
  //   if (response.ok === false) {
  //     setAlert(
  //       <CAlert
  //         className="my-alert"
  //         color="danger"
  //         variant="solid"
  //         style={{
  //           backgroundColor: "#F44336",
  //           color: "#FFFFFF",
  //           border: "none",
  //           borderRadius: "10px",
  //           padding: "20px",
  //           boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           position: "fixed",
  //           top: "0",
  //           left: "50%",
  //           transform: "translateX(-50%)",
  //           zIndex: "999", // add this property
  //           width: "40%",
  //           marginTop: "100px",
  //           marginRight: "150px",
  //         }}
  //       >
  //         <FaExclamationCircle
  //           size={30}
  //           style={{ marginRight: "5px", color: "#FFFFFF" }}
  //         />
  //         <span style={{ fontSize: "1rem", marginLeft: "5px" }}>
  //           Registration failed
  //         </span>
  //       </CAlert>
  //     );
  //   } else {
  //     setAlert(
  //       <CAlert
  //         className="my-alert"
  //         color="success"
  //         variant="solid"
  //         style={{
  //           backgroundColor: "#4CAF50",
  //           color: "#FFFFFF",
  //           border: "none",
  //           borderRadius: "10px",
  //           padding: "20px",
  //           boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
  //           display: "flex",
  //           alignItems: "center",
  //           justifyContent: "center",
  //           position: "fixed",
  //           top: "0",
  //           left: "50%",
  //           transform: "translateX(-50%)",
  //           zIndex: "999", // add this property
  //           width: "46%",
  //           marginTop: "100px",
  //           marginRight: "170px",
  //         }}
  //       >
  //         <FaCheckCircle
  //           size={30}
  //           style={{ marginRight: "5px", color: "#FFFFFF" }}
  //         />
  //         <span style={{ fontSize: "1rem", marginLeft: "5px" }}>
  //           Please check your email to verify
  //         </span>
  //       </CAlert>
  //     );
  //     setUsername("");
  //     setEmail("");
  //   }

  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 10000);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/teams/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ teamName: username, email: email }),
    });
    const data = await response.json();
    let resMessage=data.message;
    //console.log(resMessage);
   
    
   // console.log(data);
    // you can handle the response data here, such as showing a success message to the user
    
    if (response.ok === false ) {
      if(resMessage.includes("E11000 duplicate key error collection: test.teams index: teamName")){
        setAlert(
          <CAlert
            className="my-alert"
            color="danger"
            variant="solid"
            style={{
              backgroundColor: "#F44336",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "fixed",
              top: "0",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "999", // add this property
              width: "40%",
              marginTop: "100px",
              marginRight: "150px",
            }}
          >
            <FaExclamationCircle
              size={30}
              style={{ marginRight: "5px", color: "#FFFFFF" }}
            />
            <span style={{ fontSize: "1rem", marginLeft: "5px" }}>
              This Team name has already been taken!
            </span>
          </CAlert>
        );
      }
      else if(resMessage.includes("E11000 duplicate key error collection: test.teams index: email")){
        setAlert(
          <CAlert
            className="my-alert"
            color="danger"
            variant="solid"
            style={{
              backgroundColor: "#F44336",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "fixed",
              top: "0",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "999", // add this property
              width: "40%",
              marginTop: "100px",
              marginRight: "150px",
            }}
          >
            <FaExclamationCircle
              size={30}
              style={{ marginRight: "5px", color: "#FFFFFF" }}
            />
            <span style={{ fontSize: "1rem", marginLeft: "5px" }}>
              This Email has already been Registered!
            </span>
          </CAlert>
        );
      }
      else{
        setAlert(
          <CAlert
            className="my-alert"
            color="danger"
            variant="solid"
            style={{
              backgroundColor: "#F44336",
              color: "#FFFFFF",
              border: "none",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "fixed",
              top: "0",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "999", // add this property
              width: "40%",
              marginTop: "100px",
              marginRight: "150px",
            }}
          >
            <FaExclamationCircle
              size={30}
              style={{ marginRight: "5px", color: "#FFFFFF" }}
            />
            <span style={{ fontSize: "1rem", marginLeft: "5px" }}>
              Registration failed
            </span>
          </CAlert>
        );


      }
     
    }
      
     
     
    
    

    
  else {
      setAlert(
        <CAlert
          className="my-alert"
          color="success"
          variant="solid"
          style={{
            backgroundColor: "#4CAF50",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "999", // add this property
            width: "46%",
            marginTop: "100px",
            marginRight: "170px",
          }}
        >
          <FaCheckCircle
            size={30}
            style={{ marginRight: "5px", color: "#FFFFFF" }}
          />
          <span style={{ fontSize: "1rem", marginLeft: "5px" }}>
            Please check your inbox/spam to verify your email
          </span>
        </CAlert>
      );
      setUsername("");
      setEmail("");
    }

    setTimeout(() => {
      setAlert(null);
    }, 10000);
  };


  return (
    <Fragment>
      <section className="container">
        <div className="img-container hide-sm">
          <svg
            id="signupform"
            viewBox="0 0 545 532"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="undraw_my_password_re_ydq7 1" clip-path="url(#clip0_1_67)">
              <path
                id="Vector"
                d="M347.609 119.047H318.611V366.272C318.611 370.151 317.847 373.992 316.363 377.576C314.879 381.16 312.703 384.416 309.96 387.158C307.217 389.901 303.961 392.077 300.377 393.561C296.794 395.046 292.953 395.81 289.074 395.81H67.3711V396.092C67.3711 399.971 68.1351 403.812 69.6194 407.396C71.1038 410.98 73.2795 414.236 76.0223 416.978C78.7651 419.721 82.0213 421.897 85.605 423.381C89.1886 424.866 93.0295 425.63 96.9084 425.63H347.609C351.488 425.63 355.329 424.866 358.913 423.381C362.496 421.897 365.753 419.721 368.495 416.978C371.238 414.236 373.414 410.98 374.898 407.396C376.383 403.812 377.147 399.971 377.147 396.092V148.584C377.147 140.75 374.035 133.237 368.495 127.698C362.956 122.159 355.443 119.047 347.609 119.047Z"
                fill="#F2F2F2"
              />
              <path
                id="Vector_2"
                d="M485.074 511.927C485.588 511.95 486.096 511.815 486.53 511.54C486.964 511.266 487.303 510.864 487.502 510.39C487.7 509.916 487.748 509.392 487.638 508.89C487.529 508.388 487.268 507.931 486.891 507.582L486.719 506.9C486.742 506.845 486.764 506.79 486.787 506.736C487.304 505.514 488.171 504.473 489.278 503.742C490.385 503.011 491.684 502.624 493.01 502.629C494.337 502.634 495.632 503.031 496.734 503.77C497.836 504.509 498.695 505.556 499.203 506.782C501.233 511.672 503.819 516.572 504.455 521.743C504.736 524.028 504.617 526.345 504.106 528.591C508.875 518.187 511.352 506.879 511.367 495.434C511.369 492.562 511.209 489.693 510.89 486.839C510.626 484.499 510.259 482.176 509.791 479.869C507.235 467.354 501.746 455.625 493.776 445.643C489.919 443.538 486.799 440.302 484.838 436.369C484.128 434.956 483.625 433.447 483.347 431.89C483.782 431.947 484.988 425.32 484.66 424.913C485.266 423.993 486.352 423.535 487.014 422.637C490.308 418.172 494.846 418.952 497.215 425.02C502.276 427.574 502.325 431.81 499.219 435.884C497.244 438.476 496.972 441.983 495.239 444.758C495.417 444.987 495.603 445.208 495.781 445.436C499.041 449.628 501.882 454.129 504.264 458.876C503.685 453.558 504.376 448.18 506.281 443.182C508.212 438.524 511.831 434.601 515.018 430.575C515.861 429.493 517.006 428.685 518.307 428.254C519.609 427.823 521.009 427.787 522.331 428.152C523.653 428.516 524.838 429.264 525.735 430.302C526.631 431.339 527.201 432.619 527.37 433.98C527.377 434.039 527.383 434.099 527.389 434.158C526.916 434.425 526.452 434.709 525.999 435.008C525.43 435.389 524.988 435.933 524.733 436.568C524.478 437.204 524.42 437.902 524.569 438.571C524.717 439.239 525.063 439.848 525.563 440.316C526.063 440.784 526.693 441.091 527.37 441.195L527.439 441.206C527.27 442.912 526.972 444.603 526.547 446.264C530.636 462.074 521.809 467.833 509.206 468.092C508.928 468.234 508.657 468.377 508.378 468.513C510.772 475.295 512.273 482.359 512.844 489.528C513.168 493.757 513.148 498.006 512.787 502.233L512.808 502.083C513.722 497.383 516.229 493.143 519.906 490.077C525.368 485.59 533.085 483.938 538.978 480.331C539.604 479.929 540.332 479.715 541.077 479.713C541.821 479.711 542.55 479.922 543.178 480.321C543.807 480.72 544.308 481.29 544.622 481.965C544.937 482.639 545.052 483.39 544.954 484.127L544.93 484.285C544.052 484.643 543.197 485.055 542.369 485.519C541.896 485.786 541.433 486.069 540.979 486.369C540.41 486.75 539.968 487.293 539.713 487.929C539.458 488.565 539.401 489.263 539.549 489.931C539.697 490.6 540.044 491.209 540.544 491.677C541.043 492.145 541.673 492.452 542.35 492.556L542.419 492.567C542.469 492.574 542.512 492.581 542.562 492.588C541.061 496.172 538.954 499.471 536.335 502.34C533.778 516.142 522.798 517.451 511.054 513.432H511.046C509.758 519.032 507.891 524.483 505.475 529.696H485.573C485.502 529.475 485.437 529.247 485.373 529.026C487.215 529.142 489.065 529.031 490.88 528.698C489.404 526.886 487.927 525.06 486.45 523.248C486.417 523.214 486.386 523.178 486.358 523.141C485.609 522.213 484.852 521.293 484.103 520.366L484.103 520.365C484.063 517.522 484.39 514.686 485.074 511.927Z"
                fill="#F2F2F2"
              />
              <path
                id="Vector_3"
                d="M265.867 85.4171C266.593 86.518 267.55 87.4479 268.672 88.1425C269.793 88.8371 271.052 89.2799 272.361 89.4401C273.67 89.6004 274.999 89.4743 276.255 89.0707C277.51 88.667 278.664 87.9954 279.634 87.1022L321.012 105.77L328.99 95.5948L279.682 73.7817C278.058 72.2596 275.931 71.3864 273.705 71.3277C271.479 71.2689 269.309 72.0286 267.606 73.4628C265.903 74.897 264.786 76.9061 264.465 79.1094C264.144 81.3126 264.643 83.5569 265.867 85.4171Z"
                fill="#A0616A"
              />
              <path
                id="Vector_4"
                d="M443.443 97.0577L447.547 120.313C447.738 121.398 447.701 122.511 447.437 123.581C447.173 124.65 446.688 125.653 446.013 126.524C445.339 127.395 444.49 128.116 443.52 128.639C442.551 129.163 441.483 129.478 440.385 129.564L370.651 135.048L288.683 98.3631L298.473 79.7784L369.629 102.311L443.443 97.0577Z"
                fill="#E05BF4"
              />
              <path
                id="Vector_5"
                d="M280.238 80.3912H29.5373C13.2243 80.3912 0 93.6155 0 109.929V357.437C0 373.75 13.2243 386.974 29.5373 386.974H280.238C296.551 386.974 309.776 373.75 309.776 357.437V109.929C309.776 93.6155 296.551 80.3912 280.238 80.3912Z"
                fill="#F2F2F2"
              />
              <path
                id="Vector_6"
                d="M29.5375 86.4654C26.4563 86.4654 23.4053 87.0723 20.5586 88.2514C17.712 89.4305 15.1255 91.1588 12.9467 93.3376C10.768 95.5163 9.0397 98.1028 7.86058 100.949C6.68145 103.796 6.07458 106.847 6.07458 109.928V357.437C6.07458 363.66 8.54656 369.628 12.9467 374.028C17.3469 378.428 23.3148 380.9 29.5375 380.9H189.541C204.533 380.9 219.378 377.947 233.228 372.21C247.079 366.473 259.664 358.064 270.264 347.463C280.865 336.862 289.274 324.278 295.011 310.427C300.748 296.576 303.701 281.732 303.701 266.74V109.928C303.701 106.847 303.094 103.796 301.915 100.949C300.736 98.1028 299.008 95.5163 296.829 93.3376C294.65 91.1588 292.064 89.4305 289.217 88.2514C286.37 87.0723 283.319 86.4654 280.238 86.4654H29.5375Z"
                fill="white"
              />
              <path
                id="Vector_7"
                d="M224.97 161.58H84.2572C82.966 161.58 81.7277 161.067 80.8147 160.154C79.9017 159.241 79.3888 158.003 79.3888 156.712C79.3888 155.42 79.9017 154.182 80.8147 153.269C81.7277 152.356 82.966 151.843 84.2572 151.843H224.97C226.262 151.843 227.5 152.356 228.413 153.269C229.326 154.182 229.839 155.42 229.839 156.712C229.839 158.003 229.326 159.241 228.413 160.154C227.5 161.067 226.262 161.58 224.97 161.58Z"
                fill="#F2F2F2"
              />
              <path
                id="Vector_8"
                d="M224.97 265.398H84.2572C82.966 265.398 81.7277 264.885 80.8147 263.972C79.9017 263.059 79.3888 261.821 79.3888 260.529C79.3888 259.238 79.9017 258 80.8147 257.087C81.7277 256.174 82.966 255.661 84.2572 255.661H224.97C226.262 255.661 227.5 256.174 228.413 257.087C229.326 258 229.839 259.238 229.839 260.529C229.839 261.821 229.326 263.059 228.413 263.972C227.5 264.885 226.262 265.398 224.97 265.398Z"
                fill="#F2F2F2"
              />
              <path
                id="Vector_9"
                d="M282.111 213.523H27.1166C25.8254 213.523 24.5871 213.01 23.6741 212.097C22.7611 211.184 22.2482 209.946 22.2482 208.655C22.2482 207.363 22.7611 206.125 23.6741 205.212C24.5871 204.299 25.8254 203.786 27.1166 203.786H282.111C283.402 203.786 284.64 204.299 285.553 205.212C286.466 206.125 286.979 207.363 286.979 208.655C286.979 209.946 286.466 211.184 285.553 212.097C284.64 213.01 283.402 213.523 282.111 213.523Z"
                fill="#F2F2F2"
              />
              <path
                id="Vector_10"
                d="M434.633 199.559L409.23 253.676L506.948 243.779L486.55 191.828L434.633 199.559Z"
                fill="#A0616A"
              />
              <path
                id="Vector_11"
                d="M457.351 510.606L448.086 510.528L443.985 473.959L457.658 474.075L457.351 510.606Z"
                fill="#A0616A"
              />
              <path
                id="Vector_12"
                d="M427.675 525.339C427.666 526.437 428.094 527.494 428.864 528.277C429.634 529.061 430.683 529.506 431.781 529.517L450.202 529.671L453.427 523.134L454.611 529.704L461.562 529.767L459.806 506.335L457.388 506.174L447.525 505.494L444.343 505.281L444.287 511.911L429.49 521.947C428.935 522.324 428.48 522.829 428.164 523.419C427.848 524.01 427.68 524.669 427.675 525.339Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_13"
                d="M354.82 510.648L345.987 507.851L352.811 471.691L365.848 475.819L354.82 510.648Z"
                fill="#A0616A"
              />
              <path
                id="Vector_14"
                d="M322.125 516.011C321.794 517.058 321.893 518.194 322.399 519.169C322.904 520.144 323.776 520.879 324.823 521.212L342.385 526.771L347.388 521.47L346.59 528.098L353.215 530.201L358.422 507.287L356.158 506.422L346.93 502.874L343.951 501.736L341.95 508.057L324.856 513.303C324.216 513.499 323.633 513.849 323.157 514.32C322.681 514.792 322.327 515.372 322.125 516.011Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_15"
                d="M502.498 228.561L413.649 244.841C413.649 244.841 399.398 255.501 403.21 259.319C407.022 263.136 407.614 262.545 405.109 265.05C402.604 267.554 397.189 270.902 397.136 273.094C397.082 275.285 357.322 373.581 357.322 373.581C357.322 373.581 361.74 371.372 358.427 374.685C355.113 377.999 355.113 380.736 355.113 380.736L339.651 485.13L364.762 486.608L389.351 391.435L444.197 302.522C444.197 302.522 449.639 381.809 449.867 387.083C450.096 392.356 453.409 385.73 450.095 392.356C446.782 398.983 444.573 394.565 446.782 398.983C448.991 403.401 438.825 493.341 438.825 493.341H461.745L510.904 306.92C510.904 306.92 528.394 253.625 502.498 228.561Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_16"
                d="M476.324 79.4476L440.734 75.7496L431.513 87.7209L420.771 93.4422C416.225 95.8634 412.472 99.5427 409.962 104.04C407.453 108.538 406.291 113.663 406.617 118.803L419.171 191.828C419.171 191.828 408.567 215.705 415.858 221.648C423.148 227.59 410.221 242.309 425.798 234.901C441.374 227.493 508.631 236.005 508.631 236.005L494.273 195.141L504.999 154.986L506.179 121.317C506.4 115.025 504.533 108.837 500.869 103.718C497.205 98.5981 491.951 94.8345 485.924 93.0134L484.425 92.5602L476.324 79.4476Z"
                fill="#E05BF4"
              />
              <path
                id="Vector_17"
                d="M525.322 52.1631C525.555 62.1947 521.806 71.9083 516.42 80.4401C514.82 75.4594 511.943 70.9262 508.943 66.6049C510.456 75.9531 508.845 85.5393 504.36 93.8797C504.202 93.9928 504.038 94.0978 503.869 94.1944C499.479 96.8351 493.913 97.9047 489.164 95.9974C498.977 85.4205 500.225 67.8961 491.999 56.0324C489.67 52.6661 486.658 49.6888 485.215 45.8578C482.937 39.7452 485.127 33.0151 486.508 26.6422C487.8 20.7108 488.026 13.6525 484.046 9.3056C484.471 8.69813 485.05 8.21458 485.724 7.9045C486.397 7.59443 487.141 7.46898 487.879 7.541C490.332 7.88756 492.118 10.0201 493.256 12.2165C494.393 14.4128 495.143 16.847 496.728 18.7441C499.664 22.2949 504.663 23.1344 508.876 25.0057C519.078 29.5501 525.077 41.0006 525.322 52.1631Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_18"
                d="M262.472 529.756C262.472 529.928 262.505 530.099 262.571 530.259C262.637 530.419 262.734 530.564 262.856 530.686C262.978 530.808 263.123 530.905 263.283 530.971C263.442 531.037 263.614 531.07 263.786 531.07H543.531C543.88 531.07 544.214 530.931 544.46 530.685C544.707 530.438 544.845 530.104 544.845 529.756C544.845 529.407 544.707 529.073 544.46 528.826C544.214 528.58 543.88 528.441 543.531 528.441H263.786C263.614 528.441 263.442 528.474 263.283 528.54C263.123 528.606 262.978 528.703 262.856 528.825C262.734 528.947 262.637 529.092 262.571 529.252C262.505 529.412 262.472 529.583 262.472 529.756Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_19"
                d="M527.525 284.668C533.014 284.668 537.465 280.218 537.465 274.728C537.465 269.238 533.014 264.788 527.525 264.788C522.035 264.788 517.585 269.238 517.585 274.728C517.585 280.218 522.035 284.668 527.525 284.668Z"
                fill="#E05BF4"
              />
              <path
                id="Vector_20"
                d="M439.443 46.4273C440.026 44.3868 436.007 56.8603 437.947 57.0855C446.778 58.0987 458.902 63.3733 465.053 65.834C465.33 65.8018 465.608 65.7696 465.876 65.7294C466.536 65.657 467.18 65.5525 467.815 65.4319C482.139 62.7219 487.647 40.7199 487.647 40.5189C487.647 39.5297 485.273 12.3633 481.533 11.9613C480.551 11.8547 479.563 11.801 478.575 11.8004H469.296C467.375 11.3866 465.429 11.1045 463.47 10.9561H463.454C444.772 9.53269 430.041 20.9195 431.418 34.7752C431.426 34.7912 431.443 34.8073 431.451 34.8234C431.85 35.4185 432.2 35.9814 432.51 36.5202C432.812 37.0268 433.064 37.5093 433.284 37.9677C434.987 41.506 430.61 45.9583 433.512 46.7893C437.372 47.8946 423.36 84.2228 438.639 84.2228C431.207 86.3358 437.835 52.0565 439.443 46.4273Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_21"
                d="M456.12 67.7432C468.255 67.7432 478.092 57.9063 478.092 45.7719C478.092 33.6375 468.255 23.8006 456.12 23.8006C443.986 23.8006 434.149 33.6375 434.149 45.7719C434.149 57.9063 443.986 67.7432 456.12 67.7432Z"
                fill="#A0616A"
              />
              <path
                id="Vector_22"
                d="M431.418 35.9733C431.785 36.1663 432.143 36.3432 432.51 36.5201C432.893 36.7051 433.276 36.8901 433.659 37.0589C441.016 40.3962 447.004 40.7661 450.638 35.9733C450.735 33.4514 451.302 30.9698 452.308 28.6554C452.131 31.2418 452.812 33.8144 454.247 35.9733H461.564C469.1 40.9751 472.97 41.4978 467.739 57.9187C466.281 62.4944 460.482 89.12 462.764 93.0685C463.423 92.9961 470.444 63.8327 471.08 63.7122C485.403 61.0022 494.504 37.4047 493.339 36.0698C493.344 32.2737 492.472 28.5278 490.788 25.1252C488.659 20.8144 485.34 17.2034 481.223 14.7194C478.77 13.5296 476.211 12.5686 473.581 11.8486C473.516 11.8325 473.459 11.8164 473.394 11.8003C472.587 11.5832 471.764 11.3822 470.941 11.2133C469.241 10.8543 467.522 10.5939 465.792 10.4333C465.67 10.4252 465.548 10.4172 465.434 10.4172C464.743 10.4188 464.065 10.6048 463.47 10.956C463.462 10.956 463.462 10.964 463.454 10.964C463.029 11.2124 462.658 11.5432 462.362 11.937C461.842 12.5996 461.56 13.4185 461.564 14.261H453.416C453.115 14.261 452.813 14.2691 452.512 14.2851C447.074 14.471 441.902 16.6793 438.006 20.4779C434.111 24.2765 431.773 29.392 431.451 34.8234C431.426 35.2093 431.418 35.5873 431.418 35.9733Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_23"
                d="M479.457 28.9497C487.452 28.9497 493.932 22.4691 493.932 14.4748C493.932 6.4806 487.452 0 479.457 0C471.463 0 464.983 6.4806 464.983 14.4748C464.983 22.4691 471.463 28.9497 479.457 28.9497Z"
                fill="#2F2E41"
              />
              <path
                id="Vector_24"
                d="M527.636 278.827C528.343 277.713 528.799 276.459 528.973 275.151C529.147 273.843 529.035 272.514 528.645 271.254C528.254 269.994 527.595 268.834 526.712 267.854C525.829 266.874 524.744 266.097 523.531 265.577L523.603 220.183L511.052 217.077L511.361 270.992C510.639 273.098 510.714 275.396 511.572 277.451C512.431 279.505 514.013 281.173 516.019 282.139C518.025 283.104 520.316 283.3 522.457 282.69C524.598 282.08 526.441 280.705 527.636 278.827Z"
                fill="#A0616A"
              />
              <path
                id="Vector_25"
                d="M465.483 112.076L485.014 98.8021C485.925 98.1829 486.956 97.761 488.04 97.5636C489.124 97.3662 490.237 97.3976 491.308 97.6558C492.379 97.914 493.384 98.3933 494.259 99.063C495.133 99.7326 495.859 100.578 496.388 101.544L529.967 162.906L530.095 252.708L509.13 251.394L500.524 177.254L465.483 112.076Z"
                fill="#E05BF4"
              />
              <path
                id="Vector_26"
                d="M315.479 315.736H106.74C102.199 315.736 97.8451 317.539 94.6347 320.75C91.4243 323.96 89.6207 328.314 89.6207 332.855C89.6207 337.395 91.4243 341.749 94.6347 344.959C97.8451 348.17 102.199 349.973 106.74 349.973H315.479C320.02 349.973 324.374 348.17 327.584 344.959C330.795 341.749 332.598 337.395 332.598 332.855C332.598 328.314 330.795 323.96 327.584 320.75C324.374 317.539 320.02 315.736 315.479 315.736Z"
                fill="white"
              />
              <path
                id="Vector_27"
                d="M315.479 351.078H106.74C101.906 351.078 97.2713 349.158 93.8537 345.74C90.4362 342.323 88.5162 337.688 88.5162 332.854C88.5162 328.021 90.4362 323.386 93.8537 319.969C97.2713 316.551 101.906 314.631 106.74 314.631H315.479C320.312 314.631 324.948 316.551 328.365 319.969C331.783 323.386 333.703 328.021 333.703 332.854C333.703 337.688 331.783 342.323 328.365 345.74C324.948 349.158 320.312 351.078 315.479 351.078ZM106.74 316.84C102.492 316.84 98.4189 318.527 95.4156 321.531C92.4123 324.534 90.7251 328.607 90.7251 332.854C90.7251 337.102 92.4123 341.175 95.4156 344.178C98.4189 347.182 102.492 348.869 106.74 348.869H315.479C319.727 348.869 323.8 347.182 326.803 344.178C329.807 341.175 331.494 337.102 331.494 332.854C331.494 328.607 329.807 324.534 326.803 321.531C323.8 318.527 319.727 316.84 315.479 316.84H106.74Z"
                fill="#E05BF4"
              />
              <path
                id="Vector_28"
                d="M327.788 390.443H235.67C234.379 390.443 233.141 389.93 232.228 389.017C231.315 388.104 230.802 386.866 230.802 385.575C230.802 384.284 231.315 383.045 232.228 382.132C233.141 381.219 234.379 380.707 235.67 380.707H327.788C329.079 380.707 330.317 381.219 331.23 382.132C332.143 383.045 332.656 384.284 332.656 385.575C332.656 386.866 332.143 388.104 331.23 389.017C330.317 389.93 329.079 390.443 327.788 390.443Z"
                fill="#E05BF4"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_67">
                <rect width="545" height="531.07" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="signin">
          <h1 className="text-gradient">Register</h1>
          <h4>Let's Get Started</h4>
          <form action="" className="form" onSubmit={handleSubmit}>
            <input
              className="fa"
              type="text"
              placeholder="&#xf007; Team Name"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="fa"
              type="email"
              placeholder="&#xf003; Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-gray">* Team leader's email</p>
            <div className="card-footer mt-1">
              <button type="submit" className="btn btn-gradient">
                Register
              </button>
              <p>
                Already Registered ? <Link to="/login">Sign In</Link>
              </p>
            </div>
          </form>
          {alert}
        </div>
      </section>
    </Fragment>
  );
}
export default Register;
