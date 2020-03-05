let burgerBar = document.querySelector('.burger_bar');
let navList = document.querySelector('.navbar_list')

burgerBar.addEventListener('click',function(){
  let value = navList.classList.contains('navbar_list_collapse');

  if(value){
    navList.classList.remove('navbar_list_collapse');
    burgerBar.classList.remove('change');
  }else{
    navList.classList.add('navbar_list_collapse');
    burgerBar.classList.add('change');
  }
})
