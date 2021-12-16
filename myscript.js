const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let itemsContent = '';
let itemsContentSide = '';

let elementActive = 0;

for (let i = 0; i < items.length; i++){
    itemsContent += `
        <div class="item" id="item-${i}">
            <img src="${items[i]}" alt="">
            <div class="descrizione">
                <h1> ${title[i]}</h1> 
                <p> ${text[i]}</p> 
            </div>
        </div>`;

        itemsContentSide += `
        <div class="item2" id="lateral_item-${i}">
            <img src="${items[i]}" alt="">
        </div>`;
}



const itemsContainer = document.querySelector('.items_container');
itemsContainer.innerHTML = itemsContent;

const itemsContainerSide = document.querySelector('.lateral');
itemsContainerSide.innerHTML += itemsContentSide;

let itemsActive = document.getElementById('item-'+elementActive);
itemsActive.classList.add('active');

let itemsSideActive = document.getElementById('lateral_item-'+elementActive);
itemsSideActive.classList.add('opacity');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', function() {
    if (elementActive == 0){
        elementActive = 4;
    }else{
        elementActive--;
    }
    itemsActive.classList.remove('active');
    itemsActive = document.getElementById('item-'+elementActive);
    itemsActive.classList.add('active');

    itemsSideActive.classList.remove('opacity');
    itemsSideActive = document.getElementById('lateral_item-'+elementActive);
    itemsSideActive.classList.add('opacity');
});

next.addEventListener('click', function() {
    if (elementActive == 4){
        elementActive = 0;
    }else{
        elementActive++;
    }
    itemsActive.classList.remove('active');
    itemsActive = document.getElementById('item-'+elementActive);
    itemsActive.classList.add('active');

    itemsSideActive.classList.remove('opacity');
    itemsSideActive = document.getElementById('lateral_item-'+elementActive);
    itemsSideActive.classList.add('opacity');
});
