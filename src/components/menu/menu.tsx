import React from "react";
import MenuItem, { MenuItemProps } from "./components/menu-item/menu-item";

interface MenuProps {
  items: MenuItemProps[];
}

function Menu({ items }: MenuProps) {
  console.log("Menu rendered");

  return (
    <ul>
      {items.map(({ name, image }, index) => (
        <MenuItem key={index} name={name} image={image} />
      ))}
    </ul>
  );
}

export default Menu;
