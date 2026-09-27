const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Открыть меню');
  navigation.classList.remove('is-open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const notice = document.querySelector('#cookie-notice');
const dialog = document.querySelector('#cookie-dialog');
try { notice.hidden = localStorage.getItem('levelup-cookie-notice') === 'seen'; } catch { notice.hidden = false; }
function dismissNotice() {
  notice.hidden = true;
  try { localStorage.setItem('levelup-cookie-notice', 'seen'); } catch { /* Storage is optional. */ }
}
document.querySelectorAll('.cookie-open').forEach(button => button.addEventListener('click', () => dialog.showModal()));
document.querySelector('#cookie-dismiss').addEventListener('click', dismissNotice);
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.querySelector('.dialog-done').addEventListener('click', () => { dismissNotice(); dialog.close(); });
dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
