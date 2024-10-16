/**   검색창 제어   */

// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

/**   페이지 스크롤에 따른 요소 제어   */

// 페이지 스크롤에 영향을 받는 요소들을 검색!
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if(window.scrollY > 500) {
      // 베지 숨기기
      // gsap.to(요소, 지속시간, 옵션);
      // badgeEl.style.display = 'none';
      gsap.to(badgeEl, .6, {
        opacity: 0,
        display: 'none'
      });
    } else {
      // 배지 보이기
      gsap.to(badgeEl, .6, {
        opacity: 1,
        display: 'block'
      });

      // badgeEl.style.display = 'block';
    }
  }, 300));

/** 올해가 몇 년도인지 계산 */
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()