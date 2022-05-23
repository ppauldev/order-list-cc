import { columnLabels } from "../label/AppLabels";

const customSortLastNameAscending = (data) => {
  const copiedData = JSON.parse(JSON.stringify(data));
  return copiedData.sort((a, b) => a.lastName.localeCompare(b.lastName));
};

const customSortOrderNumberAscending = (data) => {
  const copiedData = JSON.parse(JSON.stringify(data));
  return copiedData.sort((a, b) => {
    return a.lastName === b.lastName ? a.orderNumber - b.orderNumber : null;
  });
};

const customSortPriceDescending = (data) => {
  const copiedData = JSON.parse(JSON.stringify(data));
  return copiedData.sort((a, b) => {
    return a.lastName === b.lastName && a.orderNumber === b.orderNumber ? getFloatFromEuroPrice(b.price) - getFloatFromEuroPrice(a.price) : null;
  });
};

export const customSortData = (data) => {
  const dataAscendingLastNames = customSortLastNameAscending(data);
  const dataAscendingOrderNumber = customSortOrderNumberAscending(dataAscendingLastNames);
  const dataDescendingPrice = customSortPriceDescending(dataAscendingOrderNumber);

  return dataDescendingPrice;
};

export const getColumnLabel = (column) => {
  const DEFAULT_LANG = "de";
  const DEFAULT_COLUMN_NOT_FOUND = "n/a";

  const columnInfo = column in columnLabels ? columnLabels[column] : null;
  if (!columnInfo) return DEFAULT_COLUMN_NOT_FOUND;

  const columnName = DEFAULT_LANG in columnInfo ? columnInfo[DEFAULT_LANG] : DEFAULT_COLUMN_NOT_FOUND;
  return columnName;
};

const getFloatFromEuroPrice = (priceLabel) => {
  return parseFloat(priceLabel.replace("€", "").trim());
};

export const parseColumnNames = (data) => {
  if (!data || data.length === 0) return [];

  return Object.keys(data[0]);
};

export const parseData = (data) => {
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