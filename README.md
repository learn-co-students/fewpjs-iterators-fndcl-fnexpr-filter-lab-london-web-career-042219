### Write a Function To Partially Match Substrings

Write `fuzzyMatch` - This function takes an array of `drivers` and a `string`
as arguments for querying the array, and returns all drivers whose names begin
with the provided letters.

### Write a Function To Match `object` Values To a Provided `string`

Write `matchName` - This function takes an array of `drivers` and a `string` as
arguments. In this function, each element of the `drivers` array is a
JavaScript object that has a property of `name`. The function should return
each element whose `name` property matches the provided `string` argument.

## Conclusion

The `filter()` method returns a new array created from all elements in the original array
that meet certain conditions. When we use methods like `filter()`, we work directly with
the current value, instead of accessing it through an index (i.e array[i]), avoid mutation
of the original array (minimizing side-effects), and there's no need to manage a `for`
loop with an empty array to push values into.

## Resources
- [MDN: Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)