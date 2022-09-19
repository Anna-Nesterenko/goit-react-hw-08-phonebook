import { useDispatch } from 'react-redux';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { signUp } from 'redux/auth/authThunk';

// import toast from 'react-hot-toast';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = data => {
    //  if (status === 400) {
    //    toast.error('You are already registered');
    //  }
    dispatch(signUp(data));
  };

  return (
    <>
      <RegisterForm onData={onRegister} />
    </>
  );
};

export default RegisterPage;
