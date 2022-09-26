import React from "react";
import user from '../data/user'

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{user.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href="#">{user.links.github}</a> 
      <a href="#">{user.links.linkedin}</a> 
    </div>
  );
}

export default About;
