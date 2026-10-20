/* Progressive enhancement: content and navigation work without JavaScript. */
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let revealObserver;
let heroAnimation;

function configureMotion() {
  revealObserver?.disconnect();
  heroAnimation?.cancel();
  document.documentElement.classList.remove('motion-enabled');
  if (motionPreference.matches) return;
  if ('IntersectionObserver' in window) {
    document.documentElement.classList.add('motion-enabled');
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
  }
  const title = document.querySelector('h1');
  if (title.animate) heroAnimation = title.animate(
    [{ opacity: 0, transform: 'translateY(22px)' }, { opacity: 1, transform: 'translateY(0)' }],
    { duration: 950, easing: 'cubic-bezier(.2,.65,.3,1)' }
  );
}
configureMotion();
motionPreference.addEventListener('change', configureMotion);

// Small typographic parallax, limited to the introduction.
const heroTitle = document.querySelector('h1');
let scrollPending = false;
function updateParallax() {
  heroTitle.style.transform = motionPreference.matches || window.innerWidth < 601
    ? '' : `translateY(${Math.min(window.scrollY, 900) * 0.035}px)`;
  scrollPending = false;
}
window.addEventListener('scroll', () => {
  if (!scrollPending) {
    scrollPending = true;
    requestAnimationFrame(updateParallax);
  }
}, { passive: true });
motionPreference.addEventListener('change', updateParallax);
window.addEventListener('resize', updateParallax);

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('nav a').forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-10% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
}

document.querySelector('.publication-controls').hidden = false;
const publications = [...document.querySelectorAll('.publication-list li')];
const filters = [...document.querySelectorAll('.filters button')];
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
  let count = 0;
  publications.forEach(publication => {
    publication.hidden = button.dataset.year !== 'all' && publication.dataset.year !== button.dataset.year;
    if (!publication.hidden) count++;
  });
  document.querySelector('.publication-count').textContent = `${String(count).padStart(2, '0')} works`;
}));

if (navigator.clipboard && window.isSecureContext) {
  document.querySelector('.copy-control').hidden = false;
  document.querySelector('#copy-email').addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText('ebrandukova@uidaho.edu');
      status.textContent = 'Email copied.';
    } catch {
      status.textContent = 'Please use the email link.';
    }
  });
}
