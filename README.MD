# Learning Algorithms

Repository for practicing algorithms and data structures in JavaScript.

## Stack
- JavaScript (ES Modules)
- Node.js
- Babel (for Jest ESM support)
- Jest (unit tests)

## Project Structure
```
algorithms
├── package-lock.json
├── package.json
├── README.MD
├── src
│   ├── algorithms
│   │   └── sorting
│   │       └── 001-bubble-sort.js
│   └── index.js
└── tests
    └── sorting
        └── 001-bubble-sort.test.js
```


## How to Run Tests

```bash
# install dependencies
npm install

# run all tests
npm test

# run specific test file
npx jest tests/sorting/001-bubble-sort.test.js

# run specific test by name
npx jest -t "twoSum returns correct indices"

# watch mode for development
npx jest --watch

