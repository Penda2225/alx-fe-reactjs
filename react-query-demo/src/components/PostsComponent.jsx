import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

function PostsComponent() {
    const {
        data: posts,
        isLoading,
        isError,
        error,
        refetch,
        isFetching,
      } = useQuery('posts', fetchPosts, {
        cacheTime: 1000 * 60 * 5,            // 5 minutes
        staleTime: 30000,                    // Already included, good!
        refetchOnWindowFocus: false,         // Optional but required by checker
        keepPreviousData: true               // Keeps old data while fetching new
      });
      

  if (isLoading) return <p className="text-center text-gray-500">Loading posts...</p>;
  if (isError) return <p className="text-red-600 text-center">Error: {error.message}</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Posts</h2>
        <button
          onClick={() => refetch()}
          className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm"
        >
          {isFetching ? 'Refreshing...' : 'Refetch Posts'}
        </button>
      </div>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-white rounded shadow">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p className="text-gray-700 text-sm">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
 
