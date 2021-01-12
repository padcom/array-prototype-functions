<p align="center">
  <a href="https://github.com/padcom/array-prototype-functions/actions?query=workflow%3Abuild" target="_blank">
    <img src="https://img.shields.io/github/workflow/status/padcom/array-prototype-functions/build?logo=github&sanitize=true" alt="Build status">
  </a>
  <a href="https://coveralls.io/github/padcom/array-prototype-functions" target="_blank">
    <img src="https://img.shields.io/coveralls/github/padcom/array-prototype-functions?logo=coveralls&sanitize=true" alt="Code coverage">
  </a>
  <a href="https://github.com/padcom/array-prototype-functions/issues" target="_blank">
    <img src="https://img.shields.io/github/issues/padcom/array-prototype-functions?logo=github&sanitize=true" alt="Issues">
  </a>
  <!--<img src="https://img.shields.io/github/languages/top/padcom/array-prototype-functions?logo=typescript&logoColor=yellow&sanitize=true">-->
  <a href="https://raw.githubusercontent.com/padcom/array-prototype-functions/master/LICENSE" target="_blank">
    <img src="https://img.shields.io/github/license/padcom/array-prototype-functions?logo=apache&sanitize=true" alt="License">
  </a>
  <a href="https://www.npmjs.com/package/array-prototype-functions" target="_blank">
    <img src="https://img.shields.io/github/package-json/v/padcom/array-prototype-functions?logo=npm&sanitize=true" alt="Current version">
  </a>
  <a href="https://www.npmjs.com/package/array-prototype-functions" target="_blank">
    <img src="https://img.shields.io/npm/dm/array-prototype-functions?logo=npm&sanitize=true" alt="Downloads">
  </a>
</p>

# Array prototype functions

The API for arrays in JavaScript is quite vast. Functions such as `filter()`, `map()` and `reduce()` are quite powerful. The only problem with them is that they are very very generic.

The purpose of this library is to augment the `Array.prototype` to provide functions that have a more distinct meaning, such as finding the min or max value in an array or grouping an array of objects by the key.

I wrote those functions far too many times and have gotten sick maintaining them throughout multiple projects.

## Usage

The usage is dead simple. Just import the package and you're done:

```
// ES6 module
import 'array-prototype-functions/avg'
import 'array-prototype-functions/first'
import 'array-prototype-functions/group-by'
import 'array-prototype-functions/group-by-as-map'
import 'array-prototype-functions/head'
import 'array-prototype-functions/last'
import 'array-prototype-functions/max'
import 'array-prototype-functions/median'
import 'array-prototype-functions/min'
import 'array-prototype-functions/sort-by'
import 'array-prototype-functions/sum'
import 'array-prototype-functions/tail'
import 'array-prototype-functions/uniq'

// node.js
require('array-prototype-functions/avg')
require('array-prototype-functions/first')
require('array-prototype-functions/group-by')
require('array-prototype-functions/group-by-as-map')
require('array-prototype-functions/head')
require('array-prototype-functions/last')
require('array-prototype-functions/max')
require('array-prototype-functions/median')
require('array-prototype-functions/min')
require('array-prototype-functions/sort-by')
require('array-prototype-functions/sum')
require('array-prototype-functions/tail')
require('array-prototype-functions/uniq')
```

Please be aware that there are some dependencies between the imported functions (see below in the API section). You will need to import the dependencies yourself.

Once the file is executed the `Array.prototype` is automatically augmented.

Please note that if the functions are already present they will not be overriden! This means that if at any point in time the `Array.prototype` will gain functions like `head`, `tail` or any other that is provided by this library they will take precedense over the ones from this library.

## Why augmenting the `Array.prototype`?

The question you might be asking is why do I augment the prototype instead of providing standalone functions that would do the same? The reason for it is simple: readability of the code that uses them. Here are a few examples:

```
const a = [ 1, 2, 3, 4 ]

a.filter(x => x % 2 == 0).sum()
a.filter(x => x % 2 == 0).avg()
a.filter(x => x % 2 == 0).median()

const a = [ { x: 1 }, { x: 2 } ]
a.sum('x')
```

This way the built-in functions can directly be the source and the syntax flows nicely with the rest of the code.

## API

### `Array.prototype.head()`

Dependencies: none

Returns the first element of the array or null if the array is empty.

### `Array.prototype.tail()`

Dependencies: none

Returns all elements of the array besides the first element. Returns an empty array if the original array was empty or had just one element.

