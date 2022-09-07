//상품 정보 데이터 불러오기
import beverageList from './beverage.js';

const listItem = document.querySelector('.list-item');
beverageList.forEach(item=>{
    const button = document.createElement('button');
    button.className="btn-item";

    const image = document.createElement('img');
    image.className = "img-item";
    image.src = item.image;

    const productName = document.createElement('strong');
    productName.className = "tit-item";
    productName.innerText = item.name;

    const productPrice = document.createElement('span');
    productPrice.className = "txt-price";
    productPrice.innerText = item.price;

    listItem.appendChild(button);
    button.append(image,productName,productPrice);
});
//음료수 별 클릭 횟수 배열로 담기

//상품 갯수만큼 상품 버튼 생성

//음료 클릭 시 장바구니에 담기는 기능 구현
const listItemStaged = document.querySelector(".list-item-staged");
const items = document.querySelectorAll('.btn-item');
const addCart = (e) => {
    const button = document.createElement("button");
    button.className = "btn.btn-staged";
    
    const image = document.createElement("img");
    image.className = "img-item";
    image.src = e.target.childNodes[0].currentSrc;

    const productName = document.createElement("strong");
    productName.className = "txt-item";
    productName.innerText = e.target.childNodes[1].innerText;

    const productCounter = document.createElement("span");
    productCounter.className = "num-counter";
    productCounter.innerText = "1"; //추후에 숫자 반영하기

    listItemStaged.appendChild(button);
    button.append(image, productName,productCounter);
};

items.forEach(item=>{item.addEventListener('click', addCart)});
