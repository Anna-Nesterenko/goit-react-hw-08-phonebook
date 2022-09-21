import { useDispatch } from 'react-redux';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { signUp } from 'redux/auth/authThunk';
import { useSelector } from 'react-redux';
import { getAuthError } from 'redux/auth/authSelectors';

import toast from 'react-hot-toast';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getAuthError);

  const onRegister = data => {
    console.log(data);
    if (status === 400) {
      toast.success('You are already authorized');
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
