// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: April 2023
// This file contains the JS functions for index.html


'use strict'
/**
* This function is for calculating the volume of a pyramid
*/
function calculate() {
// input
  const pyramidlength = parseInt(document.getElementById('length-pyramid').value)
  const pyramidwidth = parseInt(document.getElementById('width-pyramid').value)
  const pyramidheight = parseInt(document.getElementById('height-pyramid').value)


 // process
 const volume = (pyramidlength * pyramidwidth * pyramidheight) / 3


  // output
  document.getElementById('volume-pyramid').innerHTML = "The volume is: " + volume + " cm³"
}