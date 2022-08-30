import { useState } from 'react';

const useAlert = (options) => {
  const defaulOptions = {
    active: false,
    message: '',
    type: '',
    autoClose: true,
  };
  const [alert, setAlert] = useState({
    ...defaulOptions,
    ...options,
  });
  const toggleAlert = () => {
    setAlert(!alert.active);
  };

  return {
    alert,
    setAlert,
    toggleAlert,
  };
};

export default useAlert;
