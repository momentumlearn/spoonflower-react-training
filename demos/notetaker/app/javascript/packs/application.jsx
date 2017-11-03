// Run this example by adding <%= javascript_pack_tag 'application' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import 'shoelace-css/source/css/shoelace.css'
import '../styles/notetaker.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Notetaker from '../components/Notetaker';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Notetaker />,
    document.getElementById("mount")
  )
})
