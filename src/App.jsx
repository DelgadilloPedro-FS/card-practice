import { useState } from "react";
import Card from "./components/CardComponent";
function App() {
  const [tags, setTags] = useState(['Tag 1', 'Tag 2']);

  // Function to add a random tag to the array
  const addTag = () => {
    const randomTag = `Tag ${Math.floor(Math.random() * 10000)}`;
    setTags([...tags, randomTag]);
  };

  // Function to remove the last tag from the array
  const removeTag = () => {
    if (tags.length > 0) {
      const newTags = [...tags];
      newTags.pop();
      setTags(newTags);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <Card tags={tags} />
        {/* Button to add tags */}
        <div className="mt-4 flex justify-center w-full m-4">
          <button
            onClick={addTag}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Add Tag
          </button>
          {/* Button to remove tags */}
          <button
            onClick={removeTag}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            disabled={tags.length === 0}
          >
            Remove Tag
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
