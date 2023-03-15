import React from 'react';
import PropTypes from 'prop-types';
import { Container, Name, Descripition, Footer, Lang, Link } from './styles';
import { langColors } from '../../../../services/config';

const Repository = ({ repository }) => {
  const color =
    langColors[repository.language && repository.language.toLowerCase()];
  return (
    <Container color={color}>
      <Name>{repository.name}</Name>
      <Descripition>{repository.description}</Descripition>
      <Footer color={color}>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target="_blank">
          Ver
        </Link>
      </Footer>
    </Container>
  );
};

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired,
};
export default Repository;
