import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faShareNodes,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import {
  CardWrapper,
  CardHead,
  CardControls,
  CardDescriptionCollapse,
  CardDescription,
} from "./card-styling";

const Card = ({ title, intro, content }) => {
  const [expand, setExpand] = useState(false);

  const expandHandler = () => {
    setExpand((e) => !e);
  };

  const date = new Date("September 14, 2016");
  const [month, day, year] = [
    new Intl.DateTimeFormat("en-US", { month: "long" }).format(date),
    date.getDate(),
    date.getFullYear(),
  ];

  return (
    <CardWrapper>
      <CardHead>
        <div className="cardhead__avatar">
          <div>R</div>
        </div>
        <div className="cardhead__infos">
          <span>{title}</span>
          <span>
            {month} {day}, {year}
          </span>
        </div>
      </CardHead>
      <img
        src="https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/71/527501179e9319cf888f/letterbox_Summer_20paella.jpg"
        alt="Shrimp and Chorizo Paella"
      />
      <CardDescription>
        <p>{intro}</p>
      </CardDescription>
      <CardControls expand={expand}>
        <button>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button>
          <FontAwesomeIcon icon={faShareNodes} />
        </button>
        <button className="cardcontrols__expand-btn" onClick={expandHandler}>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </CardControls>
      {/* destructure showMore and pass instead of expand for control outside component */}
      <Collapse isOpened={expand}>
        <CardDescriptionCollapse>
          <p>{content}</p>
        </CardDescriptionCollapse>
      </Collapse>
    </CardWrapper>
  );
};

export default Card;
