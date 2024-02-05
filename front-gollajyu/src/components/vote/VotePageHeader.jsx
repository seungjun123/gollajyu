import React from 'react';

const VotePageHeader = () => {
  const handleSort = (sortType) => {
    // TODO: 정렬 로직 구현
    console.log(`Sorting by: ${sortType}`);
  };

  const handleSearch = (event) => {
    // TODO: 검색 로직 구현
    console.log(`Searching for: ${event.target.value}`);
  };

  return (
    <div className="vote-controls container mx-auto my-4 max-w-5xl px-4">
      <div className="flex justify-between mb-4">
        <div>
          <button onClick={() => handleSort('latest')} className="mr-2 mt-4 fontsize-sm">최신순</button>
          <button onClick={() => handleSort('popular')} className="mr-2 mt-4 fontsize-sm">인기순</button>
        </div>
        <input 
          type="search"
          placeholder="투표 검색..."
          onChange={handleSearch}
          className="border p-1 mt-4 fontsize-md"
        />
      </div>
    </div>
  );
};

export default VotePageHeader;