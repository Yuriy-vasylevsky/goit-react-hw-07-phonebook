export const getItems = state => state.contact.items;
export const getFilter = state => state.contact.filter;

export const getFilteredContact = state => {
  const items = getItems(state);
  const filter = getFilter(state);
  return items.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
};
