TYPEWRITER
==========

A dynamic jQuery plugin to add a "typewriter" letter-by-letter accent that is great for adding emphasis to your content.

## Download
Download jquery.typewriter.js and put the file into your project's root directory.

## Put in your HTML
Remember to include the sound file and jQuery followed by the plugin script in your HTML document *before* the closing body tag.

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="js/jquery.typewriter.js"></script>
```

## Add CSS Information
Add the following code to your CSS file

```
.typeAction {
	visibility:hidden;
}

span {
	padding-left:2px;
	/*color: #595959;*/
	animation: blink 700ms steps(1) infinite: ;
  -webkit-animation: blink 700ms steps(1) infinite;
}

	@keyframes blink { 50% { color: transparent; } }
	@-webkit-keyframes blink { 50% { color: transparent; } }
}
```

## Initialize the Typewriter
Paste the following code inside your primary JavaScript file to input and start the effect.

**NOTE:** Replace the 'X' with the element you'd like to focus the effect on (i.e. 'h1')

```
$(function() {
	$('X').typewriter({
	});
});
```

## Customization Options

#### Sound
#### Visible Cursor
#### Cursor Color
#### Random Type Speed