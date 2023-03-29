# angled-underline-fill
This is a Houdini CSS worklet that uses the paint API to make a custom underline option.

If you install this worklet from npm, apply it like this:
Install with npm-cli

	npm install angled-underline-fill
		
Then in your .js file

	CSS.paintWorklet.addModule(
	"node_modules/angled-underline-fill/angled-underline-fill.js"
	);
---
 
If you prefer not to install it and use it live, you can use it like this on your .js file:

	CSS.paintWorklet.addModule(
	"unpkg.com/angled-underline-fill/angled-underline-fill.js"
	);
## Properties:
- "--lines-width" : Width of the underline & sideline. (number)
- "--lines-fill-color" : Color of the underline & sideline. (color)
- "--lines-fill-height": Height of the fill. (number)
- "--lines-border-color": Color of the fill. (color)
- "--lines-angle": Angle of the sideline & fill. (number)