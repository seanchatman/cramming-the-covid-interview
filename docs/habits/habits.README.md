# Habits

### Test day

- Get some encouragement by sharing that you are going to be taking the test
- Watch some review videos
- Do some practice questions
- Setup your own testing function

```javascript
// /src/utils.js
/**
 * @param {string} label for console time
 * @param {function} callback executed and result compared to assertion
 * @param {array} args arguments passed to callback
 * @param {any} assertion checked against callback results
 * @param {boolean} skip the test
 * @return {any} result
 */
const testWrapper = ({ label, callback, args, assertion, skip }) => {
  if (skip) return;

  console.time(label);

  let result = callback.call(this, ...args);

  if (assertion) {
    console.assert(JSON.stringify(result) === JSON.stringify(assertion));

    if (JSON.stringify(result) === JSON.stringify(assertion)) {
      console.log(`Test passed.`);
    } else {
      console.log(label, "result", JSON.stringify(result));
      console.log(label, `assertion`, JSON.stringify(assertion));
    }
    console.timeEnd(label);
  } else {
    console.timeEnd(label);
    console.log(`Test passed.`);
  }

  return result;
};
```

- Setup your workbench to re-run on save

```json
{
  "name": "cramming-the-covid-interview",
  "start": "nodemon src/workbench.js",
  "devDependencies": {
    "nodemon": "^2.0.6",
    "prettier": "^2.2.0"
  }
}
```

- Practice typing [typing.io](https://typing.io/lesson/javascript/jquery/traversing.js/1)

- Read and parse directions

  > This coding challenge will test your <ins>problem solving</ins> abilities. We are looking for you to demonstrate that you fully <ins>understand the problem</ins>, that you have considered all <ins>edge-cases</ins>, and that your solution is as <ins>simple</ins> as possible. We are also looking for <ins>clean, readable code</ins>: use <ins>meaningful variable names</ins> and choose appropriate <ins>abstractions</ins> that are idiomatic to the language you choose.

  > You should write your solution in the <ins>programming language you are the most comfortable with</ins>. The question will ask you to write a <ins>command line program</ins>, so if for example your strongest language is <ins>JavaScript</ins>, make sure you know how to run <ins>JavaScript from the command line</ins>. It would be wise to have a working "Hello World" program to use as a base for your solution before starting the challenge.

  > Feel free to <ins>use any and all resources</ins> at your disposal. However, your solution must be <ins>original work</ins> by you. Additionally, if you <ins>find the solution online, email us and we'll remove the problem from rotation</ins> and assign you a new one.

  > We ask that you spend no more than <ins>4 hours</ins> on a solution, so be sure you <ins>have the time available</ins> before you click the start button.

  Takeaways:

  - Problem solving abilities
  - Understand the problem
  - Consider all [edge-cases](https://en.wikipedia.org/wiki/Edge_case)
    > An edge case is a problem or situation that occurs only at an extreme (maximum or minimum) operating parameter.
  - Simple
  - Clean and readable (comments)
  - Meaningful variable names and abstractions
  - Most comfortable programming language
  - [Command line JavaScript](https://nodejs.dev/learn/run-nodejs-scripts-from-the-command-line)
    - [command line arguments](https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line)
    - [output to command line](https://nodejs.dev/learn/output-to-the-command-line-using-nodejs)
    - [accept input](https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs)
  - Any and all outside resources
    - [Node.js](https://nodejs.dev/)
    - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - [w3schools.com](https://www.w3schools.com/nodejs/nodejs_get_started.asp)
    - [Cramming the Covid Interview](https://github.com/seanchatman/cramming-the-covid-interview)
    - Code editor
    - Books
    - Paper and pen
    - Water
  - Original work
  - Email them if solution is online
  - 4 hours in one session

# Protips

### Before:

- Reboot your computer
- Use the bathroom before you start
- Open a browser with your reference sites opened
- Run your workbench with a debugger
- Clear off your desk
- Fill your water bottle/glass
- Breathe
- If you are prepared, you can perform at a high level
- The company wants to hire you
- Listen to a motivational speaker
- Listen to your favorite music
- Review your demo code

### During:

- Read the question

### After:

- Take a break, you deserve it
