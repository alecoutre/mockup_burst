import React, { Fragment } from 'react';
import Keycloak from 'keycloak-js';


var authenticate = () => {
    let initOptions = {
        url: 'http://127.0.0.1:8080/auth',
        realm: 'burst_license',
        clientId: 'web-client',
        onLoad: 'login-required',
        promiseType: 'native',
    }

    var keycloak = window.keycloak = Keycloak(initOptions);
    var userPofile = window.userPofile = {
          given_name: '',
          email: ''
        }

    keycloak.init({
        onLoad: initOptions.onLoad,
    }).success((auth) => {
        console.log("Authentification...");
        if (!auth) {

        } else {
            window.appEmitter.emit("auth")
            console.info("Authenticated");
        }

        localStorage.setItem("react-token", keycloak.token);
        localStorage.setItem("react-refresh-token", keycloak.refreshToken);

        setTimeout(() => {
            keycloak.updateToken(70).success((refreshed) => {
                if (refreshed) {
                    console.debug('Token refreshed' + refreshed);
                } else {
                    console.warn('Token not refreshed, valid for '
                        + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
                }
            }).error(() => {
                console.error('Failed to refresh token');
            });
        }, 60000)
    })
}

const SecuredLayout = props => {
  const { children } = props;
  authenticate()
  return <Fragment>{children}</Fragment>;
};

export default SecuredLayout;
