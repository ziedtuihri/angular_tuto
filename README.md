# angular_tuto

<h3> button tag vs input type=”button” attribute </h3>

The <input type=”button”> and <button> tag are two different approach to use Button in HTML document. The difference between them is that the buttons created with the <button> tag offer many contributing possibilities than <input type=”button”> attribute.<br>

Just as a side note, <button> will implicitly submit, which can cause problems if you want to use a button in a form without it submitting. Thus, another reason to use <input type="button"> (or <button type="button">).<br>

There are 3 supported types for a button



```diff
+  submit ||  "submits the form when clicked (default)"
+  reset  ||  "resets the fields in the form when clicked"
+  button ||  "clickable, but without any event handler until one is assigned"
```


<h3> slice(), splice(), split() methods on Javascript </h3>

<a href="https://www.freecodecamp.org/news/lets-clear-up-the-confusion-around-the-slice-splice-split-methods-in-javascript-8ba3266c29ae/">Link</a>

<h3> Angular Form </h3>

From the docs on Reactive forms

    Reactive forms provide a model-driven approach to handling<br> form inputs whose values change over time. <br>This guide shows you how to create and update a simple form control, progress to using multiple controls in a group,<br> validate form values, and implement more advanced forms.

And Dynamic forms...

    Building handcrafted forms can be costly and time-consuming,<br> especially if you need a great number of them,<br> they're similar to each other, and they change frequently to meet rapidly changing business and regulatory requirements.<br> It may be more economical to create the forms dynamically,<br> based on metadata that describes the business object model.
