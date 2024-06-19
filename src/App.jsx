import { useState } from "react";
import Card from "./components/CardComponent";
function App() {
  const [tags, setTags] = useState(["Tag 1", "Tag 2","Tag 3"]);

  // Function to add a random tag to the array
  const addTag = () => {
    const randomTag = `Tag ${Math.floor(Math.random() * 100)}`;
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
    <div className="flex flex-col items-center justify-start h-screen w-screen">
      {/* Buttons section */}
      <h3 className="my-5">use button to add more or less tags</h3>
      <div className="w-full p-4 flex justify-center">
        <button
          onClick={addTag}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Add Tag
        </button>
        <button
          onClick={removeTag}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          disabled={tags.length === 0}
        >
          Remove Tag
        </button>
      </div>
      {/* Card section */}
      <div className="flex-grow shadow-lg rounded-lg p-6 mt-4 mx-4">
        <Card tags={tags} />
      </div>
    </div>
  );
}

export default App;
