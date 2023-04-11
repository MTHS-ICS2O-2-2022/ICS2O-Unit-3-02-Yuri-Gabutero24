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
  const pyramidLength = parseInt(document.getElementById('length-pyramid').value)
  const pyramidWidth = parseInt(document.getElementById('width-pyramid').value)
  const pyramidHeight = parseInt(document.getElementById('height-pyramid').value)


 // process
 const volume = (pyramidLength * pyramidWidth * pyramidHeight) / 3


  // output
  document.getElementById('volume-pyramid').innerHTML = "The volume is: " + volume + " cm³"
}