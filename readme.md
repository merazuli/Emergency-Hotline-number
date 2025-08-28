
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer:
* GetElementById is a JavaScript DOM method used to select a single HTML element
* GetElementsByClassName is Javascript DOM method used to select all Html class.
* QuerySelector is a JavaScript DOM method.QuerySelector selects the first element matches a CSS selector.
* QuerySelectorAll is selects all elements that match a given CSS selector.


2. How do you **create and insert a new element into the DOM**?
Answer:
* Step 1: Create a new element.
* Step 2: Add content or attributes.
* Step 2: Add content or attributes
* Step 4: AppendChild the parent element of create new element.


3. What is **Event Bubbling** and how does it work?
Answer:
* Event Bubbling is a way events propagate in Document Object Model.when you click the button childnode .The event bubbles up to the parent <div> shows Parent div clicked.If Close event bubbling call a function even.stopPropagation().


4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer:
* Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element.it is a separate listener multiple child element.It is better than Event Bubbling.


5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:
* preventDefault() It is stop default action one an element from happening .not a stop event bubbling..
* stopPropagation() It is stop the parent element bubbling.Not stop default Action,..
