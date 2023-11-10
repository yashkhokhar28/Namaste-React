## Namaste React Course by Akshay Saini 🚀
# Chapter 01 - Inception


## Q: `What is Emmet ?`
A: `Emmet` is a free add-on for text editors that lets you type `shortcuts` that `expand` into full pieces of code. It's a `shorthand` that translates to multiple lines of HTML or a CSS attribute. Emmet is built-in in many text editors like `VS Code`. 
Emmet is mostly used for HTML, XML, and CSS, but it can also be used with programming languages.


## Q: `Difference between a Library and Framework ?`
A: A `library` provides a set of helper `functions/objects/modules` which your application code calls for specific functionality. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is Framework.
`Framework`, on the other hand has defined open or `unimplemented functions` or objects which the user writes to create a `custom application`.


## Q: `What is CDN? Why do we use it ?`
A: A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
The main use of a CDN is to deliver content through a network of servers in a secure and efficient way.


## Q: `Why is React known as React ?`
A: `React` is named React because of its ability to `react to changes in data`.
React is called React because it was designed to be a declarative, efficient, and flexible JavaScript library for building user interfaces.
The name `React` was chosen because the library was designed to allow developers to "react" to changes in state and data within an application, and to update the user interface in a declarative and efficient manner.
`React` is a `JavaScript-based UI development library`. `Facebook` and an `open-source developer community` run it.


## Q: `What is crossorigin in script tag ?`
A: The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request. 
The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.
### _Syntax_
```sh
<script crossorigin="anonymous|use-credentials">
```

## Q: `What is difference between React and ReactDOM ?`
A: `React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows `React to interact with the DOM`.
The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.


## Q: `What is difference between react.development.js and react.production.js files via CDN ?`
A: `Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
`Development build` is several times (maybe 3-5x) `slower` than the `production build`.


## Q: `What is `async and defer ?`
A: `async` and `defer` both load JavaScript asynchronously without render blocking, but async executes as soon as possible while defer runs in sequence toward the end of the loading process, just before the `DOMContentLoaded` event.
`Async`
 - Downloads in the background at a low priority (same as defer)
 - Can interrupt page rendering to execute
 - Executes as soon as possible and in no particular order
 ### Syntax
```sh
<script src="demo_async.js" async></script>
```
`Defer`
 - Downloads in the background at a low priority (same as async)
 - Won't interrupt page rendering to execute
 - Executes in sequence just before the DOMContentLoaded event
 ### Syntax
```sh
<script src="demo_defer.js" defer></script>
```


