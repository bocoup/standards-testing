# Standards Testing

## Interpreting specifications and tests

The `test262` directory contains a subset of [the Test262 test
suite](https://github.com/tc39/test262).  Specifically: it only contains tests
for the built-in method `Array.prototype.reduce`.

The `src` directory contains a single JavaScript file. This file is used by the
tests to define a custom implementation of `Array.prototype.reduce`.

**Setup**

1. If you do not have [git](https://git-scm.com/) and [Node.js](https://nodejs.org/) installed, install them before proceeding to step 2.
2. Clone this repository
3. Enter the newly created repository directory
3. Install the Node.js dependencies by running the following command in a
   terminal in the root of this project:

       npm install


**Instruction**

Edit the file src/reduce.js to define the method according to [this
specification](https://bocoup.github.io/emca595/#sec-array.prototype.reduce) document such that the tests
pass. To run the tests, execute the following command from the root of this
project:

    npm test

Remember that writing specifications is hard work, and so is writing tests!
Both the test files and the specification may be incorrect. To get the tests to
pass, you may have to correct errors in the test logic, and your implementation
may diverge from the specification. Be sure to have a justification for these
corrections.
