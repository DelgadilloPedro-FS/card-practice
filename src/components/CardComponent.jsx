import React, { useState, useRef, useEffect } from 'react';

const Card = ({ tags }) => {
  const [showAllTags, setShowAllTags] = useState(false);
  const tagsContainerRef = useRef(null);
  const [tagsToShow, setTagsToShow] = useState(3); // Initial number of tags to show

  useEffect(() => {
    // Function to calculate how many tags fit in the container
    const calculateTagsToShow = () => {
      if (tagsContainerRef.current) {
        const containerWidth = tagsContainerRef.current.offsetWidth;
        const tagElements = tagsContainerRef.current.getElementsByClassName(
          'tag-item'
        );
        let totalWidth = 0;
        let tagsCount = 0;

        for (let i = 0; i < tagElements.length; i++) {
          totalWidth += tagElements[i].offsetWidth;

          if (totalWidth <= containerWidth) {
            tagsCount++;
          } else {
            break;
          }
        }

        setTagsToShow(tagsCount);
      }
    };

    // Call the function initially and on window resize
    calculateTagsToShow();
    window.addEventListener('resize', calculateTagsToShow);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', calculateTagsToShow);
    };
  }, [tags]); // Recalculate tagsToShow when tags change

  const visibleTags = showAllTags ? tags : tags.slice(0, tagsToShow);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-80">
      {/* Top section */}
      <div className="mb-4">
        <h2 className="text-xl font-bold">Title</h2>
        <p className="text-gray-600">Subtitle or description</p>
      </div>

      {/* Middle section */}
      <div className="mb-4">
        <p className="text-gray-700">Main content goes here...</p>
      </div>

      {/* Footer section */}
      <hr className="my-4" />
      {/* Use ref to dynamically calculate visible tags */}
      <div ref={tagsContainerRef}>
        {visibleTags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 tag-item"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Show more button */}
      {tags.length > tagsToShow && (
        <button
          onClick={() => setShowAllTags(!showAllTags)}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
        >
          {showAllTags ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
};

export default Card;
