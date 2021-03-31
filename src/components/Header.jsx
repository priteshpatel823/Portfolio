import React from 'react';
import PriteshPatelCV from '../assets/Pritesh_Patel_Cv.pdf';

export default function Header() {
  return (
    <header>
      <h1>Pritesh Patel</h1>
      <h2>MY EXPERIENCES MADE ME WHO I AM TODAY AND I AM NOW HELPING OTHERS</h2>
      <nav>
        <ul>
          <li>
            <a href="#aboutme">ABOUT ME</a>
          </li>
          <li>
            <a href="#Project">MY WORK</a>
          </li>
          <li>
            <a href="#Contact">CONTACT</a>
          </li>
          <li>
            <a href={PriteshPatelCV} target="_blank" rel="noreferrer">
              RESUME
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
