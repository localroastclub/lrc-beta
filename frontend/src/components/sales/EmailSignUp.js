import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SignUpBtn = withStyles({
  root: {
    background: '#ffed60',
    '&:hover': {
      background: '#e0e0e0'
    },
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(90, 90, 27, 0.3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
    marginTop: '16px'
  }
})(Button);

const TextFieldStyled = withStyles({
  root: {
    border: '#e6b5da',
    background: '#FFFFFF',
    borderRadius: '5px',
    width: '30vh'
  }
})(TextField);

const EmailSignUp = () => {
  const [values, setValues] = React.useState({
    name: '',
    email: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log('what are values?', values);
  };

  // const handleSignUp = () => {
  //   console.log('hi');
  //   // redirect user to Sign up page, and pass the values entered into the sign up values
  //   // put them in local storage and
  // };

  return (
    <div className="top-email-form">
      <form noValidate autoComplete="off">
        <div>
          <TextFieldStyled
            required
            name="name"
            label="Name"
            margin="normal"
            variant="outlined"
            value={values.name}
            onChange={handleChange}
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
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <Link to={{ pathname: '/signup', state: values }}>
          <SignUpBtn> Sign Up </SignUpBtn>
        </Link>
      </form>
    </div>
  );
};

export default EmailSignUp;
