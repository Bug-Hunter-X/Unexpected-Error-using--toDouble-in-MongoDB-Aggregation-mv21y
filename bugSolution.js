```javascript
const query = {
  $expr: {
    $gt: [ { $toDouble: { $ifNull: ['$price', 0] } }, 100 ]
  }
};
db.collection('products').find(query);
```