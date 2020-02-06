import React from 'react';
import styled from 'styled-components';

const AppComponent = styled.div`
  padding: 40px;
`;

const App: React.FC = () => {
  return (
    <AppComponent>
      Minimal Typescript/styled-components based template
    </AppComponent>
  );
}

export default App;
