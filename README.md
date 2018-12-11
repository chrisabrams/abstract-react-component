# Abstract React Component
An abstract React Component for TypeScript meant to be used to enable real life testing of components in their true form.

## About
This class was created because I needed access to the root scope of a React component instance for testing and Enzyme proved to be a disappoinment. This setup also enables access to the component's state and other various properties that are not available in Enzyme when a component is mounted within a nested tree.

## Usage
Bring a copy of [the class](./src/index.tsx) into your project (TypeScript will not be happy importing a compiled version).

## Example
See [this test](./test/unit/index.tsx).
