var elForm = document.querySelector('.form')
var elBtn = document.querySelector('.btn')
var elTitle = document.querySelector('.title')
var elWrapper__select = document.querySelector('.wrapper__select')
var elHero__titleb = document.querySelector('.hero__titleb')



const elSelect = document.getElementById('select-option')
const elselection = document.getElementById('selection-title')

elSelect.addEventListener('change',(e) =>{
  var d =  elselection.textContent = ' ' + e.target.value
  console.log(d);
})


// const button = document.getElementById('myButton');
// const h2Element = document.getElementById('output');

function fnnf() {
    
console.log('xarakat qildim lekin chiqara olmadim');
}


function fq() {
    elHero__titleb.innerHTML = ''
    elHero__titleb.textContent = ' 25sm'


}
function fw() {
    elHero__titleb.innerHTML = ''
    elHero__titleb.textContent = ' 30sm'
}
function fe() {
    elHero__titleb.innerHTML = ''
    elHero__titleb.textContent = ' 35sm'
}

var elh2Element = document.querySelector('.heroH2');


function ft() {
    elHero__titleb.innerHTML = ''
    elh2Element.textContent = ' achiq'


}
function fy() {
    elHero__titleb.innerHTML = ''
    elh2Element.textContent = ' Pishloq'
}






// const button = document.getElementById('myButton');

// button.onclick = function() {
//   const selectedOption = elSelect.value;
//   console.log(selectedOption);
// };
















const elTileid = document.getElementById('ideee-tileid')
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let selectedValues = '';

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    selectedValues = '';
    checkboxes.forEach((cb) => {
      if (cb.checked) {
        selectedValues += cb.value + ', ';
      }
    });
    elTileid.textContent = ' ' + selectedValues.slice(0, -2);
  });
});































































// function fm(arr) {
//     elList.innerHTML = ''
//     for (var i = 0; i < arr.length; i++) {
//         let newLi = document.createElement('li')
//         newLi.innerHTML = `<img class="imgg" src="${arr[i].model}" alt=""> <h2 class="title__h2">${arr[i].phone}</h2>  <i class="price__i">${arr[i].price}</i>`
//         var newh6 = document.createElement('h6')
//         newh6.setAttribute('class', 'title__h6')
//         newhBUTT.setAttribute('class', 'butt')
//          newh6.textContent = 'SM - S918BZEGSKZ'
//          newh4.textContent = 'RANG'
//          newh5.textContent = '256GB'
//          newh51.textContent = '512GB'
//          newh52.textContent = '1TB'
//          newhBUTT.textContent = 'Sotuv nuqtalari'
//         newLi.appendChild(newDiW)
//         newLi.appendChild(newhBUTT)
//         elList.appendChild(newLi)
//     }
// }