# Fragmate

Fragmate is a web framework for the view layer.

## Basics

* Uses composition of functions that takes props and returns an HTML element.
* Event handlers that is not connected to an instance of a component.
* Always rerenders the main component on update, uses manual caching to handle
  stateful components and to optimize rendering.
* Simple design and implementation.

## Comparison to React

Fragmate is similar to React in many ways, they both use composition, and both
are view layer only. Here are some ways that Fragmate differs to React:

* Components are always functions, never classes.
* Components return a normal HTMLElement object.
* No component state.
* No refs.
* No JSX.
* No lifecycle events for component instances.
* No automatic optmizations of rerender.
* More opinionated.
* Simpler design and implementation.
* Easier to integrate with external HTML components.

## Implementation

There are currently three modules that can be used by Fragmate web apps. fragmate.mjs (0.4kB)
handles events and updates, fmdom.mjs (1.1kB) supports all html5 elements, and fmrenderstate.mjs (0.4kB)
is there to support manual caching.

## Who should use Fragmate?

Fragmate is experimental. The audience for using and following Fragmate may
include:

* Developers interested in looking at a framework that is easy to understand.
* Developers that likes frameworks that only care about solving the view layer,
  and that believe that it is possible to create a better framework.
* Developers that want to experiment with adding things on top of a view
  framework, like state management and component libraries.
* Developers interested in contributing to a view framework where the code
  isn't as advanced as rocket science.
