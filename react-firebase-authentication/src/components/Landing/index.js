/*
 * @Author: Jinqi Li
 * @Date: 2021-07-30 13:30:52
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-08-02 14:10:21
 * @FilePath: \educativeProjects\react-firebase-authentication\src\components\Landing\index.js
 */
import React from 'react';

import  { FirebaseContext } from '../Firebase';

const Landing = () => (
  // <div>
  //   <h1>Landing</h1>
  // </div>
  <FirebaseContext.Consumer>
    {firebase => {
      return <div>I've access to Firebase and render something.</div>;
    }}
  </FirebaseContext.Consumer>
);

export default Landing;
