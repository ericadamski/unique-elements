# unique-elements

Strip an array of all duplicate entries, including complex objects

# Install

`$ yarn add unique-elements`

or

`$ npm install unique-elements`

# Usage

```javascript
const unique = require('unique-elements');

unique([1, 2, 2, 3, 3, 5, 6, 6, 6, 6]);
// [1, 2, 3, 5, 6]

unique(['string', 'another', 'different', 'string']);
// ['string', 'another', 'different']

unique([[1, 2, 3], [1, 2, 3], 1, 2, 'string', 1, 'string']);
// [[1, 2, 3], 1, 2, 'string']
```
