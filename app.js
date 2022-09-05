import beverage from './beverage.js';
//상품 정보 데이터 불러오기
import beverageList from './beverage.js';

const listItem = document.querySelector('.list-item');
//음료수 별 클릭 횟수 배열로 담기

//상품 갯수만큼 상품 버튼 생성

//음료 클릭 시 장바구니에 담기는 기능 구현
beverageList.forEach(item=>{
    const button = document.createElement('button');
    button.className="btn-item";

    const image = document.createElement('img'); //image라고 해서 계속 image 가 반영 안됨
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

console.log(beverageList);
