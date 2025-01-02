// given two crystal balls that will break if dropped from a certain height,
// determine the spot at which the balls will break
// optimized way

// we've learned
// linear_search and Binary_search
// but we can't use binary search here because we have two balls and
// we need to minimize the number of drops for both balls
// so we use the sqrt of the number of floors as the height to drop the balls

function crystal_ball(breaks: boolean[]): number {
  const height = Math.floor(Math.sqrt(breaks.length));
  let i = height;

  for (; i < breaks.length; i += height) {
    if (breaks[i]) {
      break;
    }
  }

  i -= height;

  for (let j = 0; j < height && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}

const breaks = Array(100).fill(false);
breaks[50] = true;
console.log(crystal_ball(breaks));
