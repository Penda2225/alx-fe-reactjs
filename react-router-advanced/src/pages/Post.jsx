import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">Viewing Post ID: {id}</h2>
      <p>Here’s where the post content would go...</p>
    </div>
  );
}

export default Post;
 
