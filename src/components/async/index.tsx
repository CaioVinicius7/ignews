import { useEffect, useState } from "react";

export function Async() {
  const [isFirstButtonVisible, setIsFirstButtonVisible] = useState(false);
  const [isSecondButtonVisible, setIsSecondButtonVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsFirstButtonVisible(true);
      setIsSecondButtonVisible(false);
    }, 2000);
  }, []);

  return (
    <div>
      <p>Hello, world!</p>
      {isFirstButtonVisible && <button>First Button</button>}
      {isSecondButtonVisible && <button>Second Button</button>}
    </div>
  );
}
