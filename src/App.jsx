import React, { useContext, useEffect, useState } from 'react'
import './App.css'


/*

Author: _beta admin team

AUFGABE/TASK

Deutsch/German:

Gegeben sind folgende Informationen:
Es gibt x Benutzer-Accounts mit jeweils einem Vornamen und einem Nachnamen.
Zu einem Account existieren y Bestellungen. Eine Bestellung beinhaltet z Artikel mit jeweils einer Beschreibung und einem Preis.

Erstelle eine Datenstruktur aus den unten gegebenen Informationen.
Sortiere die Informationen zuerst nach dem Nachnamen (aufsteigend (A -> Z)), dann die Bestellungen anhand der Nummerierung (aufsteigend) und zuletzt die Artikel nach dem Preis (absteigend).
Zeige die Informationen in einer Tabelle an.


Beispieldaten:

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


Hinweise:
  - Das Styling der Tabelle ist nicht vorgeschrieben.

Augenmerk der Challenge:
- Erstellung der Datenstruktur
- Sortierung von Daten
- Verknüpfung von Daten und UI
- Bonus: Styling UI

Beispiel UI:

Vorname | Nachname   | Bestellung | Artikelbeschreibung | Preis
------------------------------------------------------------------
...
Peter   | Mueller    | 1          | Tastatur            | 120,00 €
Peter   | Mueller    | 1          | Maus                |  49,49 €
Peter   | Mueller    | 2          | Teppich             | 300,00 €
Peter   | Mueller    | 2          | Mauspad             |  29,50 €
Peter   | Mueller    | 2          | Mikrofasertuch      |   7,49 €
Peter   | Mueller    | 3          | Monitor             | 239,79 €
Max     | Mustermann | 1          | Schreibtisch        | 249,99 €
Max     | Mustermann | 1          | Stuhl               | 129,99 €
...


Englisch/English

The following information is given:
There are x user accounts, each with a first name and a last name.
There are y orders for an account. An order contains z items, each with a description and a price.

Create a data structure from the information given below.
Sort the information first by last name (ascending (A -> Z)), then the orders by number (ascending) and finally the items by price (descending).
Display the information in a table.


Example data:

Max Mustermann
  - Order 1
    - Desk (249,99 €)
    - chair (129,99 €)
Peter Mueller
  - Order 3
    - monitor (239,79 €)
  - Order 1
    - mouse (49,49 €)
    - keyboard (120,00 €)
  - Order 2
    - microfiber cloth (7,49 €)
    - carpet (300,00 €)
    - mouse pad (29,50 €)
Julia Vogt
  - Order 2:
    - Laptop carrying case (39,99 €)
    - laptop (742,90 €)
  - Order 1:
    - Cell phone charging cable (13,90 €)
Jan Acker
  - Order 1:
    - shoes (83,00 €)
    - Winter coat (139,99 €)
  - Order 2:
    - trousers (69,99 €)
    - sweater (69,99 €)
Hans Schulz
  - Order 1
    - backpack (239,79 €)
  - Order 3
    - mouse (49,49 €)
    - keyboard (120,00 €)
    - mouse pad (29,50 €)
  - Order 2
    - microfiber cloth (7,49 €)
    - necklace (300,00 €)


Notes:
  - The styling of the table is not mandatory.

Attention of the Challenge:
- Creation of the data structure
- Sorting of data
- Linking data and UI
- Bonus: Styling UI

Example UI:

first name | last name  | order | item description | price
------------------------------------------------------------------
...
Peter      | Mueller    | 1     | Keyboard         | 120,00 €
Peter      | Mueller    | 1     | Mouse            |  49,49 €
Peter      | Mueller    | 2     | Carpet           | 300,00 €
Peter      | Mueller    | 2     | Mouse pad        |  29,50 €
Peter      | Mueller    | 2     | Microfiber cloth |   7,49 €
Peter      | Mueller    | 3     | Monitor          | 239,79 €
Max        | Mustermann | 1     | Desk             | 249,99 €
Max        | Mustermann | 1     | Chair            | 129,99 €
...

*/

