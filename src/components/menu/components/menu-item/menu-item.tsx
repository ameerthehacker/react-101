import React from "react";

export interface MenuItemProps {
  name: string;
  image: string;
}

function MenuItem({ name, image }: MenuItemProps) {
  console.log("Menu item rendered");

  return (
    <>
      <img width="50px" src={image} alt={name + "'s image"} />
      <li>{name}</li>
    </>
  );
}

export default MenuItem;
