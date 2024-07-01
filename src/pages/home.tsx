import { NextPage } from 'next';
import { useState } from 'react';
//import { useQueryClient } from 'react-query';

const HomePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const queryClient = useQueryClient();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //const token = 'teste'; //await authenticateUser(username, password);

    // Save the token in React Query
    //queryClient.setQueryData('token', token);

    // Redirect to the product list page
    window.location.href = '/product-list';
  };

  return (
    <div>
      <h1>Authentication Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default HomePage;
