import React, { Component } from "react";

export default function HeaderButton(props) {
  return (
    <div>
      <a className="header-button">{props.labelButton}</a>
    </div>
  );
}
