# NameGame Express and GraphQL Server
This is a server for namegame. We have another server in progress too 
(link to namegame-java1 when we have it). These are duplicates that 
allow people to focus on technologies they want to learn. Soon we may have
namegame-python1 and namegame-go1. 

I followed this GraphQL tutorial to create it but will be tweaking some things as 
it progresses (mysql instead of postgres, etc.): 
https://snipcart.com/blog/graphql-nodejs-express-tutorial

## Install
To try this out locally:

1. Ensure you have Node installed locally (I'm using v20.10.0)
2. Clone this repo
3. Build it with `npm install`
4. Run it with `node server.js`
5. Visit `http://localhost:4000/api` to see the GraphiQL (graphical) test playground.
6. Add this code below the comments and click the run button to get a GraphQL response

```
{
  hello
}
```
