export default function loadMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menuPage');
  const header = document.createElement('h2');
  header.classList.add('menuHeader');
  header.textContent = 'Menu Card';
  menu.appendChild(header);
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menuContainer');
  const menuArray = [
    [
      "Devil's Delight",
      '$12.99',
      'A fiery blend of habanero-marinated chicken wings served with a tangy chipotle sauce.',
    ],
    [
      'Inferno Nachos',
      '$9.99',
      'Crispy tortilla chips piled high with melted cheese, jalapenos, black beans, guacamole, and a spicy salsa.',
    ],
    [
      'Fiery Fajitas',
      '$14.99',
      'Sizzling hot strips of marinated beef or chicken accompanied by sautéed peppers and onions, served with warm tortillas.',
    ],
    [
      'Hellfire Burger',
      '$11.99',
      'Our signature burger topped with jalapeno-infused cheese, spicy aioli, crispy bacon, and a flame-grilled beef patty. Served with seasoned fries.',
    ],
    [
      'Flaming Shrimp Tacos',
      '$13.99',
      'Grilled shrimp seasoned with our special spice blend, served in soft tortillas with tangy slaw and a zesty lime crema.',
    ],
    [
      'Infernal Curry',
      '$15.99',
      'A rich and spicy coconut-based curry with your choice of chicken, beef, or vegetables, served with steamed jasmine rice.',
    ],
    [
      'Spicy Szechuan Stir-Fry',
      '$12.99',
      'A stir-fry medley of colorful vegetables, tofu, and your choice of chicken or shrimp, tossed in a tongue-tingling Szechuan sauce.',
    ],
    [
      'Volcano Pasta',
      '$14.99',
      'Linguine pasta tossed with sautéed garlic, cherry tomatoes, crushed red pepper, and a spicy arrabbiata sauce.',
    ],
    [
      'Blazing Beef Tacos',
      '$12.99',
      'Tender beef strips marinated in a smoky chipotle sauce, served in soft corn tortillas with caramelized onions, cilantro, and lime.',
    ],
    [
      'Spicy Chocolate Lava Cake',
      '$6.99',
      'Decadent chocolate cake oozing with a molten spicy chocolate center, served with a scoop of vanilla ice cream.',
    ],
  ];

  menuArray.forEach(([dishName, price, description]) => {
    const dishContainer = document.createElement('div');
    const dishNameElement = document.createElement('h3');
    dishNameElement.textContent = dishName;
    const priceElement = document.createElement('h4');
    priceElement.textContent = price;
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
    dishContainer.appendChild(dishNameElement);
    dishContainer.appendChild(priceElement);
    dishContainer.appendChild(descriptionElement);

    menuContainer.appendChild(dishContainer);
  });

  menu.appendChild(menuContainer);

  const note = document.createElement('p');
  note.classList.add('menuPageNote');
  note.textContent = 'Note: Prices are subject to change.';
  menu.appendChild(note);
  const wishes = document.createElement('p');
  wishes.textContent = 'We hope you enjoy your meal at Spicy Heaven!';
  wishes.classList.add('menuPageWishes');
  menu.appendChild(wishes);

  return menu;
}
