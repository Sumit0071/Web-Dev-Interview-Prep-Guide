## HTML Questions and Answers

1. **What is the difference between HTML and XHTML?**
   - HTML (HyperText Markup Language) is less strict in terms of syntax, whereas XHTML (Extensible HyperText Markup Language) is a stricter, XML-based version of HTML. XHTML requires all tags to be properly closed, tags must be in lowercase, and attributes must be quoted.

2. **Can you explain the structure of an HTML document?**
   - An HTML document typically includes:
     ```html
     <!DOCTYPE html>
     <html>
     <head>
         <title>Document Title</title>
         <meta charset="UTF-8">
         <link rel="stylesheet" href="styles.css">
     </head>
     <body>
         <h1>Hello, World!</h1>
         <p>This is a paragraph.</p>
         <script src="script.js"></script>
     </body>
     </html>
     ```

3. **What are semantic HTML elements? Give examples.**
   - Semantic elements clearly describe their meaning in a human- and machine-readable way. Examples include `<header>`, `<footer>`, `<article>`, `<section>`, `<aside>`, and `<nav>`.

4. **How do you create a hyperlink in HTML?**
   - You create a hyperlink using the `<a>` tag:
     ```html
     <a href="https://www.example.com">Visit Example</a>
     ```

5. **What are the different types of lists available in HTML?**
   - HTML supports three types of lists:
     - Ordered list (`<ol>`)
     - Unordered list (`<ul>`)
     - Description list (`<dl>`)

6. **What is the purpose of the `alt` attribute in an `<img>` tag?**
   - The `alt` attribute provides alternative text for an image if the image cannot be displayed. It also improves accessibility and SEO.

7. **How do you embed a video in an HTML document?**
   - You can embed a video using the `<video>` tag:
     ```html
     <video controls>
         <source src="movie.mp4" type="video/mp4">
         Your browser does not support the video tag.
     </video>
     ```

8. **What is the difference between `id` and `class` attributes in HTML?**
   - The `id` attribute uniquely identifies an element (should be unique within the document), whereas the `class` attribute is used to define a group of elements that can share the same style or behavior.

9. **Explain the concept of HTML5 web storage.**
   - HTML5 web storage allows websites to store data on the client's browser. There are two types: `localStorage` (persists until explicitly deleted) and `sessionStorage` (persists for the duration of the page session).

10. **What are data attributes in HTML? How do you use them?**
    - Data attributes are custom attributes added to HTML elements using the `data-*` format. They allow embedding custom data in elements:
      ```html
      <div data-user-id="12345">User</div>
      ```

11. **How do you create a form in HTML? What are some common form elements?**
    - A basic form includes elements like `<input>`, `<textarea>`, `<button>`, `<select>`, and `<label>`:
      ```html
      <form action="/submit" method="POST">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name">
          <button type="submit">Submit</button>
      </form>
      ```

12. **What is the purpose of the `meta` tag in HTML?**
    - The `meta` tag provides metadata about the HTML document, such as character set, viewport settings, author, and description:
      ```html
      <meta charset="UTF-8">
      <meta name="description" content="Free Web tutorials">
      <meta name="keywords" content="HTML,CSS,XML,JavaScript">
      <meta name="author" content="John Doe">
      ```

13. **How do you include external CSS and JavaScript files in HTML?**
    - For CSS:
      ```html
      <link rel="stylesheet" href="styles.css">
      ```
    - For JavaScript:
      ```html
      <script src="script.js"></script>
      ```

14. **What is the `doctype` declaration? Why is it important?**
    - The `doctype` declaration defines the document type and version of HTML being used. It ensures that the browser renders the page in standards mode:
      ```html
      <!DOCTYPE html>
      ```

15. **Explain the use of the `iframe` tag in HTML.**
    - The `<iframe>` tag is used to embed another HTML document within the current document:
      ```html
      <iframe src="https://www.example.com" width="600" height="400"></iframe>
      ```
