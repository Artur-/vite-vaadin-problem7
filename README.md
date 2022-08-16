To test:

1. `npm install`
2. `npm run dev`
Open the app in the browser and see that the shown styles contain something like
```
@font-face{font-family:'Line Awesome Brands';font-style:normal;font-weight:400;font-display:auto;src:url(/node_modules/line-awesome/dist/line-awesome/fonts/la-brands-400.eot);
```

3. Stop dev server, build using `npm run build`
4. Serve the files in `dist`  using e.g. `serve dist` 
5. Open the app in the browser 
```
@font-face{font-family:Line Awesome Brands;font-style:normal;font-weight:400;font-display:auto;src:url("+new URL('la-brands-400.c0e32387.eot', import.meta.url).href+");
```
