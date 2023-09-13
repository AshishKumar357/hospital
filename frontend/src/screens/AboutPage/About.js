import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
import ErrorMessage from "../../Components/ErrorMessage";
import Loading from "../../Components/Loading";

const About = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [picMessage, setPicMessage] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cnfrmPassword, setCnfrmPassword] = useState(false);
  const navFun = () => {
    navigate("/mynotes");
  };

  const SaveHandler = async (e) => {
    e.preventDefault();
    console.log(name, email, password, cnfrmPassword);

    if (password !== cnfrmPassword) {
      setLoading(true);
      setTimeout(() => {
        setMessage("Passwords do not match");
        setLoading(false);
      }, 500);

      setTimeout(() => {
        setMessage(null);
      }, 2500);
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);
        const { data } = await axios.post(
          "/api/users",
          { name, email, password, pic },
          config
        );
        localStorage.setItem("userInfo", JSON.stringify(data));

        navFun();
      } catch (error) {
        setError(error.response.data);
      } finally {
        setLoading(false);
      }
    }
  };

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please Select an Image");
    } else {
      setPicMessage(null);
    }
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/JPEG" ||
      pics.type === "image/PNG"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "noteApp");
      data.append("cloud_name", "dbuwj7uyu");
      fetch("https://api.cloudinary.com/v1_1/dbuwj7uyu/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-3 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="px-5 py-3 w-100 d-flex flex-column">
              <h2 className="fw-bold mb-0 text-center heading">SignUp</h2>
              {message && (
                <ErrorMessage variant="danger">{message}</ErrorMessage>
              )}
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              {loading && <Loading />}
              <MDBInput
                wrapperClass="mb-4 w-100"
                placeholder="Full Name"
                id="formControlLgFullName"
                type="text"
                size="lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <MDBInput
                wrapperClass="mb-4 w-100"
                placeholder="Email address"
                id="formControlLgEmail"
                type="email"
                size="lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                placeholder="Password"
                id="formControlLgPwd"
                type="password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4 w-100"
                placeholder="Confirm Password"
                id="formControlLgCpwd"
                type="password"
                size="lg"
                value={cnfrmPassword}
                onChange={(e) => setCnfrmPassword(e.target.value)}
              />

              {picMessage && (
                <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
              )}
              <div className="uploadBtn">
                <label className="p-2 pictureUpld">
                  Upload Profile Picture
                </label>
                <input
                  type="file"
                  // style={{ width: "95px" }}
                  className="moveLeft py-2"
                  title=" "
                  onChange={(e) => postDetails(e.target.files[0])}
                />
              </div>

              <MDBBtn size="lg" onClick={SaveHandler}>
                Submit
              </MDBBtn>

              <hr className="my-4" />

              <div style={{ display: "inline-flex" }}>
                <a href="/login" className="hyperlink">
                  Already Have an account?
                </a>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default About;
