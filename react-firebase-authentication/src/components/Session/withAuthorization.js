/*
 * @Author: Jinqi Li
 * @Date: 2021-08-05 13:52:07
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-08-05 14:53:02
 * @FilePath: \educativeProjects\react-firebase-authentication\src\components\Session\withAuthorization.js
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            this.listner = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if(!condition(authUser)) {
                        this.props.history.push(ROUTES.SIGN_IN);
                    }
                }
            )
        }

        componentWillUnmount() {
            this.listner();
        }

        render() {
            return (
                <AuthUserContext.Consumer>
                    {authUser => 
                        condition(authUser) ? <Component {...this.props} /> : null
                    }
                </AuthUserContext.Consumer>
            );
        }
    }

    return compose(
        withRouter,
        withFirebase
    )(WithAuthorization);
}

export default withAuthorization;