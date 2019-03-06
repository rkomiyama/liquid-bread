# liquid-bread

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Run styleguide

```
npm run styleguide
```

And then go to `http://localhost:6060/`

### Run on a Docker container

```
docker pull rkomiyama/liquid-bread
docker run -t -p 8080:8080 rkomiyama/liquid-bread
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

## Developer's notes

### Design choices

For this project, I decided to go with VueJS and Vuetify. Vuetify is already
packed with well-designed UI components with nice animations and transitions.

I chose a dark theme since darker backgrounds seem easier on the eyes.

The toolbar is fixed at the top of the viewport since it allows easy access to
the search filters and column headers list. It can be collapsed for more
vertical space.

### Implementation for v2

One thing that this version lacks is the ability to handle search cases where
there are more than 80 beers. Granted, the API's pagination feature can be
used, but the problem is that there's no way to tell how many beers there are
in total. That makes it difficult to know how many "pages" a user can go
through. It's not as easy as making multiple calls for each search case, as
the API limits requests by 3600 per hour. While it's unlikely that a normal
user will ever hit that limit, we must take that into account. So for v2, it
would be great if the API could return a numerical value for the amount of
different beers from a search case.
