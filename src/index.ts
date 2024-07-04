import { type MutableRefObject, useState } from "react";

export const useInitRef = <T = unknown>(current: T): MutableRefObject<T> => {
  const [ref] = useState(() => ({ current }));
  return ref;
};
