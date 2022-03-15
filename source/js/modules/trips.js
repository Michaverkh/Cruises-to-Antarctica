export const tripList = [
    {
        Id: 0,
        name: "Астория",
        route: "Аргентина - Фолклендские острова - Антарктида",
        start: "Ушуайя",
        duration: "11",
        price: "11500",
        img: "../../img/content/astoria-mobile.jpg"
 
    },
    {
        Id: 1,
        name: "Элайн",
        route: "Аргентина - Фолклендские острова - Антарктида - Чили",
        start: "Буэнос-Айрес",
        duration: "20",
        price: "14500",
        img: "../../img/content/astoria-mobile.jpg"
    },
    {
        Id: 2,
        name: "Атлантис",
        route: "Аргентина - Южная Георгия и Южные Сандвичевы Острова - Антарктида",
        start: "Ушуайя",
        duration: "15",
        price: "14500",
        img: "../../img/content/atlantis-mobile.jpg"
    },
    {
        Id: 3,
        name: "Одисей",
        route: "Аргентина - Южная Георгия и Южные Сандвичевы Острова - Антарктида",
        start: "Ушуайя",
        duration: "15",
        price: "14500",
        img: "../../img/content/odissey-mobile.jpg"
    },
    {
        Id: 4,
        name: "Олимпия",
        route: "Аргентина - Фолклендские острова - Южная Георгия - Антарктида",
        start: "Ушуайя",
        duration: "21",
        price: "18600",
        img: "../../img/content/olimpia-mobile.jpg"
    },
    {
        Id: 5,
        name: "Аврора",
        route: "Аргентина - Антарктида - Чили",
        start: "Ушуайя",
        duration: "14",
        price: "11700",
        img: "../../img/content/aurora-mobile.jpg"
    },
    {
        Id: 6,
        name: "Леонор",
        route: "Чили - Южная Георгия - Антарктида - Аргентина",
        start: "Пунта-Аренас",
        duration: "17",
        price: "12500",
        img: "../../img/content/leonor-mobile.jpg"
    },
    {
        Id: 7,
        name: "Минион - 1",
        route: "Аргентина - Антарктида",
        start: "Ушуайя",
        duration: "11",
        price: "12300",
        img: "../../img/content/minion-mobile.jpg"
    }
]

const tripListContainer  = document.querySelector('.upcoming-cruises__list');
const tripTemplate = document.querySelector('#upcoming-cruises-template')
  .content
  .querySelector('.cruis-item');


export const renderCruises = (data) => {
    data.forEach((trip) => {
        const tripElement = tripTemplate.cloneNode(true);
        const tripNames = tripElement.querySelectorAll('.cruis-item__header');
        tripNames.forEach(name => name.textContent = `Круиз  “${trip.name}”`);
        tripElement.querySelector('.cruis-item__text--trip').textContent = trip.route;
        tripElement.querySelector('.cruis-item__text--start').textContent = trip.start;
        tripElement.querySelector('.cruis-item__text--duration').textContent = `${trip.duration} дней`;
        tripElement.querySelector('.cruis-item__text--price').textContent = `от ${trip.price} $`;
        tripElement.querySelector('.cruis-item__image').src = trip.img;
    
        tripListContainer.appendChild(tripElement);
    })
}

