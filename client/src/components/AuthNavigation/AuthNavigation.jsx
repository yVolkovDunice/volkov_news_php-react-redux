import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { toggleModal, changeModalMode, logoutAction } from '../../redux/actions';

function AuthNavigation() {
  const { userIsLogged } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const openModal = ({ target: { value } }) => {
    dispatch(changeModalMode(value));
    dispatch(toggleModal(true));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logoutAction());
  };

  return (
    <Stack spacing={2} direction="row" sx={{ m: 1, minWidth: 80 }}>
      {userIsLogged ? (
        <>
          <Button variant="outlined" onClick={handleLogout}>Logout</Button>
          <Button variant="outlined">Profile</Button>
        </>
      ) : (
        <>
          <Button variant="outlined" value="Login" onClick={openModal}>Login</Button>
          <Button variant="contained" value="Sing up" onClick={openModal}>Sing up</Button>
        </>
      )}
    </Stack>
  );
}

export default AuthNavigation;
