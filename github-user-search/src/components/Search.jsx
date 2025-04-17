import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const results = await fetchUserData(username, location, minRepos);
      setUsers(results);
    } catch (err) {
      setError("Error fetching results");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Minimum Repos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded flex items-center space-x-4">
            <img src={user.avatar_url} alt="avatar" className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-semibold">{user.login}</p>
              <a href={user.html_url} className="text-blue-500" target="_blank" rel="noreferrer">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
