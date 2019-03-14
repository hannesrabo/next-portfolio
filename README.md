<p align="center">
    <img src="./static/favicons/android-chrome-192x192.png"><h1>Portfolio</h1>
</p>

<p align="center">
    <a href="https://circleci.com/gh/hannesrabo/next-portfolio">
        <img src="https://circleci.com/gh/hannesrabo/next-portfolio.svg?style=svg">
    </a>
    <img src="https://lighthouse-badge.appspot.com/?score=100">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
    <img src="https://img.shields.io/github/release/hannesrabo/next-portfolio.svg">
    <img src="https://img.shields.io/github/license/hannesrabo/next-portfolio.svg">
</p>



This is the source code for my portfolio site available at <https://hannesrabo.github.io>. 

## Running the code

To run the code for development purposes run:

``````bash
> yarn install
> yarn start
``````



## Building static

Exporting the page for static hosting can be done using

```bash
> yarn build 		# builds icons and then web page
> yarn export		# Create static export from site
```



## Debugging static

Sometimes there is a difference in statically exported pages compared to the dynamic development environment. A static http server has to be installed and the npm package `http-serve` was used here. To test the export before committing use:

```bash
> npm install -g http-server
> yarn stest
```





## Look into:

Things that are coming in the future:

-   [ ] Add linting and reformat hook
-   [ ] Dynamic SVG generation
-   [ ] Look into integrating: https://github.com/GoogleChromeLabs/lighthousebot
