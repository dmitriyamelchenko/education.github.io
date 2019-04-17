// Написать метод createLayout() который создает клавиатуру состоящую из 3-х строк, в каждой строке такое кол-во кнопок
// как длины topRow/middleRow и bottomRow полей.

// Можно использовать либо createElement либо создавать строку из тегов и вешать через insertAdjacentHTML или innerHTML.
// Добавить минимальное оформление на свой вкус.

//1й вариант реализации задачи
export default function () {
  const createLayout = (lang, parent) =>{
    const keyboard = {
      layouts: {
        en: {
          topRow: ["qwertyuiop[]"],
          middleRow: ["asdfghjkl;'"],
          bottomRow: ["zxcvbnm,./"]
        },
        ru: {
          topRow: ["йцукенгшщзхъ"],
          middleRow: ["фывапролджэ"],
          bottomRow: ["ячсмитьбю."]
        },
        ua: {
          topRow: ["йцукенгшщзхїґ"],
          middleRow: ["фівапролджє"],
          bottomRow: ["ячсмитьбю/"]
        }
      },
      langs: ['en', 'ru', 'ua'],
    };

    let topRow = '';
    keyboard.layouts[lang].topRow[0].split('').forEach(el => {
      topRow += `<div class = 'css.butKeyboard'><p>${el}</p></div>`;
    });
    let middleRow = '';
    keyboard.layouts[lang].middleRow[0].split('').forEach(el => {
      middleRow += `<div class = 'css.butKeyboard'><p>${el}</p></div>`;
    });
    let bottomRow = '';
    keyboard.layouts[lang].bottomRow[0].split('').forEach(el => {
      bottomRow += `<div class = 'css.butKeyboard'><p>${el}</p></div>`;
    });

    let createKeyboard = `<div class = 'css.keyboard'>
                            <ul class = 'css.row7module'>
                                <li>${topRow}</li><div></div>
                                <li>${middleRow}</li><div></div>
                                <li>${bottomRow}</li>
                            </ul>
                    </ul>`;

    parent.insertAdjacentHTML('beforeEnd',createKeyboard);

    let butKeyboard = document.querySelectorAll('.butKeyboard');
    [...butKeyboard].map(el => {
      el.addEventListener('mousedown', function () {
        el.style.backgroundColor = "red";

      });
      el.addEventListener('mouseup', function () {
        el.style.backgroundColor = "#302f38";
        // console.log(this);
      });
    });
  };


  let container7module = document.querySelector('.container7module');
  createLayout('ua', container7module);
  createLayout('en', container7module);
  createLayout('ru', container7module);
};

//-----------------------------------------------------------
//2й вариант реализации задачи
// const keyboard = {
//     layouts: {
//         en: {
//             topRow: ["qwertyuiop[]"],
//             middleRow: ["asdfghjkl;'"],
//             bottomRow: ["zxcvbnm,./"]
//         },
//         ru: {
//             topRow: ["йцукенгшщзхъ"],
//             middleRow: ["фывапролджэ"],
//             bottomRow: ["ячсмитьбю."]
//         },
//         ua: {
//             topRow: ["йцукенгшщзхїґ"],
//             middleRow: ["фівапролджє"],
//             bottomRow: ["ячсмитьбю/"]
//         }
//     },
//     langs: ['en', 'ru', 'ua'],
// };
//
// function createLayout(keyboard, lang) {
//     let topRow = '';
//     keyboard.layouts[lang].topRow[0].split('').forEach(el => {
//         topRow += `<div class = 'butKeyboard'><p>${el}</p></div>`;
//     });
//     // console.log(topRow); let topRow = '';
//     let middleRow = '';
//     keyboard.layouts[lang].middleRow[0].split('').forEach(el => {
//         middleRow += `<div class = 'butKeyboard'><p>${el}</p></div>`;
//     });
//     let bottomRow = '';
//     keyboard.layouts[lang].bottomRow[0].split('').forEach(el => {
//         bottomRow += `<div class = 'butKeyboard'><p>${el}</p></div>`;
//     });
//
//     let createKeyboard = `<div class = 'keyboard'>
//                             <ul class = 'row'>
//                                 <li>${topRow}</li><div></div>
//                                 <li>${middleRow}</li><div></div>
//                                 <li>${bottomRow}</li>
//                             </ul>
//                     </ul>`;
//
//     return createKeyboard;
// }
//
//
// let container = document.querySelector('.container');
// container.insertAdjacentHTML('beforeEnd', createLayout(keyboard, 'en'));
// container.insertAdjacentHTML('beforeEnd', createLayout(keyboard, 'ru'));
// container.insertAdjacentHTML('beforeEnd', createLayout(keyboard, 'ua'));
