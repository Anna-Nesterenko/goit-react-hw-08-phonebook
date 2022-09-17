import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { signUp } from 'redux/auth/authThunk';
import { getAuthError, isAuth } from 'redux/auth/authSelectors';
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getAuthError);
  const isLogin = useSelector(isAuth);

  const onRegister = data => {
    if (status === 400) {
      toast.error('You are already registered');
    }
    dispatch(signUp(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      <RegisterForm onData={onRegister} />
    </>
  );
};

export default RegisterPage;
