 // 我们奔向美好的未来 
 // @package 欲裕主页 
 // @author Li Yuyu 
 //@version  1.0.0
 //@link https://blog.kokowo.cn/ 
 
document.getElementById('year').textContent = new Date().getFullYear();
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target) }
  })
},{threshold: .16});
document.querySelectorAll('[data-anim]').forEach(el=>io.observe(el));

// 打字机动效（保持更快速度）
document.addEventListener('DOMContentLoaded', () => {
  const nameEl = document.querySelector('.name');
  const subtitleEl = document.querySelector('.subtitle');
  const icons = document.querySelectorAll('.social a');

  const TYPE_INTERVAL = 100;   // 每字符间隔
  const SEGMENT_PAUSE = 180;  // 每段结束停顿
  const ICON_STAGGER  = 240;  // 图标依次出现的间隔
// 改成你自己的
  const texts = [
    '你好，我叫李欲裕',
    '通信工程',
    '编程 / 摄影 / 硬件',
    '20岁'
  ];

  function typeTo(el, text, cb) {
    let i = 0;
    el.textContent = '';
    const timer = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        setTimeout(cb, SEGMENT_PAUSE);
      }
    }, TYPE_INTERVAL);
  }

  function typeAppendTo(el, text, cb) {
    let i = 0;
    const timer = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        setTimeout(cb, SEGMENT_PAUSE);
      }
    }, TYPE_INTERVAL);
  }

  function startTyping() {
    typeTo(nameEl, texts[0], () => {
      typeTo(subtitleEl, texts[1], () => {
        subtitleEl.textContent += ' | ';
        typeAppendTo(subtitleEl, texts[2], () => {
          subtitleEl.textContent += ' | ';
          typeAppendTo(subtitleEl, texts[3], () => {
            icons.forEach((icon, i) => {
              setTimeout(() => {
                icon.classList.remove('hidden');
                icon.classList.add('fade-in');
              }, i * ICON_STAGGER);
            });
          });
        });
      });
    });
  }

  icons.forEach(icon => icon.classList.add('hidden'));
  startTyping();
});
