import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function BodyColor({ color }) {

    document.documentElement.style.setProperty('--bodyColor', color)

}

export default BodyColor;
