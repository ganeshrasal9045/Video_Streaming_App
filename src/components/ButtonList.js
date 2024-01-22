import React from "react";
import Button from "./Button";

const List = ["All","Music","Live","Cricket","News","Cooking","Podcasts","T-Series","Comedy","Science","Thoughts"];


const ButtonList = () => {
  return (
    <div className="flex">

      {
        List.map((item,i) => <Button key={i} name={item} />)
      }

      {/* <Button name="All" />
      <Button name="Music" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="News" />
      <Button name="Cooking" />
      <Button name="Podcasts" />
      <Button name="T-Series" />
      <Button name="Comedy" />
      <Button name="Science" />
      <Button name="Thoughts" />
      <Button name="Songs" /> */}
    </div>
  );
};

export default ButtonList;
