import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome Home</h1>
      <p className="mt-4">Try visiting <Link to="/profile/details" className="text-blue-600">your profile</Link> or a <Link to="/posts/42" className="text-blue-600">dynamic post</Link>.</p>
    </div>
  );
}

export default Home;
 
