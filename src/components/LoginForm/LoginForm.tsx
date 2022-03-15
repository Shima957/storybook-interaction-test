import { useForm } from 'react-hook-form';
import './LoginForm.css';

type FormType = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isSubmitSuccessful },
  } = useForm<FormType>();

  const onSubmit = () => console.log('success');

  return (
    <form className='container' onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1>Sign in</h1>
      <label htmlFor='email' className='label'>
        <span>Email</span>
        <input
          type='email'
          id='email'
          className='input'
          data-testid='email'
          {...register('email', { required: 'メールアドレスを入力して下さい' })}
        />
        {errors.email && (
          <span role='alert' className='error'>
            {errors.email.message}
          </span>
        )}
      </label>
      <label htmlFor='passowrd' className='label'>
        <span>Password</span>
        <input
          type='password'
          id='password'
          className='input'
          data-testid='password'
          {...register('password', { required: 'パスワードを入力して下さい' })}
        />
        {errors.password && (
          <span role='alert' className='error'>
            {errors.password.message}
          </span>
        )}
      </label>
      <button disabled={isSubmitting} data-testid='submit'>
        Login
      </button>
      {isSubmitSuccessful && <p>Sign in success!</p>}
    </form>
  );
};
