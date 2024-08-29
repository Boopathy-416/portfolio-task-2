# useScroll

**A custom React hook for tracking the scroll position of an element or the window.**

**Installation**

**You can install the scroll-react-hook package using npm or yarn:**


```JSX
npm install use-scroll-hook

# or

yarn add use-scroll-hook


```

**Usage**

**Here's how you can use the useScroll hook in your React components::**

```JSX
import React from 'react';
import useScroll from 'use-scroll-hook';

function ScrollTracker() {
  const scrollPosition = useScroll();

  return (
    <div>
      <p>Horizontal Scroll Position: {scrollPosition.x}</p>
      <p>Vertical Scroll Position: {scrollPosition.y}</p>
    </div>
  );
}

export default ScrollTracker;


```


**You can also track the scroll position of a specific element:**


```JSX

import React from 'react';
import useScroll from 'use-scroll-hook';

function ElementScrollTracker() {
  const ref = React.createRef();
  const scrollPosition = useScroll(ref.current);

  return (
    <div ref={ref} style={{ height: '300px', overflow: 'auto' }}>
      <p>Horizontal Scroll Position: {scrollPosition.x}</p>
      <p>Vertical Scroll Position: {scrollPosition.y}</p>
    </div>
  );
}

export default ElementScrollTracker;


```

**API**

**The useScroll hook accepts an optional argument:**

- element: The element to track the scroll position of (default is window).

**It returns an object with the following properties:**

- x: The horizontal scroll position.
- y: The vertical scroll position.

**Example**

**License**

**This package is licensed under the MIT License - see the [LICENSE](https://chat.openai.com/LICENSE) file for details.**

**Thank you for using scroll-react-hook. If you have any issues, suggestions, or contributions, feel free to open an issue or a pull request on the [GitHub repository](https://github.com/utkcha1205/useScroll). Happy coding!**

