import React from 'react';

import {LogIn, LogOut} from 'lucide-react';

import {ILoginData} from '@app/types/Login';

import Button from '@components/button';
import Form from '@components/form';
import FormInput from '@components/form/Input';

import './index.scss';

const LoginView = (): JSX.Element => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLogged, setIsLogged] = React.useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values: ILoginData = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };
    setIsLogged(true);
    console.table(values);
  };

  const handleLogoff = () => {
    setIsLogged(false);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="LoginView">
      {isLogged ? (
        <div className="LoginView__logged">
          <p>
            Bem-vindo: <span>{email}</span>
          </p>
          <Button onClick={handleLogoff}>
            <LogOut />
            <span>Sair</span>
          </Button>
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <FormInput
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <FormInput
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <Button type="submit">
            <LogIn />
            <span>Entrar</span>
          </Button>
        </Form>
      )}
    </div>
  );
};

export default LoginView;
