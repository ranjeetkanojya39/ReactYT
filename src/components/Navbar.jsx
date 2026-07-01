import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-500 text-white py-4 display flex justify-between items-center px-6 p-3">
      <h1 className="p-4">home </h1>
      <h1 className="p-4">about</h1>
      <h1 className="p-4">contact</h1>
      <h1 className="p-4">services</h1>

      

      </nav>
    
  );
};

export default Navbar;