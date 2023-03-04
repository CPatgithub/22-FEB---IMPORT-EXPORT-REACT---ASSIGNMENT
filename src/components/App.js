import React, { Component, useState } from "react";

import SubmitButton from './SubmitButton.js';
import SubHeading from './SubmitButton.js';
import inputQuerry from './InputQuery.js';
import Heading from './Heading.js';

import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      < Heading/>
      < inputQuerry/>
      < SubHeading/>
      < SubmitButton/>
    </div>
  )
}

export default App;

