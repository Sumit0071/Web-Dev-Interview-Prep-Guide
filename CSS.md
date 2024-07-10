## CSS Questions and Answers

1. **What is the difference between `margin` and `padding` in CSS?**
   - `Margin` is the space outside the border of an element, while `padding` is the space inside the border, between the border and the content.

2. **Can you explain the CSS box model?**
   - The CSS box model consists of four parts: content, padding, border, and margin. It determines how elements are sized and spaced:
     ```css
     element {
         width: 100px;
         padding: 10px;
         border: 5px solid;
         margin: 20px;
     }
     ```

3. **What are the different ways to apply CSS to an HTML document?**
   - Inline CSS:
     ```html
     <h1 style="color: blue;">Hello</h1>
     ```
   - Internal CSS:
     ```html
     <style>
     h1 { color: blue; }
     </style>
     ```
   - External CSS:
     ```html
     <link rel="stylesheet" href="styles.css">
     ```

4. **What is the difference between inline, internal, and external CSS?**
   - Inline CSS is applied directly to elements using the `style` attribute. Internal CSS is placed within a `<style>` tag inside the `<head>` section. External CSS is defined in a separate file and linked to the HTML document.

5. **Explain CSS specificity and how it works.**
   - CSS specificity determines which style rules apply to an element when multiple rules match. Specificity is calculated based on the types of selectors used (inline styles, IDs, classes, elements):
     - Inline styles: 1000
     - IDs: 100
     - Classes, attributes, and pseudo-classes: 10
     - Elements and pseudo-elements: 1

6. **What are pseudo-classes and pseudo-elements in CSS? Give examples.**
   - Pseudo-classes target elements based on their state:
     ```css
     a:hover { color: red; }
     ```
   - Pseudo-elements target parts of elements:
     ```css
     p::first-line { font-weight: bold; }
     ```

7. **How do you create a flexbox layout in CSS?**
   - Flexbox is used to create flexible and responsive layouts:
     ```css
     .container {
         display: flex;
     }
     .item {
         flex: 1;
     }
     ```

8. **What is the CSS Grid layout? How does it differ from flexbox?**
   - CSS Grid layout is a two-dimensional layout system for web pages. Unlike flexbox, which is one-dimensional (either row or column), grid allows for layouts in both rows and columns:
     ```css
     .container {
         display: grid;
         grid-template-columns: repeat(3, 1fr);
     }
     .item {
         grid-column: span 2;
     }
     ```

9. **How do you implement responsive design in CSS?**
   - Responsive design adjusts the layout based on screen size using flexible grids, fluid images, and media queries:
     ```css
     @media (max-width: 600px) {
         .container {
             flex-direction: column;
         }
     }
     ```

10. **What are media queries in CSS? How do they work?**
    - Media queries allow the application of styles based on the characteristics of the device (e.g., screen size, resolution):
      ```css
      @media (max-width: 768px) {
          body {
              background-color: lightblue;
          }
      }
      ```

11. **How do you center a div horizontally and vertically using CSS?**
    - Using flexbox:
      ```css
      .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
      }
      ```
    - Using CSS Grid:
      ```css
      .container {
          display: grid;
          place-items: center;
          height: 100vh;
      }
      ```

12. **What are CSS preprocessors? Name a few and explain their benefits.**
    - CSS preprocessors like Sass, Less, and Stylus allow for more complex stylesheets with features like variables, nesting, mixins, and functions, making CSS more maintainable and scalable.

13. **Explain the concept of CSS inheritance.**
    - Inheritance in CSS means that certain properties are passed from parent elements to their children. Properties like `color`, `font-family`, and `line-height` are typically inherited, while properties like `margin` and `padding` are not.

14. **How do you create animations in CSS?**
    - Using the `@keyframes` rule and the `animation` property:
      ```css
      @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(100px); }
      }
      .element {
          animation: slide 2s infinite;
      }
      ```

15. **What are CSS transitions? How do you use them?**
    - CSS transitions allow changes in CSS properties to occur smoothly over a specified duration:
      ```css
      .element {
          transition: background-color 0.5s;
      }
      .element:hover {
          background-color: blue;
      }
      ```

16. **What is the purpose of the `z-index` property in CSS?**
    - The `z-index` property controls the stacking order of elements. Elements with a higher `z-index` value are displayed in front of those with a lower value:
      ```css
      .element1 { z-index: 1; }
      .element2 { z-index: 2; }
      ```

17. **What are CSS variables? How do you use them?**
    - CSS variables, or custom properties, are defined with `--` and accessed using the `var()` function:
      ```css
      :root {
          --main-color: #06c;
      }
      .element {
          color: var(--main-color);
      }
      ```

18. **How do you use custom fonts in a web page using CSS?**
    - Using the `@font-face` rule to define the font and then applying it to elements:
      ```css
      @font-face {
          font-family: 'CustomFont';
          src: url('customfont.woff2') format('woff2');
      }
      .element {
          font-family: 'CustomFont', sans-serif;
      }
      ```

19. **What is the `display` property in CSS? Explain different display values.**
    - The `display` property specifies how an element is displayed:
      - `block`: Element is displayed as a block (e.g., `<div>`, `<p>`).
      - `inline`: Element is displayed inline (e.g., `<span>`, `<a>`).
      - `inline-block`: Element is displayed inline but behaves like a block element.
      - `none`: Element is not displayed.

20. **How do you style forms and inputs in CSS?**
    - You can style forms and inputs using standard CSS properties:
      ```css
      input[type="text"] {
          border: 1px solid #ccc;
          padding: 10px;
          width: 100%;
      }
      button {
          background-color: #06c;
          color: white;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
      }
      ```
