import React, { Component } from "react";
import { fetchUsers } from "../../Actions/userAction";
import { connect } from "react-redux";
import UsersAdministration from "./UsersAdministration";
import ButtonRadius from "../../Components/ButtonRadius";
import Modal from "./Modal";
import Cancel from "../../images/cancel.svg";

class AdministrationU extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    // this.showModal = this.showModal.bind(this);
    // this.hideModal = this.hideModal.bind(this);
  }

  // showModal() {
  //   this.setState({ show: true });
  // }

  // hideModal() {
  //   this.setState({ show: false });
  // }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const all = this.props.allUsers;
    const { close } = this.props;
    return (
      <div className="products-container pr pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              {/* <Col md={{ size: 2, offset: 10 }}>
                <ButtonRadius
                  classes="blue"
                  text="Dodaj novi proizvod"
                  onclick={this.showModal}
                />
              </Col> */}
              {/* <Modal
                show={this.state.show}
                handleClose={this.hideModal}
              ></Modal> */}

              <div className="row">
                {all.map((users) => (
                  <UsersAdministration propsUsers={users} key={users.id} />
                ))}
              </div>
              <div className="cancel">
                <img src={Cancel} onClick={close} alt="PhotoX" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allUsers: state.usersPosts.user.reverse(),
});

export default connect(mapStateToProps, { fetchUsers })(AdministrationU);
