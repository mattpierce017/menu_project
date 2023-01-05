const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/JS_Menu_Item-1.jpeg",
    desc: `I'm not basic. You're basic.`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/JS_Menu_Item-2.jpeg",
    desc: `The World's Best Burger... with Bacon. So... The The World's "Bester" Burger? w/Fries `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/JS_Menu_Item-3.jpeg",
    desc: `It's a Monster! Run away screaming "Oh Yeah!" instead of "Oh no!"`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/JS_Menu_Item-4.jpeg",
    desc: `Eggs. Bacon. Cheese. Beans. Coma. `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/JS_Menu_Item-5.jpeg",
    desc: `The World's Best Burger... with an Omelette.... Weirdo.`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/JS_Menu_Item-6.jpeg",
    desc: `No Description Needed.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/JS_Menu_Item-7.jpeg",
    desc: `Sure it's healthy! See the lettuce?!`
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/JS_Menu_Item-8.jpeg",
    desc: `'Murica`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/JS_Menu_Item-9.jpeg",
    desc: `The World's Safest Date!`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// load Items
window.addEventListener("DOMContentLoaded", function () {
  // display menu items
  const items = displayMenuItems(menu);
  sectionCenter.insertAdjacentHTML("afterbegin", items);

  // load items

  displayMenuButons();
});

function displayMenuItems(menuItems) {
  const displayMenu = menuItems.map((item) => {
    return `
    <article class="menu-item">
          <img src="${item.img}" class="photo" alt="${item.title}" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}
            </p>
          </div>
        </article>
    `;
  });
  return displayMenu.join("");
}

function displayMenuButons() {
  // const categories = new Set(menu.map((item) => item.category));
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map((cat) => {
      return `
    <button class="filter-btn" data-id="${cat}" type="button">
          ${cat}
        </button>
    `;
    })
    .join("");
  btnContainer.insertAdjacentHTML("afterbegin", categoryBtns);
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Filter items
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((item) => item.category === category);
      const items =
        category === "all"
          ? displayMenuItems(menu)
          : displayMenuItems(menuCategory);
      sectionCenter.innerHTML = "";
      sectionCenter.insertAdjacentHTML("afterbegin", items);
    });
  });
}