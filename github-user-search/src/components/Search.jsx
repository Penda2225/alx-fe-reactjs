import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError('');
    setUser(null);

    try {
      const data = await fetchUserData(username);
      if (data.message === 'Not Found') {
        setError("Looks like we can't find the user");
      } else {
        setUser(data);
      }
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search GitHub username"
          style={{ padding: '8px', width: '80%' }}
        />
        <button type="submit" style={{ padding: '8px' }}>Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user && (
        <div style={{ border: '1px solid #ccc', padding: '10px' }}>
          <img src={user.avatar_url} alt="avatar" width="100" />
          <h3>{user.name || user.login}</h3>
          <p><a href={user.html_url} target="_blank" rel="noreferrer">View Profile</a></p>
        </div>
      )}
    </div>
  );
};

export default Search;
 
