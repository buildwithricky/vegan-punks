import React from 'react';
import CollectionCard from './CollectionCard';
import './punklist.css';
const PunkList = ({
  punkListData,
  setSelectedPunk,
}) => {
  return (
    <div className="punkList">
      {punkListData.map((punk, index) => {
        return (
          <div key={punk.token_id}>
            <CollectionCard
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_url}
              onClick={() =>
                setSelectedPunk(index)
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default PunkList;
