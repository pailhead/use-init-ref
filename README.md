# use-init-ref

[![npm version](https://img.shields.io/npm/v/@pailhead/use-init-ref.svg)](https://www.npmjs.com/package/@pailhead/use-init-ref)

## Demo

[Codesandbox](https://codesandbox.io/p/sandbox/useref-yydrkz?file=%2Fsrc%2FApp.tsx)

![](https://github.com/pailhead/use-init-ref/blob/master/useRef.gif)

## Usage

Be explicit that `useInitRef` takes an initializer, use normal `useRef` for primitives.

```
import {useInitRef} from '@pailhead/use-init-ref'
const myRef = useInitRef(()=>new Matrix4())
```

Or, if you want to just swap out `useRef` altogether, you can overload it like so:

```
import {useRef} from '@pailhead/use-init-ref'
const myRef = useRef(null,()=>new Matrix4())
```

`myRef` gets inferred as `MutableRefObject<Matrix4>`

## Issues

The most concise and easiest way to get what you want is to express it like so:

```
const myRef = useRef(new Matrix4())
```

But this will create a new instance of `Matrix4()` every time the component renders. It's not a memory leak, as these will eventually be garbage collected. The docs say to do this:

```
const myRef = useRef<?>(null)
if(myRef.current===null){
  myRef.current = new Matrix4()
}
```

But for TS users, what do you declare as a type?

- Just passing `null` will infer it as `MutableRefObject<null>`
- Typing it as `Matrix4()` requires you to cast `null` as something
- Typing it as `Matrix4|null` changes the whole program

In general, TS or not, if you want to later nullify this reference, ie do:

```
myRef.current = null
```

It seems impossible, since the render loop would just instantiate it again.

Some suggested:

```
const [myMatrix] = useState(()=>new Matrix4())
```

But you don't get a `MutableRefObject` at all, there is no `current` to be changed.
