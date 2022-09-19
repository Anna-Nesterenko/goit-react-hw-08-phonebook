import { useDispatch } from 'react-redux';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { logIn } from 'redux/auth/authThunk';
// import toast from 'react-hot-toast';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = data => {
    //  if (status === 400) {
    //    toast.error('You are not already registered');
    //  }
    dispatch(logIn(data));
  };

  return (
    <>
      <LoginForm onData={onLogin} />
    </>
  );
};

export default LoginPage;
