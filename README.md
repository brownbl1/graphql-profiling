## Profiling Example

1. `npm install`
1. [click here](https://engine.apollographql.com/) to get an API key
1. Update `index.js` with your API key
1. `npm start`
1. `npx apollo service:push --endpoint http://localhost:4000`

Visit `http://localhost:4000` and run the following query:

```graphql
{
  hello(name: "Ben Rogers") {
    echo
    slowField
  }
}
```

On https://engine.apollographql.com/ find your service and click on the metrics tab.

You'll see trace information about your request.
