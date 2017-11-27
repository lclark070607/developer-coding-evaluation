# Developer Coding Evaluation

## Instructions
Say hello to the Cardinal Solutions coding evaluation. You'll be taking a single page mockup and converting it to HTML, CSS, Javascript. Fork this repository to begin your project. All assets (images, fonts) are included in the project. You're welcome to set up the code and folder structure however you wish. All HTML, CSS, and Javascript must be writen from scratch.

- Task runners like Gulp or Webpack can be used
- A pre-processor like Sass can also be used.
- UI frameworks like Bootstrap, Foundation, Material, may not be used.
- The UI may be build in static HTML or you may use React, Angular, Vue or the like.

Once complete, your site should be deployed to Github Pages.

## Mockups

1. [Desktop](https://github.com/cardinal-solutions/developer-coding-evaluation/blob/master/mockups/mockup-desktop.png)
2. [Mobile](https://github.com/cardinal-solutions/developer-coding-evaluation/blob/master/mockups/mockup-mobile.png)


## Evaluation Criteria

### Code (25 points)

- **Cleanliness (0-10)** <br /> All code (HTML/CSS/JS) is organized, readable, efficient and current. Folder structure is well organized.
- **Semantics (0-10)** <br /> Logical elements and class/ID names are used.
- **Validation (0-5)** <br /> HTML will be validated with the W3C Markup Validation Service. 100% valid HTML isn't necessary but thoroughness is encouraged. 

### User Experience (40 points)

- **Match Original Design (0-10)** <br /> Submission should match original design as closely as possible.
- **Accessibility (0-10)** <br /> Smart choices - Covers any accessibility concerns, Elements that should be text are text, buttons are flexible, rollovers look good, etc.
- **Interactions (0-10)** <br /> Additional states (rollovers, focus, etc) are not in place in the original design. These should be treated in a way that is consistent with the original design. 
- **Responsive (0-10)** <br /> The submission should be responsive across multiple form factors and platforms

### Browser Support, Optimization, & Performance (35 points)

- **Modern Browser Support (0-10)** <br /> Submission should render well in in the latest versions of: Firefox, Safari, Chrome, and Edge
- **Legacy Browser Support (0-5)** <br /> Submission should gracefully degrade in Internet Explorer 10 & 11
- **Overall Project Size (0-10)** <br /> Anything that is custom for this project needs to be able to be examined. 
- **Resource Optimization (0-10)** <br /> Files, fonts, images, and code should be optimized for speed and efficiency.  All libraries, frameworks, javascript, images, and css must be included in the project. Do not link to external libraries or frameworks.

### Extra Points (10 points)
- **Build System (0-5)** <br /> Using a task runner like Gulp or Webpack can be used to automate optimizations and creating production-ready files. The source files should be kept separate for evaluation.
- **Pre-Processor (0-5)** <br /> A CSS pre-processor like Sass, Less, or Stylus can be used to streamline your CSS. Original source files must be provided.

Louise Clark Notes:

For optimization purposes concerning Flexbox I used Autoprefixer in my Gulp workflow.  This is how I was taught to add the prefixes and optimize for Flexbox.  Honestly, I don't know how to code from scratch the various website variations.  I did want to optimize the site for this issue however, as flexbox is not always accessible on older and different browsers.

I used a font face generator for the given fonts so that they could be generated for cross browsing optimization.  Like the autoprefixer, I don't know how to write this code from scratch.  I do know that it is important to use fonts that are available for all the different browsers.




