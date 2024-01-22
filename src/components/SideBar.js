import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return pattern
  if(!isMenuOpen) return null;

  return (
    <div className="p-5 m-2 shadow-lg w-2/12">
      <div>
        <ul>
          <li>
            <i className=" m-2 fa-solid fa-house"></i>
              <Link to="/">Home</Link>
          </li>
          <li>
            <i className=" m-2 fa-solid fa-bolt"></i>
              Shrots
          </li>
          <li>
            <i className=" m-2 fa-solid fa-layer-group"></i>
              Subscriptions
          </li>
        </ul>
      </div>
      <hr className="bg-gray-600 my-1" />
      <div>
        <span>
          <strong>
            YOU <i className=" m-2 fa-solid fa-angle-right"></i>
          </strong>
        </span>
        <ul>
          <li>
            <i className=" m-2 fa-solid fa-image-portrait"></i>
             Your channel
          </li>
          <li>
            <i className=" m-2 fa-solid fa-clock-rotate-left"></i>
             History
          </li>
          <li>
            <i className=" m-2 fa-regular fa-circle-play"></i>
             Your videos
          </li>
          <li>
            <i className=" m-2 fa-regular fa-clock"></i>
             Watch later
          </li>
          <li>
            <i className=" m-2 fa-solid fa-scissors"></i>
             Your clips
          </li>
          <li>
            <i className=" m-2 fa-regular fa-thumbs-up"></i>
             Liked videos
          </li>
        </ul>
      </div>
      <hr className="bg-gray-500 my-1" />
      <div>
        <span>
          <strong>Explore</strong>
        </span>
        <ul>
          <li>
            <i className=" m-2 fa-solid fa-fire"></i>Trending
          </li>
          <li>
            <i className=" m-2 fa-solid fa-music"></i>Music
          </li>
          <li>
            <i className=" m-2 fa-solid fa-film"></i>Movies
          </li>
          <li>
            <i className=" m-2 fa-solid fa-gamepad"></i>Gaming
          </li>
          <li>
            <i className=" m-2 fa-solid fa-trophy"></i>Sports
          </li>
          <li>
            <i className=" m-2 fa-regular fa-lightbulb"></i>Learning
          </li>
        </ul>
      </div>
      <hr className="bg-gray-500 my-1" />
      <div>
        <ul>
          <li>
            <i className=" m-2 fa-solid fa-gear"></i>Settings
          </li>
          <li>
            <i className=" m-2 fa-regular fa-flag"></i>Report history
          </li>
          <li>
            <i className=" m-2 fa-solid fa-circle-question"></i>Help
          </li>
          <li>
            <i className=" m-2 fa-regular fa-message"></i>Send Feedback
          </li>
        </ul>
      </div>
    </div>
  );




  /*
  return !isMenuOpen ? (
    <div className="p-5 m-2 shadow-lg w-1/12">
      <div>
        <ul className="text-center">
          <li>
            <i className=" my-2 text-2xl fa-solid fa-house"></i>
            <h5 className="text-xs"><Link to="/">Home</Link></h5>
          </li>
          <li>
            <i className=" my-2 text-2xl fa-solid fa-bolt"></i>
            <h5 className="text-xs">Shrots</h5>
          </li>
          <li>
            <i className=" my-2 text-2xl fa-solid fa-layer-group"></i>
            <h5 className="text-xs">Subscriptions</h5>
          </li>
          <li>
            <i className=" my-2 text-2xl fa-regular fa-circle-play"></i>
            <h5 className="text-xs">You</h5>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <div className="p-5 m-2 shadow-lg w-2/12">
      <div>
        <ul>
          <li>
            <Link><i className=" m-2 fa-solid fa-house"></i></Link>
              Home
          </li>
          <li>
            <i className=" m-2 fa-solid fa-bolt"></i>
              Shrots
          </li>
          <li>
            <i className=" m-2 fa-solid fa-layer-group"></i>
              Subscriptions
          </li>
        </ul>
      </div>
      <hr className="bg-gray-600 my-1" />
      <div>
        <span>
          <strong>
            YOU <i className=" m-2 fa-solid fa-angle-right"></i>
          </strong>
        </span>
        <ul>
          <li>
            <i className=" m-2 fa-solid fa-image-portrait"></i>
             Your channel
          </li>
          <li>
            <i className=" m-2 fa-solid fa-clock-rotate-left"></i>
             History
          </li>
          <li>
            <i className=" m-2 fa-regular fa-circle-play"></i>
             Your videos
          </li>
          <li>
            <i className=" m-2 fa-regular fa-clock"></i>
             Watch later
          </li>
          <li>
            <i className=" m-2 fa-solid fa-scissors"></i>
             Your clips
          </li>
          <li>
            <i className=" m-2 fa-regular fa-thumbs-up"></i>
             Liked videos
          </li>
        </ul>
      </div>
      <hr className="bg-gray-500 my-1" />
      <div>
        <span>
          <strong>Explore</strong>
        </span>
        <ul>
          <li>
            <i className=" m-2 fa-solid fa-fire"></i>Trending
          </li>
          <li>
            <i className=" m-2 fa-solid fa-music"></i>Music
          </li>
          <li>
            <i className=" m-2 fa-solid fa-film"></i>Movies
          </li>
          <li>
            <i className=" m-2 fa-solid fa-gamepad"></i>Gaming
          </li>
          <li>
            <i className=" m-2 fa-solid fa-trophy"></i>Sports
          </li>
          <li>
            <i className=" m-2 fa-regular fa-lightbulb"></i>Learning
          </li>
        </ul>
      </div>
      <hr className="bg-gray-500 my-1" />
      <div>
        <ul>
          <li>
            <i className=" m-2 fa-solid fa-gear"></i>Settings
          </li>
          <li>
            <i className=" m-2 fa-regular fa-flag"></i>Report history
          </li>
          <li>
            <i className=" m-2 fa-solid fa-circle-question"></i>Help
          </li>
          <li>
            <i className=" m-2 fa-regular fa-message"></i>Send Feedback
          </li>
        </ul>
      </div>
    </div>
  );
  */
};

export default SideBar;
