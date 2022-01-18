// spinner1.js: Use \r to fake an animation by replacing/rewriting characters in the same spot after a delay.
// EXERCISE: Refactor the logic from spinner1.js to remove the repeated setTimeout statements.

const spinner = [
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
  '\r|   ',
  '\r/   ',
  '\r-   ',
  '\r\\   ',
  '\r|   '
];

let delay = 100;
let interval = 200;
for (const e of spinner) {
  setTimeout(() => {
    process.stdout.write(e);
  }, delay);
  delay += interval;
}
