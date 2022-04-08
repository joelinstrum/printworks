import { useRef, useEffect, useState } from "react";

function useOutsideClick(ref) {
  const [now, setNow] = useState(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setNow(Date.now());
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return now;
}

const ClickOutside = ({ onOutsideClick, children }) => {
  const wrapperRef = useRef(null);
  const clicked = useOutsideClick(wrapperRef);
  useEffect(() => {
    onOutsideClick();
  }, [clicked]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default ClickOutside;
