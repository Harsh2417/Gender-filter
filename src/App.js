import React from 'react';
import UserList from './components/UserList';
import UserFilter from './components/UserFilter';

const App = () => {
  return (
    <div>
      {/* <h1>My SPA Project</h1> */}
      <UserFilter />
      <UserList />
    </div>
  );
};

export default App;
