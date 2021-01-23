---
title: 'Easy ARIA tip #3: aria-invalid and role "alert"'
slug: easy-aria-tip-3-aria-invalid-and-role-alert
date_published: 2008-07-16T13:42:11.000Z
date_updated: 2008-07-16T13:42:11.000Z
---

I know, I know, it&#8217;s been a while since I posted my last Easy ARIA tip. But I&#8217;m hoping that this one will find you all excited and willing to play with it some more!

The problem: You have a form, a contact form, for example, that you want to put some accessible error checking into. Common problems are e-mail addresses that are not valid, or a name that does not contain at least a first and a surname.

### The form

Let&#8217;s start out with a simple form.

    
    <html>
    <head>
    <title>Contact form</title>
    </head>
    <body>
    <form method="post" action="post.php">
    <fieldset><legend>Please enter your contact details</legend>
    <label for="name">Your name (required):</label>
    <input name="name" id="name" aria-required="true"/><br />
    <label for="email">E-Mail address (required):</label>
    <input name="email" id="email" aria-required="true"/><br />
    <label for="website">Website (optional):</label>
    <input name="website" id="website"/>
    </fieldset>
    <label for="message">Please enter your message (required):</label><br />
    <textarea name="message" id="message" rows="5" cols="80" aria-required="true"></textarea><br />
    <input type="submit" name="submit" value="Send message"/>
    <input type="reset" name="reset" value="Reset form"/>
    </form>
    </body>
    </html>
    

Straight and simple, but we&#8217;re not here to win beauty prices anyway. 🙂

### Checking for validity and notifying the user

Checking the validity and notifying the user consists of several steps:

1. Checking if the e-mail address or entered name are valid. To keep it simple, we&#8217;ll check whether the e-mail address contains the &#8220;@&#8221; symbol, and if the name entry contains at least 1 space characters &#8221; &#8220;.
2. Setting the field&#8217;s *aria-invalid* attribute and giving it a value of &#8220;true&#8221;.
3. Notifying the user via an alert that the value entered was incorrect. Instead of using an intrusive dialog box created by the JavaScript &#8216;alert&#8217; function, we&#8217;ll use a simple WAI-ARIA widget to do it. This notifies the user, but lets them continue interacting with the form without any interruptions.

All of this happens when the input loses focus, meaning in the &#8220;onblur&#8221; handler.

The JavaScript code I wrote looks like this, inserted above the closing &#8220;head&#8221; tag:

    
      function removeOldAlert()
      {
        var oldAlert = document.getElementById("alert");
        if (oldAlert)
          document.body.removeChild(oldAlert);
      }
    
      function addAlert(aMsg)
      {
        removeOldAlert();
        var newAlert = document.createElement("div");
        newAlert.setAttribute("role", "alert");
        newAlert.setAttribute("id", "alert");
        var msg = document.createTextNode(aMsg);
        newAlert.appendChild(msg);
        document.body.appendChild(newAlert);
      }
    
      function checkValidity(aID, aSearchTerm, aMsg)
      {
        var elem = document.getElementById(aID);
        var invalid = (elem.value.indexOf(aSearchTerm) 
    
    

#### The checkValidity function

The core is the checkValidity function. It takes three parameters: The ID of the input that is to be validated, the term to search for to ensure validity, and the error message to be inserted into the alert.

To see if it is valid, the function checks whether the indexOf the input's value is anything greater than -1. A value of -1 or less is returned if the index of the search term could not be found within the value.

If invalid, the function does two things:

1. It sets the element's *aria-invalid* attribute to "true", which will indicate to screen readers that there is invalid content in here.
2. It will call the addAlert function to add the alert with the provided error message.

If the search term is found, the *aria-invalid* attribute is reset to "true". In addition, any alert that still might be around is removed.

#### The addAlert function

This function first removes any old alerts. The function is simple: It looks for an element with id "alert", and if found, removes that from the document object model.

Next, the function creates a div element to hold the alert text. It gets an ID of "alert". And it gets a role set of "alert". This is actually ARIA-inspired, even though it doesn't say "aria" in the attribute name. The reason is that *role* is based on the XHTML role attribute module that was simply ported to HTML for simplicity.

The text is added to the div element, and the div element is added to the document.

The moment this happens, Firefox will fire an "alert" event to assistive technologies when this div appears. Most screen readers will pick this one up automatically and speak it. This is similar to the Notification Bar in Firefox that prompts you whether you want to save a password. Our one does not have any buttons to press, it just tells us what's wrong.

### Adding the magic to the "onblur" event

All that's left now is add the event handler. We need to change the two inputs for e-mail and name for this:

    
    <input name="name" id="name" aria-required="true" onblur="checkValidity('name', ' ', 'Invalid name entered!');"/><br />
    <input name="email" id="email" aria-required="true" onblur="checkValidity('email', '@', 'Invalid e-mail address');"/><br />
    

### Testing the example

I've put up the above as an [static example page](http://www.marco-zehe.de/examples/Tutorial_aria-invalid_and_role_alert.html) for you to try it out. If you use Firefox 3 and a current supported screen reader, try the following:

1. Enter only your first name as the name. When tabbing, you'll hear an alert that tells you you've entered an invalid name. You can then shift-tab back and correct the error.
2. Enter an e-mail address that has no "@" symbol. When tabbing out of this field, you should hear a warning that says you didn't enter a valid e-mail address.

In both cases, when returning focus to the field in question, your screen reader should tell you that this field is invalid. JAWS 9 supports this, but JAWS 8 does not, so this may not work in all versions of the screen readers supported.

### A few questions that you might have
Why did you put both "(required)" in the label text and the *aria-required* attribute on some of the inputs?Because if this were a real live form, and the site was being visited by a browser that does not yet support ARIA, we'd still want to give an indication that this is a required field.Why don't you set focus back to the invalid field automatically?Because this is not allowed by at least the Windows API specs and possibly others. Also, letting the focus jump around without real user interaction too often is not a nice thing to do in general.
### In conclusion

Personally, it is my hope that websites would include such techniques more often in the future when filling out forms. There's nothing more frustrating than filling out a form with 20 or so fields, submitting it, only to find that field 3 was invalid, and having to go through all fields again to make sure the values were retained, or supplying some information redundantly.

This is one of those examples where, in my opinion, more direct accessibility and user-friendliness can be achieved by explicitly using some JavaScript in combination with ARIA.

I hope you found this little tutorial of some use! I'd welcome your feedback as always!

And of course, you're welcome to enhance this little example as a "homework" to also check whether something valid was entered for the "message" textarea.

##### Previous Easy ARIA tips

1. [aria-required](http://www.marcozehe.de/2008/02/29/easy-aria-tip-1-using-aria-required/)
2. [aria-labelledby and aria-describedby](http://www.marcozehe.de/2008/03/23/easy-aria-tip-2-aria-labelledby-and-aria-describedby/)
