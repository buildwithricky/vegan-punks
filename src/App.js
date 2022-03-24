import React, {
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import Header from './components/Header';
import './App.css';
import PunkList from './components/PunkList';
import Main from './components/Main';

const App = () => {
  const [punkListData, setPunkListData] =
    useState([]);
  const [selectedPunk, setSelectedPunk] =
    useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x9e19f8d3833EfC0cc0659768fe57a629D518a7f0&order_direction=asc'
      );
      const data = await openseaData.data.assets;
      setPunkListData(data);
    };

    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main
            punkListData={punkListData}
            selectedPunk={selectedPunk}
          />

          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
};
export default App;
