import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ item }) => {
  return (
    <>
      <div className="box">
        <div className="coverImage">
          {/* <img src="../../images/1.jpg" alt="" /> */}
          <img src={item.cover} alt="" />
        </div>
        <div className="content flex">
          <div className="details row">
            <h1>{item.name}</h1>
            <div className="rating flex">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
            <label>{item.rating}</label>
            <span>GP</span>
            <label>{item.time}</label>

            <p>{item.desc}</p>
            <div className="cast">
              <h4>
                <span>Starring:</span>&nbsp;
                {item.starring}
              </h4>
              <h4>
                <span>Genres:</span>&nbsp;
                {item.genres}
              </h4>
              <h4>
                <span>Tags:</span>&nbsp;
                {item.tags}
              </h4>
            </div>
            <button className="primary-btn">
              <i className="fas fa-play"></i> PLAY NOW
            </button>
          </div>

          <div className="playButton row">
            <Link to={`/singlepage/${item.id}`}>
              <button>
                <div className="img">
                  {/* <i className="fa fa-play"></i> */}
                  <img
                    src="	https://creative-sorbet-96d1b6.netlify.app/images/play-button.png"
                    alt=""
                  />
                  <img
                    src="	https://creative-sorbet-96d1b6.netlify.app/images/play.png"
                    alt=""
                    className="change"
                  />
                </div>
                WATCH TRAILER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
