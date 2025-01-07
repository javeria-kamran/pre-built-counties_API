### PreBuilt-Countries-API using GRAPHQL

## Technologies used:
-Typescript <br>
-Tailwind Css <br>
-GraphQL <br>
-Apolloclient (As gql library) <br>
-Aws-Amplify (just used as a client library in gql)

## What is GraphQL and why we use apolloclient with gql to fetch data?
## By giving Real-Life Example
"Imagine you're at a pizza shop an you want to order pizza with certain toppings(country of your choice), <br>
You tell the chef what toppings you want (writting query to describe country(telling apollo client what you want)), <br>
Apollo sends the order (takes query and send it to graphQL),<br>
Pizza place will make the pizza( gql server uses specified country -query- to fetch data of the specified country), <br>
Apollo client delievers the pizza( server Bring information about the country on one click)"

## Why we use Aws-Amplify to fetch data?
"Amplify could power a feed with real-time updates, user profiles, and friend requests using GraphQL and AWS services. In essence, Amplify streamlines GraphQL development on AWS, making it faster and more efficient for developers."

## Why GraphQL?
"Provide more efficient and flexible alternatives to traditional rest APIs" <br>
-Efficient data fetching <br>
-strong typing <br>
-flexibility<br>
-single end point(uri (public API used from trevorblades.com))

## Why Apolloclient?
"It helps to talk to the graphQL server and get the information or data you need .it's like a reliable and super-fast messenger to help you communicate witht the pizza place or any other services that uses graphQL"<br>
-it's fast<br>
-it's accurate<br>
-Easy to use<br>

## Why Aws-Amplify ?
-Rapid Prototyping (reducing time to market) <br>
-Data management (Handle data storage and sychronization) <br>
-Scalibility (Handle growing user demands)<br>
-Real-Time Updates (Features like chat or collabroative editing ).