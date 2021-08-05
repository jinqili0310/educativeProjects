/*
 * @Author: Jinqi Li
 * @Date: 2021-07-30 13:30:37
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-08-05 14:38:28
 * @FilePath: \educativeProjects\react-firebase-authentication\src\components\Home\index.js
 */
import React from 'react';

import { withAuthorization } from '../Session';

const HomePage = () => (
  <div>
    <h1>Home</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
