# Geoow promise

## About
Promise polyfill

## How to use
```
let promise  = new Promise(promiseMethod);

function promiseMethod (resolve, reject)
{
    // Resolve when this method is complete
    setTimeout(resolve, 2000);
    
    // Reject when this method fails
    setTimeout(reject, 10000);
}

promise
    .then(twoSecondsPassed)
    .catch(waitedTooLong);
```

## License
GPL-3.0