// Placeholder for GitHub API logic
export const searchGithubUser = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    return await res.json();
  };
   
