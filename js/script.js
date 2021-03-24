$(document).ready(function(){
        $(document).ready(function(){
          $('.carousel_inner').bxSlider({
              controls: true,
              speed: 1000,
              responsive: true,
              randomStart: true,
              nextSelector: '',
              prevSelector: '',
              nextText: '',
              prevText: '',
              slideWidth: 300,  
              maxSlides: 2,
              moveSlides: 1,
              captions: true,
              
          });
        });

const spoilerWrapperItems = document.querySelectorAll('.spoiler-wrapper__item');

let activePanel;
spoilerWrapperItems.forEach(function(item, i, panelItem) {
  item.addEventListener('click', function(e) {
    this.classList.add('active-arrow');
    this.nextElementSibling.classList.add('active');

    if (activePanel) {
      activePanel.classList.remove('active-arrow');
      activePanel.nextElementSibling.classList.remove('active');
    }
    activePanel = (activePanel === this) ? 0 : this;
  });
});


});