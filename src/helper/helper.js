import { columnLabels } from "../label/AppLabels";

export const getColumnLabel = (column) => {
  const DEFAULT_LANG = "de";
  const DEFAULT_COLUMN_NOT_FOUND = "n/a";

  const columnInfo = column in columnLabels ? columnLabels[column] : null;
  if (!columnInfo) return DEFAULT_COLUMN_NOT_FOUND;

  const columnName = DEFAULT_LANG in columnInfo ? columnInfo[DEFAULT_LANG] : DEFAULT_COLUMN_NOT_FOUND;
  return columnName;
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