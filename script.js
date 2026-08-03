// ---------- mobile nav ----------
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks){
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const open = navLinks.classList.contains('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

/* ==========================================================================
   INVENTORY DATA
   Each car's `images` is an array — right now every listing has a single
   photo pulled from the old site, but the gallery UI below already supports
   multiple photos per car. Add more URLs to an `images` array any time and
   the arrows/dots in the popup will pick them up automatically.
   ========================================================================== */
const CARS = [
  {
    id: 'rav4-2013',
    status: 'soon',
    title: '2013 Toyota RAV4',
    km: '217,000 km',
    price: '$9,999',
    priceNote: '+ HST + safety',
    desc: 'Clean CARFAX RAV4 in red. Coming soon to the lot.',
    features: ['Automatic', 'Air conditioning', 'Power windows & locks', 'Keyless entry'],
    carfax: 'https://vhr.carfax.ca/?id=wk6axznyVCtVT6WcpSW1W9yDIpC6spgt',
    images: ['https://car-showcase-keeper.lovable.app/__l5e/assets-v1/7f10271d-e5e0-4223-9514-b8c78456ad68/13ravred.jpg']
  },
  {
    id: 'priusv-2015',
    status: 'sale',
    title: '2015 Toyota Prius V',
    km: '223,000 km',
    price: '$8,999',
    priceNote: '+ HST + safety',
    desc: 'One owner, clean CARFAX hybrid wagon with excellent fuel economy.',
    features: ['Automatic', 'Air conditioning', 'Alloy wheels', 'Keyless entry'],
    carfax: 'https://vhr.carfax.ca/?id=OHZQ1Ro8IK0oArc6wQoltmARJBnQ+nWT',
    images: ['https://car-showcase-keeper.lovable.app/__l5e/assets-v1/2788c1cb-8da0-4058-aab0-298253be472c/15priusV.jpg']
  },
  {
    id: 'matrix-2011',
    status: 'sale',
    title: '2011 Toyota Matrix',
    km: '203,000 km',
    price: '$4,999',
    priceNote: '+ HST + safety',
    desc: 'Clean CARFAX hatchback, practical and economical daily driver.',
    features: ['Automatic', 'Air conditioning', 'Power windows & locks'],
    carfax: 'https://vhr.carfax.ca/?id=rEoU6Wq7q8pKFxKPfqQUeOmYHn3JgDWs',
    images: ['https://car-showcase-keeper.lovable.app/__l5e/assets-v1/35e4a28b-b583-4f92-98bd-b626d12db6a3/11matrix.jpg']
  },
  {
    id: 'corolla-2016',
    status: 'sale',
    title: '2016 Toyota Corolla LE',
    km: '291,000 km',
    price: '$6,999',
    priceNote: '+ HST',
    desc: 'Clean CARFAX Corolla LE, well maintained and ready to drive.',
    features: ['Automatic', 'Air conditioning', 'Alloy wheels', 'Power windows & locks'],
    carfax: 'https://vhr.carfax.ca/?id=ybvqF9Jt4mPvF6bhExFnGz3J3Aw+Udi9',
    images: ['https://car-showcase-keeper.lovable.app/__l5e/assets-v1/8b9e132f-8538-4e52-b395-981aef2b7472/16corolla.jpg']
  },
  {
    id: 'priusc-2014',
    status: 'soon',
    title: '2014 Toyota Prius C',
    km: '146,000 km',
    price: '$6,999',
    priceNote: '+ HST',
    desc: 'Clean CARFAX compact hybrid. Coming soon to the lot.',
    features: ['Automatic', 'Air conditioning', 'Power windows & locks', 'Keyless entry'],
    carfax: 'https://vhr.carfax.ca/?id=%2FftmGdOj9X6BNyfTKZM+5QX8D5jJH+WP',
    images: ['https://car-showcase-keeper.lovable.app/__l5e/assets-v1/e3842f29-02ea-42e3-8a22-7cc746806942/14priusC.jpg']
  },
  {
    id: 'camryle-2010',
    status: 'soon',
    title: '2010 Toyota Camry LE',
    km: '166,000 km',
    price: '$5,999',
    priceNote: '+ HST + safety',
    desc: 'Clean CARFAX Camry LE with low kilometres for the year. Coming soon.',
    features: ['Automatic', 'Air conditioning', 'Power windows & locks'],
    carfax: 'https://vhr.carfax.ca/?id=T%2Fm%2FomfUPY1O22%2FPsi%2F%2FMQ2aIMmy0kcL',
    images: ['https://car-showcase-keeper.lovable.app/__l5e/assets-v1/eb60789c-1cfe-4278-b9ac-b5e3450c639a/10camry160k.jpg']
  },
  {
    id: 'camryse-2011',
    status: 'sale',
    title: '2011 Toyota Camry SE',
    km: '246,000 km',
    price: '$5,999',
    priceNote: '+ HST',
    desc: 'Black Camry SE, sporty trim with a comfortable ride.',
    features: ['Automatic', 'Air conditioning', 'Power windows & locks', 'Keyless entry'],
    carfax: 'https://vhr.carfax.ca/?id=qJucVyB%2FyjDUxrN5lnRArKUn8d4r8GU5',
    images: ['https://car-showcase-keeper.lovable.app/__l5e/assets-v1/c4296ac0-eb8c-4bb7-aad6-e15d9d22773a/11camrySEblk.jpg']
  },
  {
    id: 'camryxle-2011',
    status: 'sale',
    title: '2011 Toyota Camry XLE',
    km: 'Leather, sunroof, alloy',
    price: '$5,999',
    priceNote: '+ HST',
    desc: 'Top trim XLE with leather interior, sunroof and alloy wheels.',
    features: ['Automatic', 'Leather', 'Sunroof', 'Alloy wheels', 'Keyless entry'],
    carfax: 'https://vhr.carfax.ca/?id=r1X6IOICuoH7ZIql%2F79SPQIhedobXNe2',
    images: ['https://car-showcase-keeper.lovable.app/__l5e/assets-v1/46604a4c-b84d-4b74-b95a-a279ca70b0ff/11camryxle.jpg', 'https://cdn.jdpower.com/JDPA_2021%20Toyota%20Camry%20TRD%20White%20Front%20Quarter.jpg']
  },
  {
    id: 'mazda3-2014',
    status: 'sale',
    title: '2014 Mazda 3',
    km: '212,000 km',
    price: '$4,999',
    priceNote: '+ HST + safety',
    desc: 'Clean CARFAX Mazda 3, fun to drive and fuel efficient.',
    features: ['Automatic', 'Air conditioning', 'Power windows & locks'],
    carfax: 'https://vhr.carfax.ca/?id=X649S5nuLrFpMuIj7WEc+OJrsbs+s2nM',
    images: ['https://car-showcase-keeper.lovable.app/__l5e/assets-v1/d82d0186-a627-4781-9765-974d2cb52433/14mazda.jpg']
  }
];

const SOLD = [
  {
    id: 'civic-2021',
    status: 'sold',
    title: '2021 Honda Civic Hatchback Sport',
    km: '333,xxx km',
    price: 'Sold',
    priceNote: '',
    desc: 'In excellent condition and well maintained, clean inside and out, and drove great. Sporty design with a fuel-efficient turbo engine.',
    features: ['Turbo engine', 'Automatic CVT', 'Backup camera', 'Apple CarPlay / Android Auto', 'Heated seats', 'Alloy wheels'],
    carfax: null,
    images: ['https://car-showcase-keeper.lovable.app/__l5e/assets-v1/4b1b9b54-8057-442e-873b-fba50985c191/civic-sport.jpg']
  },
  {
    id: 'priusprime-2021',
    status: 'sold',
    title: '2021 Toyota Prius Prime Plug-In Hybrid',
    km: '216,xxx km',
    price: 'Sold',
    priceNote: '',
    desc: 'Exceptional fuel economy with the convenience of a plug-in hybrid system that charges at home while still running as a regular hybrid on longer trips.',
    features: ['Plug-in hybrid', 'Home charging', 'Automatic', 'Fuel efficient'],
    carfax: null,
    images: ['https://car-showcase-keeper.lovable.app/__l5e/assets-v1/a77b7226-f411-4537-8d5a-dffae001b9a5/prius-prime.jpg']
  },
  {
    id: 'rs5-2019',
    status: 'sold',
    title: '2019 Audi RS5',
    km: '63,xxx km',
    price: 'Sold',
    priceNote: '',
    desc: 'The perfect combination of luxury and performance. Meticulously maintained and an absolute thrill to drive.',
    features: ['2.9L Twin-Turbo V6', 'Quattro all-wheel drive', 'Carbon fibre interior trim', 'Premium leather interior', 'Virtual cockpit', 'Bang & Olufsen sound', 'Heated sport seats'],
    carfax: null,
    images: ['https://car-showcase-keeper.lovable.app/__l5e/assets-v1/6299797a-7c04-4073-ae7d-3d051682c252/audi-rs5.jpg']
  }
];

const STATUS_LABEL = { sale: 'For sale', soon: 'Coming soon', sold: 'Sold' };

function cardHTML(car){
  return `
    <article class="card" data-id="${car.id}" tabindex="0" role="button" aria-label="View details for ${car.title}">
      <div class="card-media">
        <span class="badge ${car.status === 'soon' ? 'soon' : car.status === 'sold' ? 'sold' : ''}">${STATUS_LABEL[car.status]}</span>
        <img src="${car.images[0]}" alt="${car.title}" loading="lazy">
      </div>
      <div class="card-body">
        <h3>${car.title}</h3>
        <div class="card-meta">
          <span>${car.km}</span>
          <span class="price">${car.price}</span>
        </div>
        <p class="card-desc">${car.desc}</p>
        <span class="card-cta">View photos &amp; details →</span>
      </div>
    </article>`;
}

function renderGrid(el, list){
  if (!el) return;
  el.innerHTML = list.map(cardHTML).join('');
  el.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
    card.addEventListener('keypress', (e) => { if (e.key === 'Enter') openModal(card.dataset.id); });
  });
}

