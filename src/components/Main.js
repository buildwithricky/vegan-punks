import React from 'react';
import './main.css';

import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';
const Main = ({ activePunk }) => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              src={activePunk.image_url}
              alt=""
              className="selectedPunk"
            />
          </div>
        </div>
        <div className="punkDetails">
          <div className="title">
            {activePunk.name}
            <span className="itemNum">
              {' '}
              .#{activePunk.token_id}
            </span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer circle">
              <img
                src={
                  activePunk.owner.profile_img_url
                }
                alt=""
              />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>
                  {activePunk.owner.address}
                </div>
                <div className="ownerHandle">
                  @patrick -nwakeze
                </div>
              </div>
            </div>

            <div className="ownerLink">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
