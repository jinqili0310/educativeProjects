/*
 * @Author: Jinqi Li
 * @Date: 2021-07-30 13:31:16
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-07-30 15:37:29
 * @FilePath: \react-firebase-authentication\src\components\Navigation\index.js
 */
import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <div>
        <ul>
            <li>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
            <li>
                <Link to={ROUTES.LANDING}>Landing</Link>
            </li>
            <li>
                <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            <li>
                <Link to={ROUTES.ADMIN}>Admin</Link>
            </li>
        </ul>
    </div>
);

export default Navigation;