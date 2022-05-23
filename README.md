# OrderList

Author: _beta admin team

## Aufgabe / Task

### Deutsch/German:

Gegeben sind folgende Informationen:
Es gibt x Benutzer-Accounts mit jeweils einem Vornamen und einem Nachnamen.
Zu einem Account existieren y Bestellungen. Eine Bestellung beinhaltet z Artikel mit jeweils einer Beschreibung und einem Preis.

Erstelle eine Datenstruktur aus den unten gegebenen Informationen.
Sortiere die Informationen zuerst nach dem Nachnamen (aufsteigend (A -> Z)), dann die Bestellungen anhand der Nummerierung (aufsteigend) und zuletzt die Artikel nach dem Preis (absteigend).
Zeige die Informationen in einer Tabelle an.


Beispieldaten:

```
Max Mustermann
  - Bestellung 1
    - Schreibtisch (249,99 €)
    - Stuhl (129,99 €)
    
Peter Mueller
  - Bestellung 3
    - Monitor (239,79 €)
  - Bestellung 1
    - Maus (49,49 €)
    - Tastatur (120,00 €)
  - Bestellung 2
    - Mikrofasertuch (7,49 €)
    - Teppich (300,00 €)
    - Mauspad (29,50 €)
    
Julia Vogt
  - Bestellung 2:
    - Laptop Tragetasche (39,99 €)
    - Laptop (742,90 €)
  - Bestellung 1:
    - Handy-Ladekabel (13,90 €)
    
Jan Acker
  - Bestellung 1:
    - Schuhe (83,00 €)
    - Wintermantel (139,99 €)
  - Bestellung 2:
    - Hose (69,99 €)
    - Pullover (69,99 €)
    
Hans Schulz
  - Bestellung 1
    - Rucksack (239,79 €)
  - Bestellung 3
    - Maus (49,49 €)
    - Tastatur (120,00 €)
    - Mauspad (29,50 €)
  - Bestellung 2
    - Mikrofasertuch (7,49 €)
    - Halskette (300,00 €)
```

Hinweise:
  - Das Visualisieren als Tabelle ist nicht vorgeschrieben.

Augenmerk der Challenge:
- Erstellung der Datenstruktur
- Sortierung von Daten
- Verknüpfung von Daten und UI
- Bonus: Styling UI

Beispiel UI:

| Vorname | Nachname   | Bestellung | Artikelbeschreibung | Preis    |
|:--------|:-----------|:-----------|:--------------------|:---------|
| Peter   | Mueller    | 1          | Tastatur            | 120,00 € |
| Peter   | Mueller    | 1          | Maus                |  49,49 € |
| Peter   | Mueller    | 2          | Teppich             | 300,00 € |
| Peter   | Mueller    | 2          | Mauspad             |  29,50 € |
| Peter   | Mueller    | 2          | Mikrofasertuch      |   7,49 € |
| Peter   | Mueller    | 3          | Monitor             | 239,79 € |
| Max     | Mustermann | 1          | Schreibtisch        | 249,99 € |
| Max     | Mustermann | 1          | Stuhl               | 129,99 € |



### Englisch/English

The following information is given:
There are x user accounts, each with a first name and a last name.
There are y orders for an account. An order contains z items, each with a description and a price.

Create a data structure from the information given below.
Sort the information first by last name (ascending (A -> Z)), then the orders by number (ascending) and finally the items by price (descending).
Display the information in a table.


Example data:

```
Max Mustermann
  - Order 1
    - Desk (249,99 €)
    - Chair (129,99 €)
Peter Mueller
  - Order 3
    - Monitor (239,79 €)
  - Order 1
    - Mouse (49,49 €)
    - Keyboard (120,00 €)
  - Order 2
    - Microfiber cloth (7,49 €)
    - Carpet (300,00 €)
    - Mouse pad (29,50 €)
Julia Vogt
  - Order 2:
    - Laptop carrying case (39,99 €)
    - Laptop (742,90 €)
  - Order 1:
    - Cell phone charging cable (13,90 €)
Jan Acker
  - Order 1:
    - Shoes (83,00 €)
    - Winter coat (139,99 €)
  - Order 2:
    - Trousers (69,99 €)
    - Sweater (69,99 €)
Hans Schulz
  - Order 1
    - Backpack (239,79 €)
  - Order 3
    - Mouse (49,49 €)
    - Keyboard (120,00 €)
    - Mouse pad (29,50 €)
  - Order 2
    - Microfiber cloth (7,49 €)
    - Necklace (300,00 €)
```

Notes:
  - It is not mandatory to visualize the result as a table.

Attention of the Challenge:
- Creation of the data structure
- Sorting of data
- Linking data and UI
- Bonus: Styling UI

Example UI:

| First name | Last name  | Order | Item description | Price    |
|:-----------|:-----------|:------|:-----------------|:---------|
| Peter      | Mueller    | 1     | Keyboard         | 120,00 € |
| Peter      | Mueller    | 1     | Mouse            |  49,49 € |
| Peter      | Mueller    | 2     | Carpet           | 300,00 € |
| Peter      | Mueller    | 2     | Mouse pad        |  29,50 € |
| Peter      | Mueller    | 2     | Microfiber cloth |   7,49 € |
| Peter      | Mueller    | 3     | Monitor          | 239,79 € |
| Max        | Mustermann | 1     | Desk             | 249,99 € |
| Max        | Mustermann | 1     | Chair            | 129,99 € |


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
