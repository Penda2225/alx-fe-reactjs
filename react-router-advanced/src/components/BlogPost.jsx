import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Blog Post ID: {id}</h1>
      <p>This would be the blog post content for ID {id}.</p>
    </div>
  );
}

export default BlogPost;
 
