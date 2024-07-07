# Demo

[Codesandbox](https://codesandbox.io/p/sandbox/useref-yydrkz?file=%2Fsrc%2FApp.tsx)

![](https://github.com/pailhead/use-init-ref/blob/master/useRef.gif)

# Description

You can call this:

```
const myRef = useInitRef(()=>new Matrix4())
```

Instead of:

```
const myRef = useRef(new Matrix4())
```

Or this - has problems with typescript and is convoluted:

```
const myRef = useRef<?>(null)
if(myRef.current===null){
  myRef.current = new Matrix4()
}
```

Or this - requires destructuring and doesnt actually return a ref:

```
const [myMatrix] = useState(()=>new Matrix4())

// later, you are unable to change the contents
// ? = new Vector4()
```

`useInitRef` allows you to pass the initializer function like you would in `useState` but you get `MutableRefObject<T>` as you would with normal `useRef`.

If used on primitives eg `foo` or `5`, best to just use the normal `useRef`.
