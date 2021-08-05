/*
 * @Author: Jinqi Li
 * @Date: 2021-08-05 10:00:05
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-08-05 13:51:50
 * @FilePath: \educativeProjects\react-firebase-authentication\src\components\Session\withAuthentication.js
 */
import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                authUser: null
            };
        }

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    authUser
                        ? this.setState({ authUser })
                        : this.setState({ authUser: null });
                }
            )
        }
    
        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            )
        }
    }

    return withFirebase(WithAuthentication);
}

export default withAuthentication;