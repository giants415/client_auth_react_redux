import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signup extends Component {

  render() {
    return (
      <form>
        <fieldset>
          <label>Email</label>

        </fieldset>
        <fieldset>
          <label>Password</label>

        </fieldset>
      </form>
    );
  }

}

export default reduxForm({ form: 'signup' })(Signup);
