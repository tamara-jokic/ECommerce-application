import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Button, Form, FormGroup, Label, Jumbotron, Input } from "reactstrap";

import axios from "axios";

export default class Signup extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  constructor(props) {
    super(props);

    this.state = {
      email: "",

      name: "",

      password: "",

      errors: {},
    };

    this.handleChangeName = this.handleChangeName.bind(this);

    this.handleChangeEmail = this.handleChangeEmail.bind(this);

    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
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
    console.log("Tu");

    var data = {
      user: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    var headers = {
      "Content-Type": "application/json",
    };

    axios
      .post("http://localhost:5000/api/createUser", data, { headers })
      .then(function (response) {
        console.log("Tu");
        console.log("Res", response);

        if (response.data) {
          localStorage.setItem(
            "u_code",
            encodeURIComponent(JSON.stringify(response.data.data))
          );

          localStorage.setItem("is_done", true);

          axios
            .post(
              "http://localhost:5000/api/login",
              { email: data.email, password: data.password },
              { headers }
            )
            .then(function (response) {
              if (response.data.token) {
                localStorage.setItem(
                  "u_code",
                  encodeURIComponent(JSON.stringify(response.data.token))
                );
                localStorage.setItem("is_done", true);
                window.location.href = "/";
              } else {
                alert(response.data.message);
              }
            });
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

    if (!this.state.name) {
      formIsValid = false;

      errors["username"] = "*Molimo Vas unesite ime";
    }

    if (typeof this.state.name !== "undefined") {
      if (!this.state.name.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;

        errors["username"] = "*Molimo Vas unesite samo slova";
      }
    }

    if (!this.state.email) {
      formIsValid = false;

      errors["email"] = "*Molimo Vas unesite Vaš e-mail";
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
              <h2 className="text-center">Registrujte se </h2>

              <Form
                method="post"
                name="userRegistrationForm"
                onSubmit={this.submituserRegistrationForm}
              >
                <FormGroup>
                  <Label for="exampleName">Ime</Label>

                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChangeName}
                    placeholder="Unesite ime"
                  />

                  <div className="errorMsg">{this.state.errors.name}</div>
                </FormGroup>

                <FormGroup>
                  <Label for="exampleEmail">Email</Label>

                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    value={this.state.email}
                    onChange={this.handleChangeEmail}
                    placeholder="Unesite email"
                  />

                  <div className="errorMsg">{this.state.errors.emailid}</div>
                </FormGroup>

                <FormGroup>
                  <Label for="examplePassword">Lozinka</Label>

                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                    placeholder="Unesite lozinku"
                  />

                  <div className="errorMsg">{this.state.errors.password}</div>
                </FormGroup>

                <div className="d-flex justify-content-center mt-3 login_container">
                  <Button type="submit" className="btn btn-login">
                    Registracija
                  </Button>
                </div>

                <div className="mt-4">
                  <div className="d-flex justify-content-center links">
                    Imate nalog?{" "}
                    <Link href="/login" to="/login" className="linka">
                      Prijavite se
                    </Link>
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
