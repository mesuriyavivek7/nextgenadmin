import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function BreadCrumb() {
  const location = useLocation();


  const getContent = () => {
    switch (location.pathname) {
      case "/admin":
        return <h1 className="text-3xl text-black font-semibold">Dashboard</h1>;
    }
  };

  return <div className="p-2">{getContent()}</div>;
}

export default BreadCrumb;
