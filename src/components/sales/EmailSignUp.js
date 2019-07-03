import React from 'react';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// we want to give this button the POST ability to sign up for email list and then
// redirect to sign up page with first name & email prefilled

const SignUpBtn = withStyles({
  root: {
    background: '#e6b5da',
    '&:hover': {
      background: 'linear-gradient(30deg, #e6b5da 40%, #f5f733 60%)'
      },
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
  },
})(Button);

const TextFieldStyled = withStyles({
  root: {
    border: '#e6b5da',
    background: '#FFFFFF',
    borderRadius: '5px',
    width: '30vh',
  },
})(TextField);


const EmailSignUp = () => {
  const [values, setValues] = React.useState({
    name: '',
    age: '',
    multiline: 'Controlled',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className="top-email-form">
      <form noValidate autoComplete="off">
        <div>
        <TextFieldStyled
          required
          label="Name"
          margin="normal"
          variant="outlined"
        />
        </div>
        <div>
        <TextFieldStyled
          required
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        </div>
        <SignUpBtn> Sign Up </SignUpBtn>
      </form>
    </div>
  );
}

export default EmailSignUp