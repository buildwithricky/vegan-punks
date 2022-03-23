import React from 'react';
import CollectionCard from './CollectionCard';
import './punklist.css';
const PunkList = ({
  punkListData,
  setActivePunk,
}) => {
  return (
    <div className="punkList">
      {punkListData.map((punk) => {
        return (
          <div key={punk.token_id}>
            <CollectionCard
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_url}
              onClick={() => setActivePunk(punk)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PunkList;
