/*
 * @Author: Jinqi Li
 * @Date: 2021-07-30 13:32:32
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-08-04 15:58:03
 * @FilePath: \educativeProjects\react-firebase-authentication\src\components\SignOut\index.js
 */
import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
