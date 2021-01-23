---
title: From WAI-ARIA to HTML5 and back...or maybe not?
slug: from-wai-aria-to-html5-and-back-or-maybe-not
date_published: 2011-12-05T13:01:17.000Z
date_updated: 2011-12-05T13:01:17.000Z
tags: [ConstraintValidation, HTML5, HTML5Forms, WAI-ARIA]
---

Over the weekend, I gave a presentation at the German [Multimediatreff](http://www.multimediatreff.de). I talked about how to make things more accessible by combining HTML5 and WAI-ARIA in smart ways, using HTML5 where available and appropriate, and enhancing the user experience where HTML5 still has gaps in the implementation. This is a recap of what I showed.

### The premise

The base for my talk is my third [easy ARIA tip](http://www.marcozehe.de/2008/07/16/easy-aria-tip-3-aria-invalid-and-role-alert/), where I enhanced a form with some basic local form validation to help users fill it out and avoid errors upon submission. If you are not or no longer familiar with what I did there, stop reading here and go read that post again as a recap. If you are caught up, let&#8217;s move on!

### From WAI-ARIA to HTML5

Since then, a lot of time has passed, and we&#8217;re now much better equipped with native markup magic that HTML5 supplies us. Thankfully, Firefox and also other browsers implement most, if not all, these features now, so we can move ahead with our changes. To remind you, WAI-ARIA is there to enhance, not substitute, native markup, so whereever possible, we should use native markup when available. These changes are:

1. Strip all JavaScript: Let&#8217;s start clean and see how far the new native markup stuff gets us!
2. Throw out all *`aria-required="true"`* instances and replace them with the HTML5 *required* attribute. This gives us automatic flagging of a required field not only via accessibility APIs, but also through visual indicators. Also, a required field is automatically flagged as invalid if it is empty.
3. For the field &#8216;name&#8217;, add a *pattern* attribute containing a regular expression that defines a valid name consist of some characters, one space, and some more characters. This will cover most cases, and if you&#8217;d like something more complex, consider me giving you some homework. 😉
4. The field &#8220;email&#8221; gets the *type* &#8220;email&#8221;, the field &#8220;website&#8221; gets the *type* &#8220;url&#8221; set. This gives us proper validation of e-mail addresses and URLs respectively right upon entry. Moreover, on mobile devices with a virtual keyboard, the most common extra keys are usually provided right out of the box.

In addition, for a better error message, I am using the non-standard *x-moz-errormessage* attribute on the &#8220;name&#8221; field to tell users that the name was entered wrong rather than the standard &#8220;patterns don&#8217;t match&#8221; error message the browsers usually throw at users in the instance of them having entered a wrong value.

In addition, the name field contains (already in the ARIA example) a title attribute that tells users that a name must consist of at least two words.

Filling out this form now gives us validation upon submission. Firefox sets focus back to any invalid field it finds when users press the &#8220;submit&#8221; button. In addition, an error message is displayed describing the problem.

### &#8230;and back

Our original example, however, was better in that it provided validation right at the point when an entry lost focus. Since this is a dynamically created alert box that is not yet a native HTML5 element, we **have** to resort to WAI-ARIA again to make this work the same, but using the HTML5 validation benefits. So, let&#8217;s enhance our example:

1. Bring back the first two functions from the original ARIA version unchanged. These remove any existing alert box, and they create a new alert with the given message.
2. Adjust the function that is called in the *onblur* handler of the &#8220;name&#8221; and &#8220;email&#8221; fields (see below):

1. First, we have to adjust the function name to something that doesn&#8217;t clash with a reserved word. I used `testIfEntryIsValid`.
2. Now, get rid of the search string and error message parameters. These are no longer needed because the validation is done by the browser, and we simply use the HTML5 form constraints API to ask the browser for the relevant info. Also, the browser provides us with the appropriate error message, so no need to generate one ourselves here.
3. In the if clause, simply ask if the call to the checkValidity() method of the element we obtained in the line above gives us a &#8220;true&#8221; or &#8220;false&#8221; result. If true, simply remove the old alert. If false, create an alert and use the element&#8217;s validationMessage property as the message parameter. The browser will handle the rest for us.
4. Remove the lines that set *aria-invalid*. These are no longer needed, since the browser&#8217;s constraint validation will provide the invalid or valid states automatically.

3. For the &#8220;name&#8221; and &#8220;email&#8221; fields, add back *onblur* handlers pointing to the above function and simply pass in the field&#8217;s ID.

Testing this example, it shows that we&#8217;ve got our original functionality back. In addition, if we ignore the intermediate error messages, the browser&#8217;s validation mechanism will throw us back to any of the wrongly filled out fields upon a submission attempt. Note that not all browsers do this last step. Safari on the Mac, for example, will submit the form even if it contains invalid entries.

### In summary

The new version of our form is much improved over the version we had originally. It still contains some WAI-ARIA where it makes sense, since there is no native HTML5 alert box yet. But the rest is HTML5. The JavaScript code is a bit less bloated since we don&#8217;t have to do our own validation any more, and we benefit from all the builtin constraint validation mechanisms.

Feedback is welcome! But before you throw things at me for my sloppy JavaScript, please keep in mind that this is just a proof of concept. If you would like to re-use this technique, I encourage you to put your best knowledge to use and put in better handling of events or such, appropriate for your web application. 🙂

The example pages can be found (in English and German) at [this address](http://www.marco-zehe.de/examples/). Happy hacking!
