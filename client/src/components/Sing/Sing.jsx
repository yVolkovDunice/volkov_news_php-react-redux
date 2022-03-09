import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';

import { toggleModal, modalMode, authLogout } from '../../redux/actions';

function Sing() {
  const { authorizedUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleClickOpen = ({ target: { value } }) => {
    dispatch(modalMode(value));
    dispatch(toggleModal(true));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(authLogout());
  };

  return (
    <Stack spacing={2} direction="row" sx={{ m: 1, minWidth: 80 }}>
      {authorizedUser ? (
        <>
          <Button variant="outlined" onClick={handleLogout}>Logout</Button>
          <Button variant="outlined">Profile</Button>
        </>
      ) : (
        <>
          <Button variant="outlined" value="Login" onClick={handleClickOpen}>Login</Button>
          <Button variant="contained" value="Sing up" onClick={handleClickOpen}>Sing up</Button>
        </>
      )}
    </Stack>
  );
}

export default Sing;