const ALL_CARS = [...CARS, ...SOLD];
let galleryIndex = 0;
let activeCar = null;

const backdrop = document.getElementById('modal-backdrop');
const modalGallery = document.getElementById('modal-gallery');
const modalSticker = document.getElementById('modal-sticker');

function openModal(id){
  activeCar = ALL_CARS.find(c => c.id === id);
  if (!activeCar || !backdrop) return;
  galleryIndex = 0;
  renderModal();
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  if (!backdrop) return;
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

function renderModal(){
  if (!activeCar) return;
  const car = activeCar;
  const multi = car.images.length > 1;

  modalGallery.innerHTML = `
    <img src="${car.images[galleryIndex]}" alt="${car.title} photo ${galleryIndex + 1} of ${car.images.length}">
    ${multi ? `
      <button class="gallery-nav prev" aria-label="Previous photo">‹</button>
      <button class="gallery-nav next" aria-label="Next photo">›</button>
      <div class="gallery-dots">${car.images.map((_, i) => `<span class="${i === galleryIndex ? 'active' : ''}"></span>`).join('')}</div>
    ` : ''}
  `;

  if (multi){
    modalGallery.querySelector('.prev').addEventListener('click', () => { galleryIndex = (galleryIndex - 1 + car.images.length) % car.images.length; renderModal(); });
    modalGallery.querySelector('.next').addEventListener('click', () => { galleryIndex = (galleryIndex + 1) % car.images.length; renderModal(); });
  }

  modalSticker.innerHTML = `
    <span class="badge ${car.status === 'soon' ? 'soon' : car.status === 'sold' ? 'sold' : ''}">${STATUS_LABEL[car.status]}</span>
    <h2>${car.title}</h2>
    <div class="km">${car.km}</div>
    <div class="price-row">
      <span class="price">${car.price}</span>
      <span class="fine">${car.priceNote}</span>
    </div>
    <p class="desc">${car.desc}</p>
    <div class="feat-label">Equipment</div>
    <ul class="feat-list">${car.features.map(f => `<li>${f}</li>`).join('')}</ul>
    <div class="modal-actions">
      ${car.carfax ? `<a class="btn solid" href="${car.carfax}" target="_blank" rel="noopener">View CARFAX report</a>` : ''}
      <a class="btn ghost" href="tel:+14167104365">Ask about this car</a>
    </div>
  `;
}

if (backdrop){
  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

// ---------- filters ----------
const filterBar = document.querySelector('.filters');
const gridEl = document.getElementById('inventory-grid');
if (filterBar && gridEl){
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    const list = f === 'all' ? CARS : CARS.filter(c => c.status === f);
    renderGrid(gridEl, list);
  });
}

// ---------- initial render ----------
renderGrid(document.getElementById('inventory-grid'), CARS);
renderGrid(document.getElementById('sold-grid'), SOLD);
renderGrid(document.getElementById('home-preview-grid'), CARS.slice(0, 3));
