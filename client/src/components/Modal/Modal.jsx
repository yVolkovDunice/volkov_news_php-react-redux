import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { Formik, Field, Form } from 'formik';

import { toggleModal, authRegister, authLogin } from '../../redux/actions';

import './styles.css';

function Modal() {
  const { modalOpen, modalModeState, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(toggleModal(false));
  };

  const handleChange = (values) => {
    if (modalModeState === 'Sing up') {
      dispatch(authRegister(values));
    } else if (modalModeState === 'Login') {
      dispatch(authLogin(values));
    }
  };

  return (
    <Dialog open={modalOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{modalModeState}</DialogTitle>
      <DialogContent sx={{ width: '75%' }}>
        {error}
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            url_avatar: 'someURL',
          }}
          onSubmit={handleChange}
        >
          {({
            values,
          }) => (
            <Form>
              <div className="form">
                {modalModeState === 'Sing up' && (
                <Field
                  id="name"
                  name="name"
                  placeholder="Name"
                />
                )}
                <Field
                  id="email"
                  name="email"
                  placeholder="email"
                  type="email"
                />
                <Field
                  id="password"
                  name="password"
                  placeholder="password"
                  type="password"
                />
                <Button
                  type="submit"
                  disabled={(modalModeState === 'Sing up' ? !values.name : false || !values.email) || !values.password}
                >
                  {modalModeState}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </DialogContent>
      <Button onClick={handleClose} color="primary">Cancel</Button>
    </Dialog>
  );
}

export default Modal;
