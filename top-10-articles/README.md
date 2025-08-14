## This is an application to build react apps from reactpractice.dev to enhance my skills in React

1. Build a React application that shows the national holidays for the current year, for a given country.

The main screen should show:

- a dropdown with a list of countries
- a list of public holidays for the selected country
You can retrieve a list of available countries and their holidays from the OpenHolidays API. Use English (en) for the `languageIsoCode`.
- By default, you should show the holidays for The Netherlands.

2. Show 10 articles from the Hacker News API

- use the Hacker News "Top Articles" API
- for each article, display its score, title, url and author
- do not display the article details until all the data is loaded

The catch of this challenge is that you can fetch the 500 top Stories Id, get the 10 first by using slice, and then fetch the 10 urls in pararel, map them inside a promise all.

3. Build a custom useFetch hook

The code should

- return the response from the server
- handle error and loading states
- support custom headers through an options parameter
- support all HTTP methods - e.g. both GET and POST requests
- Use TypeScript