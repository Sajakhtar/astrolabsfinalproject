import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4 brandname">kari</h1>

                <p className="lead"> Intelligent investing made simple</p>
                <br />
                <Link
                  to="/register"
                  className="btn btn-lg btn-info mr-2 getstartedbtn"
                >
                  Get Started
                </Link>
                <Link to="/login" className="btn btn-lg btn-light loginbtn">
                  Login
                </Link>
                <hr />
                <br />
              </div>
            </div>
            {/* */}
            <div className="container marketing">
              <div className="row">
                <div className="col-sm-4 text-center">
                  <h4>Intelligent</h4>
                  <p>AI with a human touch</p>
                </div>
                <div className="col-sm-4 text-center">
                  <h4>Secure</h4>
                  <p>Industry leading encryption</p>
                </div>
                <div className="col-sm-4 text-center">
                  <h4>Transparent</h4>
                  <p>No hidden fees</p>
                </div>
              </div>
            </div>
            {/* */}
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
