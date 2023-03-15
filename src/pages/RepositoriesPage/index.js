import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import { Loading, Container, Sidebar, Main } from './styles';
import Filter from './Filter';
import Repositories from './Repositories';
import { getUser, getLangsFrom, getRepos } from '../../services/api';

const RepositoriesPage = () => {
  const { login } = useParams();
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setlanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);

      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);
      setlanguages(getLangsFrom(repositoriesResponse.data));
      setLoading(false);
    };
    loadData();
  }, []);

  const onFi1terClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFi1terClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};
export default RepositoriesPage;
