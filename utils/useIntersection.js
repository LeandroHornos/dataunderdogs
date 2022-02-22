/*
This custom hook was taken for the example found at this url:
https://varun.ca/scrollytelling/

The author explains:
"I wrote a custom hook that tracks all elements of a specific type, 
within a particular parent element. 
And then executes a callback when one of them enters the target area."
*/

import { useEffect } from "react";

export const useIntersection = (ref, selector, handler, options) => {
  useEffect(() => {
    const observers = [];

    if (ref.current && typeof IntersectionObserver === "function") {
      const handleIntersect = (idx) => (entries) => {
        handler(entries[0], idx);
      };

      ref.current.querySelectorAll(selector).forEach((node, idx) => {
        const observer = new IntersectionObserver(
          handleIntersect(idx),
          options
        );
        observer.observe(node);
        observers.push(observer);
      });

      return () => {
        observers.forEach((observer) => {
          observer.disconnect();
        });
      };
    }
    return () => {};
  }, [ref.current, options.threshold, options.rootMargin]);
};
