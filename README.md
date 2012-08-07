Facebook-Comment-Resizer
========================

Facebook's comment widget has to be set to a fixed width and that sucks when working with responsive websites. This Mootools Class, once initialized, will re-size the comment boxes to the width of their containers and automatically re-size them if the window is re-sized.

# Dependencies

Mootools Core (I'm using 1.4.5, but I imagine anything above 1.2 will work)

# Options

margin (default - 10): Subtracts this value (x2) from the width of the comment box, to make it fit nicely into the container.

# How to Use

Include the script in your page.

<script src="js/fb-comment-resizer.js"></script>

If you already have FB integration on your website, you may already have FB init function defined, it looks something like:

```javascript
window.fbAsyncInit = function() {
  FB.init({
    appId      : 'YOUR_APP_ID', // App ID
    channelUrl : '//WWW.YOUR_DOMAIN.COM/channel.html', // Channel File
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

  // Additional initialization code here
};
```

If so, initialize FacebookCommentResizer at the end of that function.

```javascript
window.fbAsyncInit = function() {
  FB.init({
    appId      : 'YOUR_APP_ID', // App ID
    channelUrl : '//WWW.YOUR_DOMAIN.COM/channel.html', // Channel File
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

  new FacebookCommentResizer({ margin : 10});
};
```

If you can't find anything like the above code on your page, add a simpler version (most of that is not needed for only comments):

```javascript
window.fbAsyncInit = function() {
  new FacebookCommentResizer({ margin : 10});
};
```