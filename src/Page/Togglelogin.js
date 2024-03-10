import React, { Component } from "react";
import swal from "sweetalert";
import { Button, TextField, Link } from "@material-ui/core";
import { withRouter } from "./utils";
const axios = require("axios");
const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
import Toggle, {adminEmail,adminName,name,email} from './Toggle';

const navigate = useNavigate();
const navigateToToggle = () => {
    setLoading(true);

    // Simulate a 2-second loading delay
    setTimeout(() => {
      setLoading(false);
      navigate("/Toggle", { state: {  } });
    }, 10);
  };


class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        adminEmail:'',
        adminName:'',
        email: '',
        name: ''
      };
    }
  
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
    login = () => {
      const pwdu = bcrypt.hashSync(this.state.name, salt);
      const pwda = bcrypt.hashSync(this.state.adminName, salt);
  
      axios.post('http://localhost:3001', {
        email: this.state.email,
        name: pwdu,
        adminEmail: this.state.adminEmail,
        adminName: pwda
      }).then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user_id', res.data.id);
        // this.props.history.push('/dashboard');
        this.props.navigate("/dashboard");
      }).catch((err) => {
        if (err.response && err.response.data && err.response.data.errorMessage) {
          swal({
            text: err.response.data.errorMessage,
            icon: "error",
            type: "error"
          });
        }
      });
    

     return (
         <div>
         <Toggle/>
         </div> 
     );
    }
}
