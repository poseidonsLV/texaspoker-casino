$(document).ready(() => {

  const providers = $('.providers');
  let isDown = false;
  let startX;
  let scrollLeft;

  providers.mousedown((e) => {
    isDown = true;
    startX = e.pageX - $(providers).offset().left;
    scrollLeft = providers.scrollLeft;
    providers.addClass('active')
  })
  providers.mouseleave(() => {
    isDown = false;
    providers.removeClass('active')
  })
  providers.mouseup(() => {
    isDown = false;
    providers.scrollLeft(0);
    providers.removeClass('active')
  })
  providers.mousemove((e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - $(providers).offset().left;
    const walk = x - startX;
    providers.scrollLeft(walk);
  })

  const navParent = $('#header__right');
  const openNav = $('.nav__handler');
  const bar1 = $('.bar1');
  const bar2 = $('.bar2');
  const bar3 = $('.bar3');

  openNav.click(() => {
    navParent.toggleClass('active')
    bar1.toggleClass('active');
    bar2.toggleClass('active');
    bar3.toggleClass('active');
  })

})