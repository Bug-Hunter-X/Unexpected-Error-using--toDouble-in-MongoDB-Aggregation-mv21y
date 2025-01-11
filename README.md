# Unexpected Error using $toDouble in MongoDB Aggregation

This repository demonstrates a common error encountered when using the `$toDouble` operator in MongoDB aggregation pipelines. The `$toDouble` operator is intended to convert a field to a double, but it throws an error if the field is not a valid number or is missing. This can cause unexpected issues in your application if not handled appropriately.

## Bug Description
The `$toDouble` operator throws an error if it encounters a non-numeric value.  The error might not be immediately obvious.  The provided example demonstrates this problem.

## Bug Solution
The solution involves using the `$cond` operator to check for the existence and validity of the price field before attempting the conversion.

## How to reproduce the bug
1. Clone this repository.
2. Create a MongoDB collection named 'products' with sample documents (including some with invalid or missing 'price' fields).
3. Run the provided `bug.js` script.  You should observe an error.
4. Run the `bugSolution.js` script. This should process documents correctly, handling invalid/missing 'price' fields gracefully.
