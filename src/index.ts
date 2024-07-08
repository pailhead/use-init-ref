import { type MutableRefObject, useState } from "react";

export const useInitRef = <T = unknown>(init: () => T): MutableRefObject<T> => {
  const [ref] = useState(() => ({ current: init() }));
  return ref;
};

export const useRef = <T = unknown>(
  value: T | null | undefined,
  init?: () => T
): MutableRefObject<T> => {
  const [ref] = useState(() => ({ current: init?.() ?? value! }));
  return ref;
};
