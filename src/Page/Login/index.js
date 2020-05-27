import React, { Component } from "react";

import { Redirect, Link, router } from "react-router-dom";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import axios from "axios";

export default class Login extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
      loggedIn: false,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);

    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();

    // if (this.validateForm()) {

    var data = {
      email: this.state.email,
      password: this.state.password,
    };

    var headers = {
      "Content-Type": "application/json",
    };

    console.log(data);

    axios
      .post("http://localhost:5000/api/login", data, { headers })
      .then(function (response) {
        console.log("Res", response);

        if (response.data.token) {
          localStorage.setItem(
            "u_code",
            encodeURIComponent(JSON.stringify(response.data.token))
          );

          localStorage.setItem("is_done", true);

          window.location.href = "/";

          console.log("Login successfull");
        } else {
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    // }
  }

  validateForm() {
    let errors = {};

    let formIsValid = true;

    if (!this.state.email) {
      formIsValid = false;

      errors["email"] = "Molimo Vas unesite Vaš e-mail";
    }

    if (typeof this.state.email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(this.state.email)) {
        formIsValid = false;

        errors["email"] = "*Molimo Vas unesite validan e-mail";
      }
    }

    if (!this.state.password) {
      formIsValid = false;

      errors["password"] = "*Molimo Vas unesite Vašu lozinku";
    }

    if (typeof this.state.password !== "undefined") {
      if (
        !this.state.password.match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;

        errors["password"] = "*Molimo Vas unesite sigurniju i jaču lozinku";
      }
    }

    this.setState({
      errors: errors,
    });

    return formIsValid;
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mx-auto login-sec">
              <h2 className="text-center">Prijavite se </h2>

              <Form
                method="post"
                name="userRegistrationForm"
                onSubmit={this.submituserRegistrationForm}
              >
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>

                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    value={this.state.email}
                    onChange={this.handleChangeEmail}
                    placeholder="Email "
                  />

                  <div className="errorMsg">{this.state.errors.email}</div>
                </FormGroup>

                <FormGroup>
                  <Label for="examplePassword">Lozinka</Label>

                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                    placeholder="Lozinka"
                  />

                  <div className="errorMsg">{this.state.errors.password}</div>
                </FormGroup>

                <div className="d-flex justify-content-center mt-3 login_container">
                  <Button type="submit" className="btn btn-login">
                    Prijava
                  </Button>
                </div>

                <div className="mt-4">
                  <div className="d-flex justify-content-center links">
                    Nemate nalog?{" "}
                    <Link href="/signup" to="/signup" className="linka">
                      Registrujte se
                    </Link>
                  </div>

                  <div className="d-flex justify-content-center links">
                    {/* <a className="linka">Forgot your password?</a> */}
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
