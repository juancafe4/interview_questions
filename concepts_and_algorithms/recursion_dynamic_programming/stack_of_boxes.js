function maxHeight(boxes) {
  let rotation = [];


  for (let i = 0; i < boxes.length; i++) {
    rotation.push(boxes1[i]);

    // First rotation 
    rotation.push({
      height: boxes[i].width,
      depth: Math.max(boxes[i].height, boxes[i].depth),
      width: Math.min(boxes[i].height, boxes[i].depth),
    });
    // Second rotation
    rotation.push({
      height: boxes[i].depth,
      depth: Math.max(boxes[i].height, boxes[i].width),
      width: Math.min(boxes[i].height, boxes[i].width),
    });

  }

  rotation.sort((a, b) => {
    let area1 = a.depth * a.width;
    let area2 = b.depth * b.width;
    return area2 - area1;
  });

  let maxHeight = [];

  for (let i = 0; i < rotation.length; i++) {
    maxHeight.push(rotation[i].height);
  }

  for (let i = 1; i < rotation.length; i++) {
    for (let j = 0; j < rotation.length; j++) {
      
      if (rotation[i].width < rotation[j].width
        && rotation[i].depth < rotation[j].depth
        && maxHeight[i] < maxHeight[j] + rotation[i].height) {
        maxHeight[i] = maxHeight[j] + rotation[i].height
      }
    }
  }

  return Math.max(...maxHeight)
}


let boxes1 = [{height: 4, width: 6, depth: 7,},
              {height: 1, width: 2, depth: 3,},
              {height: 4, width: 5, depth: 6,},
              {height: 10, width: 12, depth: 32,}];


let boxes2 = [{height: 4, width: 2, depth: 1,},
              {height: 5, width: 3, depth: 2,},];
console.log(maxHeight(boxes1));
console.log(maxHeight(boxes2));
