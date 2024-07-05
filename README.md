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
