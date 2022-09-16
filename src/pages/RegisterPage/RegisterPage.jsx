import { useDispatch, useSelector } from 'react-redux';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { signUp } from 'redux/auth/authThunk';
import { getAuthError } from 'redux/auth/authSelectors';
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getAuthError);

  const onRegister = data => {
    if (status === 400) {
      toast.error('You are already registered');
    }
    dispatch(signUp(data));
  };

  return (
    <>
      <RegisterForm onData={onRegister} />
    </>
  );
};

export default RegisterPage;
