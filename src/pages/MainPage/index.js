import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import githubLogo from '../../assets/images/github-logo.svg';
import { Container, Logo, Title, Form, Input, Button } from './styles';

const MainPage = () => {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={githubLogo} alt="API GitHub" />
      <Title>API-GitHub</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
};

export default MainPage;
