import React, { useEffect } from 'react';
import { ACCESS_TOKEN } from '../../constants';
import { useNavigate, useLocation } from 'react-router-dom';

const OAuth2RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  useEffect(() => {
    const token = getUrlParameter('token');
    const error = getUrlParameter('error');

    if (token) {
      localStorage.setItem(ACCESS_TOKEN, token);
      navigate('/filter', { state: { from: location } });
    } else {
      navigate('/login', { state: { from: location, error: error } });
    }
  }, [location, navigate]);

  return null; // Return null since there's no UI for this component
};

export default OAuth2RedirectHandler;
