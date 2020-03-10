# Jekyll Stuff

All CSS is written via the `styles.scss` file.

Then the files go through concatenation, compression, and auto-prefixing. They get output to styles.css.

`npm run build:css` to build the css and compile it into the styles.css file.

<!-- When serving locally using `jekyll serve`, your paths to assets are different then when they go into production. When your site is being served locally, your path to assets will look like `/css/styles.css`.

However, when the site is being served by GitHub Pages, you will need to prepend the repository name like so `/miriamforeducation/css/styles.css`. -->

## Development Commands

* $ `jekyll serve -w` - to serve up a dev site on `http://127.0.0.1:4000/miriamforeducation/`. 
* `jekyll build -w` - to create a new build in the `_site` folder. The `-w` flag _should_ watch the file and make a new build whenever there is a change, but I have had mixed results.
* `npm run build:css -w` - to watch and build the CSS file every time there is a change.


## Deployment

All you need 
## Social Links

[Text](https://www.facebook.com/MiriamGCumminsforEducation)