const data = [
  {
    firstName: "Max",
    lastName: "Mustermann",
    orders: [
      {
        orderNumber: 1,
        articles: [
          {
            description: "Schreibtisch",
            priceUnit: 249.99,
            currency: "€"
          },
          {
            description: "Stuhl",
            priceUnit: 129.99,
            currency: "€"
          }
        ]
      }
    ],
  },
  {
    firstName: "Peter",
    lastName: "Müller",
    orders: [
      {
        orderNumber: 3,
        articles: [
          {
            description: "Monitor",
            priceUnit: 239.99,
            currency: "€"
          }
        ]
      },
      {
        orderNumber: 1,
        articles: [
          {
            description: "Maus",
            priceUnit: 49.49,
            currency: "€"
          },
          {
            description: "Tastatur",
            priceUnit: 120.00,
            currency: "€"
          }
        ]
      },
      {
        orderNumber: 2,
        articles: [
          {
            description: "Mikrofasertuch",
            priceUnit: 7.49,
            currency: "€"
          },
          {
            description: "Teppich",
            priceUnit: 300.00,
            currency: "€"
          },
          {
            description: "Mauspad",
            priceUnit: 29.50,
            currency: "€"
          }
        ]
      }
    ],
  },
  {
    firstName: "Julia",
    lastName: "Vogt",
    orders: [
      {
        orderNumber: 2,
        articles: [
          {
            description: "Laptop Tragetasche",
            priceUnit: 39.99,
            currency: "€"
          },
          {
            description: "Laptop",
            priceUnit: 742.90,
            currency: "€"
          }
        ]
      },
      {
        orderNumber: 1,
        articles: [
          {
            description: "Handy-Ladekabel",
            priceUnit: 13.90,
            currency: "€"
          }
        ]
      }
    ],
  },
  {
    firstName: "Jan",
    lastName: "Acker",
    orders: [
      {
        orderNumber: 1,
        articles: [
          {
            description: "Schuhe",
            priceUnit: 83.00,
            currency: "€"
          },
          {
            description: "Wintermantel",
            priceUnit: 139.99,
            currency: "€"
          }
        ]
      },
      {
        orderNumber: 2,
        articles: [
          {
            description: "Hose",
            priceUnit: 69.99,
            currency: "€"
          },
          {
            description: "Pullover",
            priceUnit: 69.99,
            currency: "€"
          }
        ]
      }
    ],
  },
  {
    firstName: "Hans",
    lastName: "Schulz",
    orders: [
      {
        orderNumber: 1,
        articles: [
          {
            description: "Maus",
            priceUnit: 239.79,
            currency: "€"
          }
        ]
      },
      {
        orderNumber: 3,
        articles: [
          {
            description: "Maus",
            priceUnit: 49.49,
            currency: "€"
          },
          {
            description: "Tastatur",
            priceUnit: 120.00,
            currency: "€"
          },
          {
            description: "Mauspad",
            priceUnit: 29.50,
            currency: "€"
          },
        ]
      },
      {
        orderNumber: 2,
        articles: [
          {
            description: "Mikrofasertuch",
            priceUnit: 7.49,
            currency: "€"
          },
          {
            description: "Halskette",
            priceUnit: 300.00,
            currency: "€"
          }
        ]
      }
    ],
  },
];

const columnLabels = {
  firstName: {
    de: "Vorname",
  },
  lastName: {
    de: "Nachname",
  },
  orderNumber: {
    de: "Bestellung",
  },
  description: {
    de: "Artikelbeschreibung",
  },
  price: {
    de: "Preis",
  }
};

const getColumnLabel = (column) => {
  const DEFAULT_LANG = "de";
  const DEFAULT_COLUMN_NOT_FOUND = "n/a";

  const columnInfo = column in columnLabels ? columnLabels[column] : null;
  if (!columnInfo) return DEFAULT_COLUMN_NOT_FOUND;

  const columnName = DEFAULT_LANG in columnInfo ? columnInfo[DEFAULT_LANG] : DEFAULT_COLUMN_NOT_FOUND;
  return columnName;
};
const fetchData = () => data;
const parseColumnNames = (data) => {
  if (!data || data.length === 0) return [];

  return Object.keys(data[0]);
};
const parseData = (data) => {
  const parsedData = data.flatMap((item) => {
    const a = item.orders.flatMap((order) => {
      const b = order.articles.map((article) => {
        return {
          firstName: item.firstName,
          lastName: item.lastName,
          orderNumber: order.orderNumber,
          description: article.description,
          price: `${article.priceUnit.toFixed(2)} ${article.currency}`
        }
      });
      return b;
    })
    return a;
  });

  return parsedData;
};

const ColumnContext = React.createContext();
const RowContext = React.createContext();

const TableContextProvider = ({ children }) => {
  const [columnData, setColumnData] = useState([]);
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const data = fetchData();
    const parsedData = parseData(data);
    const columns = parseColumnNames(parsedData);

    setColumnData(columns);
    setRowData(parsedData);
  }, []);

  return (
    <ColumnContext.Provider value={columnData}>
      <RowContext.Provider value={rowData}>
        {children}
      </RowContext.Provider>
    </ColumnContext.Provider>
  )
};

const useColumnContext = () => {
  const context = useContext(ColumnContext);

  if (context === undefined) {
    throw new Error("useColumnContext was used outside of its Provider");
  }

  return context;
};

const useRowContext = () => {
  const context = useContext(RowContext);

  if (context === undefined) {
    throw new Error("useRowContext was used outside of its Provider");
  }

  return context;
};

const App = () => {
  return (
    <div>
      <TableContextProvider>
        <Table />
      </TableContextProvider>
    </div>
  )
};

const Table = () => {
  return (
    <table>
      <TableHeader />
      <TableBody />
    </table>
  )
};

const TableHeader = () => {
  const columns = useColumnContext();

  return (
    <thead>
      <tr>
        {columns.map((column, i) => <th key={i}>{getColumnLabel(column)}</th>)}
      </tr>
    </thead>
  )
};

const TableBody = () => {
  const rows = useRowContext();

  return (
    <tbody>
      {rows.map((row, i) => <TableRow key={i} {...row} />)}
    </tbody>
  )
};

const TableRow = (rowProps) => {
  return (
    <tr>
      {Object.values(rowProps).map((value, i) => <td key={i}>{value}</td>)}
    </tr>
  )
};

export default App;