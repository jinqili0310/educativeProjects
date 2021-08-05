/*
 * @Author: Jinqi Li
 * @Date: 2021-07-30 13:29:31
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-08-05 14:50:22
 * @FilePath: \educativeProjects\react-firebase-authentication\src\components\Account\index.js
 */
import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
