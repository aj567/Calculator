# Calculator
## Table of content:
- [Introduction](#introduction)
- [HTML and CSS](#htmlandcss)
- [Javascript](#javascript)

<a id="introduction"></a>
# Introduction
This web-app is made using HTML, CSS and Javascript. I am making this app to learn web development. [Click here](https://calculator-plum-iota.vercel.app/) to view the web-app.

<a id="htmlandcss"></a>
# HTML and CSS
The calculator buttons are displayed using the button element in HTML. The buttons are displayed in rows using flexbox layout of CSS and setting justify-content property as space-between.

I wanted the calculator display to have two rows: top row will show the buttons clicked and the bottom row will show the answer after calculation. My first choice was the textarea HTML element. However, I wanted different CSS styling for the two rows of textarea, which I was not able to do. (I think it is not possible to do that in textarea, but I might be wrong.)

So instead of textarea, I chose two separate div elements to display the two rows. Applying different CSS styling to the two rows was straightforward. I set double as the border property of the div containing the two row-divs to make it visually look like a textarea.

<a id="javascript"></a>
# Javascript
The script uses the addEventListener method to listen to the 'click' events on the calculator buttons. When a button is clicked, the next actions to be performed are decided using the if-else block.

If AC button is clicked then the contents of both rows of display are deleted. If DEL button is clicked then only the last character of row-1 (i.e. the last button clicked) is deleted. If any number button or mathmatical operator button (+, -, *, /) is clicked, then it is added to the previous content of row-1 of display. If = or % button is pressed then the script evaluates the value of expression in the row-1 of display and it is shown in row-2.

I used the eval() function to calculate the value of mathematical expression stored as string. However the eval() function does not evaluate the expression when it has percentage symbol (i.e. '%') in it. Therefore, I created a function named evaluate() which searched for the % symbol in the expression and replaced it with '/100' and then evaluated the expression.