### `Array.prototype.first(n = null)`

Dependencies: none

Returns the first element of the array or null if the array is empty. If the `n` parameter is given it returns an array of `n` or less elements (if the array doesn't contain as many elements to begin with)

### `Array.prototype.last(n = null)`

Dependencies: none

Returns the last element of the array or null if the array is empty. If the `n` parameter is given it returns an array of `n` or less elements (if the array doesn't contain as many elements to begin with)

### `Array.prototype.sum(fieldOrMapper = null)`

Dependencies: none

Returns a sum of elements in the array. The `fieldOrMapper` can be one of:
- null (or not provided) which means the elements will be treated as sumable
- string - in which case it will be a name of field to extract from the objects in the array and then to sum them up
- a function that takes the array element as parameter and shall return a sum-able value

### `Array.prototype.avg(fieldOrMapper = null)`

Dependencies: `sum`

Returns an average of values from the array (sum of all divided by the number of elements). Returns null if the array was empty. The `fieldOrMapper` can be one of:
- null (or not provided) which means the elements will be treated as sum-able
- string - in which case it will be a name of field to extract from the objects in the array and then to sum them up
- a function that takes the array element as parameter and shall return a sum-able value

### `Array.prototype.sortBy(fieldOrMapper = null, order = 1)`

Dependencies: none

Returns a copy of the array that is sorted. The `fieldOrMapper` can be one of:
- null (or not provided) which means the elements will be treated as comparable
- string - in which case it will be a name of field to extract from the objects in the array and then to sort them up
- a function that takes the array element as parameter and shall return a comparable value

The `order` parameter is either a positive or negative number. If it is negative it will reverse the order of sorted elements.

### `Array.ptototype.min(fieldOrMapper = null)`

Dependencies: `sort-by`, `first`

Returns the smallest element in the list. The `fieldOrMapper` can be one of:
- null (or not provided) which means the elements will be treated as comparable
- string - in which case it will be a name of field to extract from the objects in the array and then to sort them up
- a function that takes the array element as parameter and shall return a comparable value

### `Array.prototype.max(fieldOrMapper = null)`

Dependencies: `sort-by`, `first`

Returns the largest element in the list. The `fieldOrMapper` can be one of:
- null (or not provided) which means the elements will be treated as comparable
- string - in which case it will be a name of field to extract from the objects in the array and then to sort them up
- a function that takes the array element as parameter and shall return a comparable value

### `Array.prototype.median(fieldOrMapper = null)`

Dependencies: `sort-by`

Returns the median element in the list. The `fieldOrMapper` can be one of:
- null (or not provided) which means the elements will be treated as comparable
- string - in which case it will be a name of field to extract from the objects in the array and then to sort them up
- a function that takes the array element as parameter and shall return a comparable value

### `Array.prototype.groupBy(fieldOrMapper)`

Dependencies: none

Returns a dictionary of lists of objects from the array grouped by a field name. The `fieldOrMapper` is required and can be one of:

- string - in which case it will be a name of field to extract from the objects in the array and then to sort them up
- a function that takes the array element as parameter and shall return a string to group objects by

Objects that don't have the field in them will be skipped.

### `Array.prototype.groupByAsMap(field)`

Dependencies: none

Returns a Map of lists of objects from the array grouped by a field name. The `fieldOrMapper` is required and can be one of:

- string - in which case it will be a name of field to extract from the objects in the array and then to sort them up
- a function that takes the array element as parameter and shall return a value to group objects by

The difference to `groupBy(field)` is that the return value is an instance of `Map<any, T[]>` which means that the original type of the values of the field is also preserved and not converted to a string. This also means that if throughout the objects in the source array field values have different types they will be treated differently and you'll end up having more than one item in the result.

Objects that don't have the field in them will be skipped.

### `Array.prototype.uniq(fieldOrMapper = null)`

Dependencies: none

Returns a list of unique values from the original array. The `fieldOrMapper` can be one of:
- null (or not provided) which means the elements will be treated as comparable
- string - in which case it will be a name of field to extract from the objects in the array and then to sort them up
- a function that takes the array element as parameter and shall return a comparable value

If the `fieldOrMapper` is specified the final list will return only values of the specified field or the values returned by the mapper.

## Additional information

There's an extensive suite of tests in this package. You can run them by running the issuing the following command:

```
$ npm run test:unit
```

or run them continuously while doing changes by running the following command:

```
$ npm run test:unit:watch
```

To build the latest output files run

```
$ npm run build
```
