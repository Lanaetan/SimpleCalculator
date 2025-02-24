import React, { useState } from 'react';

export const multiplication = (x: string, y: string, z: string) => {
  return (
    Number(x) * Number(y) * Number(z)
  );
};

export const calcMidpoint = (x: string, y: string) => {
  return (
    (Number(x) + Number(y)) / 2
  );
}

export const calcDistance = (x1: string, x2: string, y1: string, y2: string) => {
  return (
    Math.sqrt(((Number(x2) - Number(x1)) ** 2) + ((Number(y2) - Number(y1)) ** 2))
  );
}


