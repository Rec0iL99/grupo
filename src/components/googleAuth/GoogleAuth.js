import React from 'react';
import GoogleLogin from 'react-google-login';
import { Icon } from '@chakra-ui/react';
import { IoLogoGoogle } from 'react-icons/io';
import './GoogleAuth.css';

const GoogleAuth = (props) => {
  const googleClientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  // Function that runs once GoogleLogin sends positive response
  const responseSuccess = (response) => {
    const authData = {
      access_token: response.tokenObj.id_token,
      issuer: 'google',
      signUpType: 'OAuth',
    };

    props.getAuthData(authData);
  };

  return (
    <div>
      <GoogleLogin
        clientId={googleClientID}
        onSuccess={responseSuccess}
        cookiePolicy={'single_host_origin'}
        render={(renderProps) => (
          <div
            className='google-custom-button'
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <Icon as={IoLogoGoogle} h={18} w={18} />
            &nbsp; &nbsp;
            {props.text}
          </div>
        )}
      />
    </div>
  );
};

export default GoogleAuth;
