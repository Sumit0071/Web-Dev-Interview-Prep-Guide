# React Interview Questions and Answers

## 1. What is React?
**Answer:** React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.

## 2. What are the major features of React?
**Answer:** Major features of React include:
- JSX: JavaScript XML, a syntax extension for writing HTML in React.
- Components: Reusable building blocks of a React application.
- Virtual DOM: A lightweight copy of the actual DOM that React uses to optimize rendering.
- Unidirectional Data Flow: Data flows in one direction, making the code easier to understand.
- Lifecycle Methods: Special methods in a component’s lifecycle for running code at particular times.

## 3. What is JSX?
**Answer:** JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML directly within React. JSX makes it easier to write and add HTML in React.

## 4. What is the Virtual DOM?
**Answer:** The Virtual DOM is a lightweight copy of the real DOM. React uses the Virtual DOM to update the UI efficiently. When the state of an object changes, React updates only that object in the real DOM, rather than updating all the objects.

## 5. What are components in React?
**Answer:** Components are the building blocks of a React application. They can be functional or class-based. Components encapsulate a part of the user interface and can manage their own state and props.

## 6. What is the difference between a class component and a functional component?
**Answer:** A class component is a JavaScript class that extends `React.Component` and has a `render` method. A functional component is a plain JavaScript function that returns JSX. Functional components can now use hooks to manage state and lifecycle methods.

## 7. What are props in React?
**Answer:** Props (short for properties) are read-only attributes used to pass data from one component to another, typically from a parent to a child component.

## 8. What is state in React?
**Answer:** State is a built-in object that stores property values that belong to a component. State changes can happen as a response to user actions or system events and can trigger re-renders.

## 9. What is the use of the `key` prop?
**Answer:** The `key` prop is used to uniquely identify elements in a list. This helps React identify which items have changed, are added, or are removed, improving performance during re-renders.

## 10. What are lifecycle methods in React?
**Answer:** Lifecycle methods are special methods in React components that run at particular times in a component's lifecycle. Examples include `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

## 11. What are hooks in React?
**Answer:** Hooks are functions that let you use state and lifecycle methods in functional components. Examples include `useState`, `useEffect`, and `useContext`.

## 12. What is the use of `useState` hook?
**Answer:** The `useState` hook is used to add state to functional components. It returns an array with two elements: the current state value and a function to update that value.

**Example:**
```
javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
## 13. What is the use of useEffect hook?
Answer: The useEffect hook lets you perform side effects in functional components. It takes a function as an argument that runs after every render by default, but can be controlled to run less frequently by specifying dependencies.

Example:
```
javascript
Copy code
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
## 14. What is the Context API?
Answer: The Context API provides a way to pass data through the component tree without having to pass props down manually at every level. It is used to manage global state or shared state across the application.

## 15. What is Redux?
Answer: Redux is a state management library for JavaScript apps. It helps manage the state of the application in a predictable way. Redux works well with React and can be used to manage the global state.

## 16. What are actions in Redux?
Answer: Actions are plain JavaScript objects that describe what happened. They are the only source of information for the store and must have a type property that indicates the type of action being performed.

## 17. What are reducers in Redux?
Answer: Reducers are functions that determine changes to the application's state. They take the current state and an action as arguments and return a new state.

## 18. What is the purpose of the store in Redux?
Answer: The store is an object that holds the application's state. It allows access to the state via getState(), dispatching actions via dispatch(action), and registering listeners via subscribe(listener).

## 19. What is middleware in Redux?
Answer: Middleware provides a way to extend Redux with custom functionality. It is used for logging, crash reporting, performing asynchronous actions, etc. Examples include redux-thunk and redux-saga.

## 20. What is the difference between useEffect and componentDidMount?
Answer: componentDidMount is a lifecycle method in class components that runs once after the component is mounted. useEffect is a hook in functional components that can run after every render by default, but can be controlled with dependencies to mimic componentDidMount behavior.

## 21. What is React Router?
Answer: React Router is a standard library for routing in React. It enables navigation among views or pages in a React application, allowing for dynamic routing.

## 22. How do you handle forms in React?
Answer: Forms in React are handled using controlled components. Controlled components have their form data controlled by the component's state. The input field values are set by the state and updated via event handlers like onChange.

Example:
```
javascript
Copy code
import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + name);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```
23. What is the use of ref in React?
Answer: The ref attribute is used to get direct access to a DOM element or a class component instance in React. Refs can be used to manage focus, text selection, trigger animations, or integrate with third-party DOM libraries.

Example:
```
javascript

import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}
```
## 24. What are higher-order components (HOC)?
Answer: Higher-order components are functions that take a component and return a new component with additional props or behavior. They are used for reusing component logic.

## 25. What is the difference between React.Fragment and a regular HTML element?
Answer: React.Fragment allows you to group multiple elements without adding extra nodes to the DOM. Unlike regular HTML elements, it does not create a wrapper element in the DOM.

## 26. What are controlled and uncontrolled components?
Answer: Controlled components have their state managed by React, usually through state and event handlers. Uncontrolled components store their own state internally and use refs to access DOM values directly.

## 27. What is code-splitting in React?
Answer: Code-splitting is a technique used to split the application into smaller chunks to improve load time. React supports code-splitting using dynamic import() and libraries like React.lazy and React.Suspense.

## 28. What is the purpose of React.lazy?
Answer: React.lazy allows you to render a dynamic import as a regular component. It enables code-splitting and lazy loading of components, reducing the initial load time of the application.

## 29. What is a React Portal?
Answer: A React Portal provides a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

## 30. What is reconciliation in React?
Answer: Reconciliation is the process by which React updates the DOM. React compares the new element with the previous one and updates the DOM only where changes have occurred.

## 31. What is the difference between useReducer and useState?
Answer: Both useReducer and useState are hooks for managing state in functional components. useState is suitable for simple state logic, while useReducer is better for complex state logic where state transitions depend on the previous state.

Example:
```
javascript
Copy code
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
    </div>
  );
}
```
## 32. What is useCallback hook?
Answer: The useCallback hook returns a memoized version of a callback function that only changes if one of the dependencies has changed. It is useful to prevent unnecessary re-renders of child components.

Example:
```
javascript
Copy code
import React, { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}
```
## 33. What is useMemo hook?
Answer: The useMemo hook returns a memoized value that only recomputes when one of the dependencies has changed. It is useful to optimize performance by avoiding expensive calculations on every render.

Example:

javascript
```
import React, { useState, useMemo } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  const result = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <p>Result: {result}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
## 34. What is useRef hook?
Answer: The useRef hook returns a mutable ref object whose .current property is initialized to the passed argument. It persists throughout the component's lifecycle and can be used to access DOM elements or store mutable values.

Example:

javascript
Copy code
import React, { useRef, useEffect } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}
## 35. What is useContext hook?
Answer: The useContext hook allows you to access the value of a context directly without needing a Consumer component. It simplifies accessing context values in functional components.

Example:
```
javascript
Copy code
import React, { useContext, createContext } from 'react';

const MyContext = createContext('default value');

function MyComponent() {
  const value = useContext(MyContext);

  return <div>{value}</div>;
}

function App() {
  return (
    <MyContext.Provider value="Hello, World!">
      <MyComponent />
    </MyContext.Provider>
  );
}


##For more reference checkout this repo:
<link href="https://github.com/aatul/ReactJS-and-Redux-Questions-Answers">React-redux questions</link>
