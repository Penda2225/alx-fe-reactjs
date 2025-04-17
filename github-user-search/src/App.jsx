import Search from './components/Search';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-10">
      <div className="w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">GitHub Advanced User Search</h1>
        <Search />
      </div>
    </div>
  );
}

export default App;
