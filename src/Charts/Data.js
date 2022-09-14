import React from 'react';

const Data = () => {
/*
  const array1 = [10, 15, 32];
  const result1 = array1.map((i) => i - 2);
  const result2 = [10, 15, 32].map(i => i - 2);
  console.log("array1: ", array1);
  console.log("result1: ", result1);
  console.log("result2: ", result2);

  console.log([13, 27, 103].map(i => i + 10));

  console.log(["RS", "SP", "RJ"].map(st => `moro no ${st}`));
  console.log(["RS", "SP", "RJ"].map(st => "moro no " + st));

  const arrayObj = [{v: 10}, {v: 70}, {v: -115}].map(i => {
    return {v: i.v * 2}
  });
  console.log(arrayObj);
  console.log([{v: 10}, {v: 70}, {v: -115}].map(i => i.v));
  console.log([{v: 10}, {v: 70}, {v: -115}].map(i => {
    return { value: -i.v }
  }));

  console.log([3, 2, -2].map(i => Math.pow(i, 3)));
  const arrayObj2 = [3, 2, -2].map(i => {
    return {
      value: i,
      sqrt: Math.pow(i, 2),
      cub: Math.pow(i, 3)
    }
  });
  console.log(arrayObj2);

  console.log([3, 2, -2].map(i => {
    return [
      Math.pow(i, 1),
      Math.pow(i, 2),
      Math.pow(i, 3),
    ]
  }));
*/

  const array1 = [
    {f: 35,h: 70},
    {f: 0,h: 35},
    {f: 70,h: 0},
    {f: 100,h: 30},
  ].map(i => {
    return [i.f, i.h]
  });

  const array2 = [
    {f: 35,h: 70},
    {f: 0,h: 35},
    {f: 70,h: 0},
    {f: 100,h: 30},
  ].map(i => {
    return [i.f, i.h].reverse()
  });

  const array3 = [
    ["a", "b"],
    ["a"],
    ["b"],
    ["b", "a"],
  ].map(i => {
    return {a: i.includes("a"), b: i.includes("b")}
  });

  const array4 = array3.map(({a, b}) => {
    return [
      (a === true) ? 100 : 0,
      (b === true) ? 100 : 0
    ]
  });

  return (
    <div>

    </div>
  );
};

export default Data;