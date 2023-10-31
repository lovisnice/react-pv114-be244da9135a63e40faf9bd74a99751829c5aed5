export default function About() {
    return (
        <>
            <h1>Difference between Functional and Class Components in React</h1>

<h2>1. Component Definition</h2>
<p>
    <strong>Functional Components:</strong>
    Functional components are simple JavaScript functions that take input data (props) and return a virtual DOM element (React element) to be displayed on the page.
</p>

<p>
    <strong>Class Components:</strong>
    Class components are JavaScript classes that inherit from the base class `React.Component`. They have React lifecycle methods like `render()`, `componentDidMount()`, etc., to control the component's behavior.
</p>

<h2>2. Passing Props</h2>
<p>
    <strong>Functional Components:</strong>
    Props are passed to functional components as function arguments and are accessible as the `props` parameter.
</p>

<p>
    <strong>Class Components:</strong>
    Props are also passed to class components as `props`, but they are accessed via `this.props`.
</p>

<h2>3. Component State</h2>
<p>
    <strong>Functional Components:</strong>
    Prior to React 16.8, functional components had no internal state. With the introduction of React Hooks, functional components can now manage state using hooks like `useState`.
</p>

<p>
    <strong>Class Components:</strong>
    Class components have internal state that can be updated using `this.setState()`. State is useful for managing and updating data in response to events or asynchronous requests.
</p>

<h2>4. Lifecycle Methods</h2>
<p>
    <strong>Functional Components:</strong>
    Before the introduction of hooks, functional components had no built-in lifecycle methods. With hooks, you can use `useEffect` to perform side effects.
</p>

<p>
    <strong>Class Components:</strong>
    Class components have a full set of lifecycle methods such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` for managing component lifecycle events.
</p>

<p>
    Please note that with the introduction of React Hooks, many developers are transitioning to using functional components because they offer a convenient syntax and allow state management and side effects, which were previously available only in class components. Both approaches have their use cases, and the choice between them depends on the specific needs of your project.
</p>
        </>
    );
}