import React from 'react';
import coverImage from '../../assets/cover/image-cover.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Sylvester Nwizu</h1>
      <img src={coverImage} alt="wavy background" width="100%"></img>
      {props.children}
    </header>
  );
}

export default Header;
