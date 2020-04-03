# Fragmate

Fragmate is a state renderer for the web.

## Introduction

An important part of every web application is that it renders the state of the
application, to make sure that the user can interact with the application. The
state can be implicit or explicit, residing in the client and/or the server.

React is a framework where the state handling is made more explicit. That is a
big improvement for the developer.

Redux is a framework where all state is explicit and everything is in one state.

An ideal framework would be a framework that given an external, explicit state renders the application with the help of a function that takes the state as an argument, using functional programming style and composition.

However, the ideal framework has its own problems. It is very hard to optimize the rendering, a very small change will need a complete re-render of the user interface.

Some other things that are hard to do in the ideal framework are animation support, loading data when a component becomes visible, and certain types of debugging.

Fragmate tries to stay as close as possible to the ideal framework, and at the same time address the problems that the ideal framework has.

Framate's main component for addressing the problems with the ideal framework is scope. It is a function that takes another function as a parameter, as well as an id. The scope has a similar role as the stateful component has in React, but without adding side effects in the render tree.

Scope enables performance improvements, only relevant scopes will be rerendered when the state changes.

Simplifying animations, debugging, and loading data when a component becomes visible is supported through the combination of scope and render listeners.

Fragmate focuses on three things, speed, size and API. Fragmate aims to have higher rendering speed than any other competing framework, or at least a rendering speed comparable to competing frameworks. Size will be smaller than most competing frameworks. The API is designed to be as easy to learn and use as possible.

Since Fragmate is just a state renderer, there will be room for innovative frameworks on top of it. Fragmate will also have a companion, Fragstate. Fragstate could include features such as state mutation, animation, debugging, scope-local states, actions when showing/hiding a scope, and caching data from the server.

It takes a lot for a state renderer like Fragmate to succeed. Success is when application is developed with Fragmate, and when developers enjoy building applications with fragmate.

1. Applications
2. Developers
3. Examples and tutorials
4. Frameworks, libraries, and tools for Fragmate
5. Fragmate

## Implementation

The implementation isn't working yet, and there are a lot of things to do before it is usable.
