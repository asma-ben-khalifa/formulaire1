import React, {Component} from 'react';
import './Formular.css'; 
import { Button ,Form ,FormGroup , Label , Container,Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';


function Formular(){
  return (
    <Form inline className="login-form ">
    <FormGroup className="mb-2 me-sm-2 mb-sm-0">
      <Label
        className="me-sm-2"
        for="exampleEmail"
      >
        Email
      </Label>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="something@idk.cool"
        type="email"
      />
    </FormGroup>
    <FormGroup className="mb-2 me-sm-2 mb-sm-0">
      <Label
        className="me-sm-2"
        for="examplePassword"
      >
        Password
      </Label>
      <Input
        id="examplePassword"
        name="password"
        placeholder="don't tell!"
        type="password"
      />
    </FormGroup>

    <Button className="btn-lg  btn-block" color="primary" outline>
      Submit
    </Button> 
      <div className="pt-3">
        or continue with your social account
      </div>
    <FacebookLoginButton className="mt-3 mb-3"></FacebookLoginButton>
      <div className="text-center">
          <a href="/sign-up">
            sign-up
          </a>
          <sapn className="p-2"> | </sapn>
          <a href="/forgot-password"> 
          Forgot password
          </a>
      </div>
  </Form>

  );
}

export default Formular;
