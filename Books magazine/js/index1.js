
window.onload = function () {
    //--------------basket-----
var basket = document.getElementById('basket');
var panel = document.getElementsByClassName('nav_hidden');
console.log(basket);
var nav = document.getElementsByClassName('nav_menu');
var slider = document.getElementsByClassName('slider');
var i = 0;
var divBasket = document.createElement('div');

divBasket.id = "basketPanel";
basket.onclick = function () {
    let mainBlock = document.getElementsByClassName('mainBlock');
    console.dir(mainBlock);
    if(i==0){
        for(let i = 0; i<mainBlock[0].children.length;i++){
            mainBlock[0].children[i].style.display = 'none';
        }
        // console.log(basket);


        
        nav[0].style.display="none";
        slider[0].style.display="none";
        mainBlock[0].appendChild(divBasket);
        divBasket.insertAdjacentHTML('beforeend',`<strong>Ура!</strong>`);
        // console.log(i);
        i++;
    }
    else{
        for(let i = 0; i<mainBlock[0].children.length;i++){
            mainBlock[0].children[i].style.display = 'block';
        }
        divBasket.remove();
        nav[0].style.display="inline-block";
        slider[0].style.display="block";
        i--;
    }
    showCard();

};

// ----category
var category = document.getElementsByClassName('category');
for(let i = 0; i<category.length; i++){
    category[i].onclick = function(){
        bookSearch(this);
    }
}
document.getElementById('button').addEventListener('click', bookSearch, true);


    // -------wishList понравившееся товары-------
    let wish_list = document.getElementsByClassName('wish_list');
    let wishListBlock = document.createElement('div');
        wishListBlock.className = 'wishListBlock';
        wishListBlock.innerHTML = `<h1>Извините, меню понравившихся товаров в процессе доработки...</h1>`;

    let flag = wish_list ? 0 : 1;
    wish_list[0].onclick = function () {
        let panel = document.getElementsByClassName('nav_hidden');
        let nav = document.getElementsByClassName('nav_menu');
        let slider = document.getElementsByClassName('slider');
        let filter = document.getElementsByClassName('filter');
        let content = document.getElementsByClassName('content');
        let result = document.getElementById('result');


        // -----Проверка не открыто ли окно настроек юзера, если да то удаляем его-----
        let panelChildren =[];
        for(let i =0; i<panel[0].children.length; i++){
            panelChildren.push(panel[0].children[i]);
        }
        for(let i =0; i<panelChildren.length; i++) {
            console.log(panelChildren[i].id);
            if (panelChildren[i].id=='userPanel') {
                panelChildren[i].remove();
                flag=0;
            }
            // if (panelChildren[i].id =='basketPanel') {
            //     console.log(panelChildren[i]);
            //     childrenPanel[i].remove();
            // }
            // console.log(panelChildren[i].id);
            // console.log('lose');
        }

        if(flag === 0) {
            nav[0].style.display = "none";
            filter[0].style.display = 'none';
            content[0].style.display = 'none';
            slider[0].style.display = "none";
            result.style.display = "none";

            panel[0].appendChild(wishListBlock);

            flag++;
        }
        else{
            wishListBlock.remove();
            nav[0].style.display="inline-block";
            slider[0].style.display="block";
            result.style.display="flex";
            filter[0].style.display='block';
            content[0].style.display='block';
            flag--;
        }
        showCard();
    };




// ----создание меню юзера-------
    let user = document.getElementsByClassName('user');
    let userPanel = document.createElement('div');
        userPanel.id = "userPanel";

    let u = userPanel? 0 : 1;
    user[0].onclick = function() {
        let panel = document.getElementsByClassName('nav_hidden');
        let nav = document.getElementsByClassName('nav_menu');
        let slider = document.getElementsByClassName('slider');
        let filter = document.getElementsByClassName('filter');
        let content = document.getElementsByClassName('content');
        let result = document.getElementById('result');


        // -----Проверка не открыто ли окно избранных книг, если да то удаляем его-----
        let childrenPanel =[];
        for(let i =0; i<panel[0].children.length; i++){
            childrenPanel.push(panel[0].children[i]);
        }
        for(let i =0; i<childrenPanel.length; i++) {
            if (childrenPanel[i].className =='wishListBlock') {
                childrenPanel[i].remove();
                u=0;
            }
            // else if (childrenPanel[i].id =='basketPanel') {
            //     childrenPanel[i].remove();
            // }
        }

        if(u==0){
            nav[0].style.display="none";
            filter[0].style.display='none';
            content[0].style.display='none';
            slider[0].style.display="none";
            result.style.display="none";
            panel[0].appendChild(userPanel);

            u++;
        }
        else{
            userPanel.remove();
            nav[0].style.display="inline-block";
            slider[0].style.display="block";
            result.style.display="flex";
            filter[0].style.display='block';
            content[0].style.display='block';
            u--;
        }
    };
};


// sdsd()
// sdsd