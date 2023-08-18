// commentCounter.test.js
import { countComments, moviesCount } from '../modules/counter.js';

describe('Added items counter on the homepage ', () => {
  // Example test cases
  test('countComments should count comments correctly', () => {
    const comments = [
      { item_id: 1, text: 'Comment 1' },
      { item_id: 2, text: 'Comment 2' },
      { item_id: 1, text: 'Comment 3' },
    ];

    expect(countComments(1, comments)).toBe(3);
  });

  test("[show1, show2, show3, show4] expect length to be '4'", () => {
    const shows = ['show1', 'show2', 'show3', 'show4'];
    const result = moviesCount(shows);
    expect(result).toBe(4);
  });
});
