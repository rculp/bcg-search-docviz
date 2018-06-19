Installation
------------
`git clone https://github.com/rculp/bcg-search-docviz`
`npm install`

Run
---
`npm start`

Tests
-----
No coverage reports, only runs tests if git diff exists for either test or one of the scripts the test file imports:
`npm test`

With coverage reports, run all tests:
`npm test -- --coverage`