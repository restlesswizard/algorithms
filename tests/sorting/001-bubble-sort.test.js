//test

import { performance } from 'perf_hooks';
import { sortBubble, sortBubbleOpt } from "../../src/algorithms/sorting/001-bubble-sort"

const INIT = [9, 4, 2, 3, 10, 7, 31, 14, 6];
const EXPECTED = [2, 3, 4, 6, 7, 9, 10, 14, 31];

test('bubbleSort - return sorted array from less to biggest', () => {
    const array = INIT.slice();  // prevent mutation on test
    const start = performance.now();
    const result = sortBubble(array);
    const time = performance.now() - start;
    console.log(`bubbleSort took ${time.toFixed(3)} ms`);
    expect(result).toEqual(EXPECTED);
});


test('bubbleSortOpt - return sorted array from less to biggest, but should be faster than first', () => {
  const array = INIT.slice();  // prevent mutation on test
  const start = performance.now();
  const result = sortBubbleOpt(array);
  const time = performance.now() - start;
  console.log(`bubbleSortOpt took ${time.toFixed(3)} ms`);
  expect(result).toEqual(EXPECTED);
});
