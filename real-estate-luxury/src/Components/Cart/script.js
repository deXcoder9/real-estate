const getStoredEstate = () => {
  const storedBooks = localStorage.getItem("estate");
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

const saveEstates = (id) => {
  const storedEstates = getStoredEstate();
  const exist = storedEstates.find((book) => book.id == id.id);
  if (!exist) {
    storedEstates.push(id);
    localStorage.setItem("estate", JSON.stringify(storedEstates));
    // console.log("stored books:- ", storedBooks);
    // console.log("params Id: -", id);
  }
};

export { saveEstates, getStoredEstate };
