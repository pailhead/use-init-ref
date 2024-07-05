import { type MutableRefObject, useState } from "react";

export const useInitRef = <T = unknown>(init: () => T): MutableRefObject<T> => {
  const [ref] = useState(() => ({ current: init() }));
  return ref;
};

const foo = useInitRef(() => 1);
