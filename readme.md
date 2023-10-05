# PDF Generator

This is a simple pdf generator which reads html from a template. Although it can customized to receive html as body as render that as pdf but it will lead to some security issues.

## Installation

Use the package manager npm/yarn to install packages.

```bash
npm install
```

```bash
// start server
npm run start
```

It will start the server and start listening on the default port 3000.

## API

Once the server start, visit [localhost:3000/generate-pdf](localhost:3000/generate-pdf) api. It will download the generated pdf.

## Approach

We are using templates engine mustache to feed the dynamic data to template and render the charts.
Once html is created then we start a headless chrome browser which takes the html and visits the page with html and screenshots them and creates a pdf.
Created pdf is returned to the user.

## License

[MIT](https://choosealicense.com/licenses/mit/)
