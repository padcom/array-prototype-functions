# Array prototype functions

The API for arrays in JavaScript is quite vast. Functions such as `filter()`, `map()` and `reduce()` are quite powerful. The only problem with them is that they are very very generic.

The purpose of this library is to augment the `Array.prototype` to provide functions that have a more distinct meaning, such as finding the min or max value in an array or grouping an array of objects by the key.

I wrote those functions far too many times and have gotten sick maintaining them throughout multiple projects.

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

Returns the first element of the array or null if the array is empty.

### `Array.prototype.tail()`

Returns all elements of the array besides the first element. Returns an empty array if the original array was empty or had just one element.

### `Array.prototype.first()`

Synonym for `Array.prototype.head()`

Returns the first element of the array or null if the array is empty.

### `Array.prototype.last()`

Returns the last element of the array or null if the array is empty

### `Array.prototype.sum(fieldOrMapper = null)`

Returns a sum of elements in the array. The `fieldOrMapper` can be one of:
- null (or not provided) which means the elements will be treated as sumable
- string - in which case it will be a name of field to extract from the objects in the array and then to sum them up
- a function that takes the array element as parameter and shall return a sum-able value

### `Array.prototype.avg(fieldOrMapper = null)`

Returns an average of values from the array (sum of all divided by the number of elements). Returns null if the array was empty. The `fieldOrMapper` can be one of:
- null (or not provided) which means the elements will be treated as sum-able
- string - in which case it will be a name of field to extract from the objects in the array and then to sum them up
- a function that takes the array element as parameter and shall return a sum-able value

### `Array.prototype.sortBy(fieldOrMapper = null, order = 1)`

Returns a copy of the array that is sorted. The `fieldOrMapper` can be one of:
- null (or not provided) which means the elements will be treated as comparable
- string - in which case it will be a name of field to extract from the objects in the array and then to sort them up
- a function that takes the array element as parameter and shall return a comparable value

The `order` parameter is either a positive or negative number. If it is negative it will reverse the order of sorted elements.

### `Array.ptototype.min(fieldOrMapper = null)`

Returns the smallest element in the list. The `fieldOrMapper` can be one of:
- null (or not provided) which means the elements will be treated as comparable
- string - in which case it will be a name of field to extract from the objects in the array and then to sort them up
- a function that takes the array element as parameter and shall return a comparable value

### `Array.prototype.max(fieldOrMapper = null)`

Returns the largest element in the list. The `fieldOrMapper` can be one of:
- null (or not provided) which means the elements will be treated as comparable
- string - in which case it will be a name of field to extract from the objects in the array and then to sort them up
- a function that takes the array element as parameter and shall return a comparable value

### `Array.prototype.median(fieldOrMapper = null)`

Returns the median element in the list. The `fieldOrMapper` can be one of:
- null (or not provided) which means the elements will be treated as comparable
- string - in which case it will be a name of field to extract from the objects in the array and then to sort them up
- a function that takes the array element as parameter and shall return a comparable value

### `Array.prototype.groupBy(field)`

Returns a dictionary of lists of objects from the array grouped by a field name. The field name is required.

### `Array.prototype.uniq(fieldOrMapper = null)`

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
