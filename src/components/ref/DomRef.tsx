import { useRef, useEffect } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    console.log(inputRef.current.focus());
  }, []);
  return <input ref={inputRef} type="text" />;
};

export default DomRef;
