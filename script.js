let activeCurrency = 'INR';
const INR_TO_USD = 84;

const DESTINATION_PHOTOS = {
  'Varanasi': [
    { file: 'images/VNS.jpeg', label: 'VNS.jpeg', fallback: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80' },
    { file: 'images/VNS2.jpeg', label: 'VNS2.jpeg', fallback: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80' },
    { file: 'images/VNS3.jpeg', label: 'VNS3.jpeg', fallback: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80' },
    { file: 'images/VNS4.jpeg', label: 'VNS4.jpeg', fallback: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80' },
    { file: 'images/VNS5.jpeg', label: 'VNS5.jpeg', fallback: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80' }
  ],
  'Prayagraj': [
    { file: 'images/pra1.jpeg', label: 'pra1.jpeg', fallback: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80' },
    { file: 'images/pra2.jpeg', label: 'pra2.jpeg', fallback: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80' },
    { file: 'images/pra3.jpeg', label: 'pra3.jpeg', fallback: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80' }
  ],
  'Ayodhya': [
    { file: 'images/ayo1.jpeg', label: 'ayo1.jpeg', fallback: 'https://images.unsplash.com/photo-1706186839147-0d708602587b?auto=format&fit=crop&w=800&q=80' },
    { file: 'images/ayo2.jpeg', label: 'ayo2.jpeg', fallback: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80' },
    { file: 'images/ayo3.jpeg', label: 'ayo3.jpeg', fallback: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80' }
  ],
  'Sasaram': [
    { file: 'images/ssm1.jpeg', label: 'ssm1.jpeg', fallback: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80' },
    { file: 'images/ssm2.jpeg', label: 'ssm2.jpeg', fallback: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80' },
    { file: 'images/ssm3.jpeg', label: 'ssm3.jpeg', fallback: 'https://images.unsplash.com/photo-1623057000049-e220f79c7051?auto=format&fit=crop&w=800&q=80' },
    { file: 'images/ssm4.jpeg', label: 'ssm4.jpeg', fallback: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80' },
    { file: 'images/ssm5.jpeg', label: 'ssm5.jpeg', fallback: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80' }
  ],
  'Mundeshwari': [
    { file: 'images/mund1.jpeg', label: 'mund1.jpeg', fallback: 'https://images.unsplash.com/photo-1623057000049-e220f79c7051?auto=format&fit=crop&w=800&q=80' },
    { file: 'images/mund2.jpeg', label: 'mund2.jpeg', fallback: 'https://images.unsplash.com/photo-1623057000049-e220f79c7051?auto=format&fit=crop&w=800&q=80' },
    { file: 'images/mund3.jpeg', label: 'mund3.jpeg', fallback: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80' }
  ],
  'Gaya & Bodh Gaya': [
    { file: 'images/bodh1.jpeg', label: 'bodh1.jpeg', fallback: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80' },
    { file: 'images/bodh2.jpeg', label: 'bodh2.jpeg', fallback: 'https://images.unsplash.com/photo-1623057000049-e220f79c7051?auto=format&fit=crop&w=800&q=80' },
    { file: 'images/bodh4.jpeg', label: 'bodh4.jpeg', fallback: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80' },
    { file: 'images/bodh5.jpeg', label: 'bodh5.jpeg', fallback: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80' }
  ]
};

function attachImageFallbacks() {
  document.querySelectorAll('img[data-fallback]').forEach(img => {
    img.onerror = function () {
      if (this.dataset.fallback && this.src !== this.dataset.fallback) {
        this.src = this.dataset.fallback;
      }
    };
  });
}

function toggleNavDrawer(force) {
  const drawer = document.getElementById('navDrawer');
  const show = typeof force === 'boolean' ? force : drawer.classList.contains('hidden');
  drawer.classList.toggle('hidden', !show);
}

function swapCardImg(mainId, btn, localSrc, fallbackSrc) {
  const img = document.getElementById(mainId);
  if (!img) return;
  img.dataset.fallback = fallbackSrc;
  img.src = localSrc;
  btn.parentElement.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function formatMoney(inr, usdOverride) {
  if (activeCurrency === 'USD') {
    const val = typeof usdOverride === 'number' ? usdOverride : Math.round(inr / INR_TO_USD);
    return '$' + val.toLocaleString('en-US') + ' USD';
  }
  return '₹' + Math.round(inr).toLocaleString('en-IN');
}

function setCurrency(curr) {
  activeCurrency = curr;
  const isUSD = curr === 'USD';
  document.getElementById('currBtnINR').classList.toggle('active', !isUSD);
  document.getElementById('currBtnUSD').classList.toggle('active', isUSD);
  document.getElementById('plannerCurrINR').className = isUSD ? 'btn-sec' : 'btn-pri';
  document.getElementById('plannerCurrUSD').className = isUSD ? 'btn-pri' : 'btn-sec';

  document.querySelectorAll('.price-tag').forEach(el => {
    el.textContent = formatMoney(Number(el.dataset.inr), Number(el.dataset.usd));
  });
  recalculatePlan();
}

function handleSearchFilter(q) {
  const term = q.trim().toLowerCase();
  let count = 0;
  document.querySelectorAll('.filterable-card').forEach(card => {
    const match = !term || (card.dataset.keywords + ' ' + card.textContent).toLowerCase().includes(term);
    card.classList.toggle('hidden', !match);
    if (match) count++;
  });
  const st = document.getElementById('searchStatusText');
  if (term) {
    st.classList.remove('hidden');
    st.textContent = `Showing ${count} result(s) for "${q}"`;
  } else {
    st.classList.add('hidden');
  }
}

function recalculatePlan() {
  const checked = Array.from(document.querySelectorAll('.dest-checkbox:checked')).map(c => c.value);
  const travellers = Math.max(1, parseInt(document.getElementById('travellersInput').value || '1', 10));
  const days = Math.max(1, parseInt(document.getElementById('daysInput').value || '1', 10));
  const transport = document.getElementById('transportSelect').value;
  const hotel = document.getElementById('hotelSelect').value;
  const meals = document.getElementById('mealsSelect').value;

  const order = ['Varanasi', 'Ayodhya', 'Prayagraj', 'Gaya & Bodh Gaya', 'Mundeshwari', 'Sasaram'];
  const stops = order.filter(s => checked.includes(s));
  document.getElementById('summaryRouteText').textContent =
    `${stops.length ? stops.join(' -> ') : 'Select at least 1 destination'} (${days}d · ${travellers}p)`;

  const stopCount = Math.max(1, stops.length);
  let transportINR = 0;
  if (transport === 'cab') transportINR = days * 2200 + stopCount * 1000;
  else if (transport === 'bike') transportINR = days * 900 * Math.ceil(travellers / 2) + stopCount * 400;
  else if (transport === 'tempo') transportINR = days * 4200 + stopCount * 1500;
  else if (transport === 'bus') transportINR = days * 6800 + stopCount * 2200;

  const hotelRate = hotel === '2star' ? 750 : hotel === '3star' ? 1250 : 1900;
  const hotelINR = travellers * days * hotelRate;

  const mealRate = meals === 'excluded' ? 0 : meals === 'breakfast' ? 250 : 600;
  const mealsINR = travellers * days * mealRate;

  const totalINR = transportINR + hotelINR + mealsINR;

  document.getElementById('summaryTransportCost').textContent = formatMoney(transportINR);
  document.getElementById('summaryHotelCost').textContent = formatMoney(hotelINR);
  document.getElementById('summaryMealsCost').textContent = formatMoney(mealsINR);
  document.getElementById('summaryTotalCost').textContent = formatMoney(totalINR);

  document.getElementById('vehicleTipBox').textContent =
    travellers >= 7 && (transport === 'cab' || transport === 'bike')
      ? 'Tip: Bus or Tempo Traveller fits groups of 7 or more travellers.'
      : `${stops.length} stop(s) selected for ${travellers} traveller(s) across ${days} day(s).`;

  return { stops, travellers, days, totalINR };
}

function applyPreset(stops, days) {
  document.querySelectorAll('.dest-checkbox').forEach(cb => {
    cb.checked = stops.includes(cb.value);
  });
  document.getElementById('daysInput').value = days;
  recalculatePlan();
}

function loadTrailIntoPlanner(stops, days) {
  applyPreset(stops, days);
  document.getElementById('planner-section').scrollIntoView();
}

function toggleAcc(btn) {
  btn.parentElement.classList.toggle('open');
}

function openBookingModal(title = 'Custom Kashi-Magadh Trail', inr = 11500, usd = 165, days = 3, stops = ['Varanasi', 'Ayodhya']) {
  document.getElementById('bookingSuccessBox').classList.add('hidden');
  document.getElementById('bookingForm').classList.remove('hidden');
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalStops').textContent = stops.join(' -> ');
  document.getElementById('modalDuration').textContent = `${days} Days · ${document.getElementById('travellersInput').value || 2} Travellers`;
  document.getElementById('modalPrice').textContent = formatMoney(inr, usd);
  document.getElementById('bookingModal').classList.add('show');
}

function openBookingFromPlanner() {
  const p = recalculatePlan();
  openBookingModal('Custom Route Planner Itinerary', p.totalINR, Math.round(p.totalINR / INR_TO_USD), p.days, p.stops.length ? p.stops : ['Varanasi']);
}

function closeBookingModal() {
  document.getElementById('bookingModal').classList.remove('show');
}

function submitBookingRequest(e) {
  e.preventDefault();
  const name = document.getElementById('bkName').value.trim();
  const ref = 'KM-' + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('bookingForm').classList.add('hidden');
  document.getElementById('bookingSuccessBox').classList.remove('hidden');
  document.getElementById('bookingRefText').innerHTML = `Ref ID: <strong>${ref}</strong> · Guest: <strong>${name}</strong> · Quote: <strong>${document.getElementById('modalPrice').textContent}</strong>`;
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('newsName').value.trim();
  const fb = document.getElementById('newsletterFeedback');
  fb.textContent = `Thank you, ${name}! Subscribed to Kashi-Magadh trail updates.`;
  fb.classList.remove('hidden');
  e.target.reset();
}

function openGalleryModal(key) {
  const grid = document.getElementById('galleryGrid');
  const title = document.getElementById('galleryModalTitle');
  grid.innerHTML = '';
  let items = [];
  if (key === 'all') {
    title.textContent = 'All 23 Local Destination Photos';
    Object.values(DESTINATION_PHOTOS).forEach(arr => items.push(...arr));
  } else {
    title.textContent = `${key} Photos`;
    items = DESTINATION_PHOTOS[key] || [];
  }
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.innerHTML = `<img src="${item.file}" data-fallback="${item.fallback}" alt="${item.label}" /><div>${item.label}</div>`;
    grid.appendChild(div);
  });
  attachImageFallbacks();
  document.getElementById('galleryModal').classList.add('show');
}

document.addEventListener('DOMContentLoaded', () => {
  attachImageFallbacks();
  recalculatePlan();
});