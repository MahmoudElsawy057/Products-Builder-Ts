/**
 *
 * @param {string} txt - the initial text to be truncted
 * @param {number} [max=50] - the max number before trunction
 * @returns - the modified text with ellipisse
 */

export function textSlicer(txt: string, max: number = 50) {
  if (txt.length >= max) {
    return `${txt.slice(0, max)}...`;
  } else {
    return txt;
  }
}
