import React from 'react';
import TextInput from '../common/TextInput';
import Button from './AuthFormButton';
import BigText from '../common/BigText';

const LoginForm = props => {
    const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
      } = props;

      return (
          <form onSubmit={handleSubmit}>
            <BigText>Login</BigText>
            <TextInput 
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            <TextInput 
                id="password"
                placeholder="Enter your password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
            />

            <Button type="submit" disabled={isSubmitting}>
                Submit
            </Button>

          </form>
      );
};

export default LoginForm;