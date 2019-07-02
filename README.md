## Profiling Example

1. `npm install`
1. [click here](https://engine.apollographql.com/) to get an API key
1. Update `index.js` with your API key
1. `npm start`
1. `npx apollo service:push --endpoint http://localhost:4000`

Visit `http://localhost:4000` and run the following query:

```graphql
{
  hello(name: "Ben") {
    echo
    slowField # optionally exclude this field
  }
}
```

On https://engine.apollographql.com/ find your service and click on the metrics tab.

You'll see trace information about your request.

![image](https://user-images.githubusercontent.com/2136925/60532319-0c4a4980-9ccb-11e9-8acd-9d478ef70251.png)
