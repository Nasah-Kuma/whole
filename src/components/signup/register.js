import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createUser } from '../../app/authReducer/authReducer';

const Register = () => {
  const state = useSelector(((state) => state.auth));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    toast.promise(dispatch(createUser(data)), {
      pending: 'creating user',
      success: 'user created',
      error: 'error creating user',
    });
    navigate('/');
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <input type="text" className="form-control form-control-lg" id="name" placeholder="John Doe" {...register('name', { required: true })} />
          <small>
            {errors.name && <span>This field is required</span>}
          </small>
        </div>
        <div className="mb-3">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <input type="email" className="form-control form-control-lg" id="email" placeholder="Email: name@example.com" {...register('email', { required: true })} />
          <small>
            {errors.email && <span>This field is required</span>}
          </small>
        </div>
        <div className="mb-3">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <input type="password" className="form-control form-control-lg" id="password" placeholder="Enter password" {...register('password', { required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        <div>
          <button type="submit" className={(state.isLoading) ? ('btn btn-lg btn-danger col-12 disabled') : ('btn btn-lg btn-danger col-12')}>
            {(state.isLoading) ? (
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <span className="p-2">
                Sign Up
              </span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
