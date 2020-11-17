const budget = {
  myBudget: [
    {
      title: 'Phone',
      budget: 35,
    },
    {
      title: 'Internet',
      budget: 45,
    },
    {
      title: 'Education',
      budget: 80,
    },
    {
      title: 'Eat out',
      budget: 25,
    },
    {
      title: 'Rent',
      budget: 275,
    },
    {
      title: 'Grocery',
      budget: 110,
    },
    {
      title: 'Pharmacy',
      budget: 40,
    },
    {
      title: 'Donations',
      budget: 10,
    },
  ],
};

function generateTable(b) {
  // eslint-disable-next-line no-undef
  const p = document.getElementById('list');
  p.innerHTML = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < b.length; i++) {
    // eslint-disable-next-line no-undef
    const div = document.createElement('div');
    div.innerHTML = `${b[i].title} - ${b[i].budget}`;
    p.appendChild(div);
  }
}

generateTable(budget.myBudget);

// eslint-disable-next-line no-unused-vars
function aZ() {
  const newArray = [...budget.myBudget];
  newArray.sort((a, b) => (a.title > b.title ? 1 : -1));
  generateTable(newArray);
}

// eslint-disable-next-line no-unused-vars
function zA() {
  const newArray = [...budget.myBudget];
  newArray.sort((a, b) => (a.title < b.title ? 1 : -1));
  generateTable(newArray);
}

// eslint-disable-next-line no-unused-vars
function biggerBudget() {
  const newArray = [...budget.myBudget];
  newArray.sort((a, b) => (a.budget < b.budget ? 1 : -1));
  generateTable(newArray);
}

// eslint-disable-next-line no-unused-vars
function smallerBudget() {
  const newArray = [...budget.myBudget];
  newArray.sort((a, b) => (a.budget > b.budget ? 1 : -1));
  generateTable(newArray);
}
