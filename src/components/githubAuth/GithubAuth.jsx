import React from 'react';
import LoginGithub from 'react-login-github';
import { Icon, useToast } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import './GithubAuth.scss';

const GithubAuth = ({ text, getAuthData }) => {
  const toast = useToast();
  const githubClientID = process.env.REACT_APP_GITHUB_CLIENT_ID;

  // Function that runs once GithubLogin sends positive response
  const onSuccess = (response) => {
    const authData = {
      accessCode: response.code,
      issuer: 'github',
      signupType: 'OAuth',
    };
    getAuthData(authData);
  };

  // Function that runs once GithubLogin sends negative response
  const onFailure = () => {
    toast({
      title: 'Github OAuth Error',
      description:
        'Something went wrong with your Github sign up. Please try again later.',
      status: 'error',
      position: 'top-right',
      duration: 4000,
      isClosable: false,
    });
  };

  return (
    <>
      <LoginGithub
        clientId={githubClientID}
        onSuccess={onSuccess}
        onFailure={onFailure}
      >
        <div className='github-custom-button'>
          <Icon as={AiFillGithub} h={18} w={18} />
          &nbsp; &nbsp;
          {text}
        </div>
      </LoginGithub>
    </>
  );
};

export default GithubAuth;
