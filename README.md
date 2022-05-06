# Fragmate

Fragmate is a state renderer for the web.

## Introduction

An important part of every web application is that it renders the state of the
application, to make sure that the user can interact with the application. The
state can be implicit or explicit, residing in the client and/or the server.

React is a framework where the state handling is made more explicit. That is a
big improvement for the developer.

Redux is a framework where all state is explicit and everything is in one state.

An ideal framework according to me would be a framework that given an external, explicit state
renders the application with the help of a function that takes the state as an
argument, using functional programming style and composition.

The current implementation of Fragmate has no optimizations. There is no virtual
DOM. The complete user interface is rendered when render is called. Intrinsic state
(like text in an input element) is kept if the element has an id attribute.

Since there are no optimizations available, Fragmate is not suitable for building
real applications. There are, however, simple proof-of-concept applications
that use Fragmate.

Fragmate aims to keep the simple API that it currently provides, and at the same
time, have performance on par or better than established frameworks.
