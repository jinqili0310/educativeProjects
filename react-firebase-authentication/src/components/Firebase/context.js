/*
 * @Author: Jinqi Li
 * @Date: 2021-08-02 13:09:23
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-08-04 16:07:24
 * @FilePath: \educativeProjects\react-firebase-authentication\src\components\Firebase\context.js
 */
import React from 'react';

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
)

export default FirebaseContext;