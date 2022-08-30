import React, { useState } from "react";
import styles from "../styles/DisplayCreature.module.css";
import creatureNames from "../libs/creatureNames.js";

export function DisplayCreature() {
  
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  return creatureNames.map((names) => {
    return (
      <>
        <button class="accordion">{names}</button>
        <div class="panel">
          <p>Lorem ipsum...</p>
        </div>
      </>
    )
  })
}