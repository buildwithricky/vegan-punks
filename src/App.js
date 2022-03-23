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
  const [activePunk, setActivePunk] = useState(
    []
  );
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x9e19f8d3833EfC0cc0659768fe57a629D518a7f0&order_direction=asc'
      );
      const defaultData = await openseaData.data
        .assets[0];

      console.log(openseaData);
      setPunkListData(openseaData.data.assets);
      setActivePunk(defaultData);
    };

    getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main activePunk={activePunk} />
      <PunkList
        punkListData={punkListData}
        setActivePunk={setActivePunk}
      />
    </div>
  );
};
export default App;
