const monthNames = [
  "ocak", "subat", "mart", "nisan", "mayis", "haziran",
  "temmuz", "agustos", "eylul", "ekim", "kasim", "aralik"
];

const monthNamesTR = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

let monthIndex = 6; // Temmuz

const eventsByDay = {
  1: {
    t: "MacGregor Arktik Seferinin Başlangıcı (1937)",
    d: "1 Temmuz 1937’de MacGregor Arktik Seferi başladı. Sefer, Kanada’nın Ellesmere Adası’ndaki Fort Conger bölgesine ulaşarak Kuzey Kutbu çevresinde meteoroloji, jeomanyetizma ve kutup ışıkları üzerine bilimsel gözlemler yapmak amacıyla düzenlendi.",
    s: "https://kids.kiddle.co/MacGregor_Arctic_Expedition"
  },
  2: {
    t: "CONTRASTS Kutup Araştırma Seferi’nin Başlangıcı (2025)",
    d: "Alfred Wegener Enstitüsü tarafından yürütülen CONTRASTS projesi, Arktik Okyanusu’ndaki deniz buzlarının erime süreçlerini inceleyen kapsamlı bir keşif programıdır.",
    s: "https://www.awi.de/en/science/climate-sciences/sea-ice-physics/projects/translate-to-english-contrasts.html"
  },
  3: {
    t: "ABD’nin Antarktika Antlaşması Çevre Koruma Protokolü",
    d: "ABD, Antarktika’da madenciliği sınırlayan çevresel koruma protokolüne destek vererek önemli bir dönüm noktası oluşturmuştur.",
    s: "https://shorturl.at/Y42qq"
  },
  4: {
    t: "Nordenskiöld Arktik Seferi Başlangıcı (1872)",
    d: "Nordenskiöld liderliğindeki sefer, Kuzey Kutbu keşif tarihinin önemli girişimlerinden biridir.",
    s: "https://www.thejubileeexpedition.com/expedition"
  },
  5: {
    t: "Fred Roots Doğum Günü (1923)",
    d: "Kanadalı jeolog ve kutup araştırmacısı Fred Roots, kutup bilimine sunduğu katkılarla tanınmıştır.",
    s: "https://iasc.info/news/iasc-news/257-in-memoriam-fred-roots-polar-scientist-educator-and-one-of-iasc-s-founders"
  },
  6: {
    t: "Peary ve Henson Sefer Hazırlıkları",
    d: "Kuzey Kutbu seferlerine dair modern kutup tarihini etkileyen hazırlık süreçleri bu tarihte hız kazanmıştır.",
    s: "https://www.nationalgeographic.com/adventure/article/the-legacy-of-arctic-explorer-matthew-henson"
  },
  7: {
    t: "TASE-II Başlangıcı",
    d: "TÜBİTAK koordinasyonundaki ikinci ulusal Arktik sefer çalışmaları başladı.",
    s: "https://tubitak.gov.tr/tr/haber/ikinci-ulusal-arktik-bilimsel-arastirma-seferi-tase-ii-basladi"
  },
  8: {
    t: "Prag Deklarasyonu (2019)",
    d: "Antarktika Antlaşması’nın 60. yılı kapsamında uluslararası iş birliği ve bilimsel barış vurgusu öne çıkmıştır.",
    s: "https://shorturl.at/KjQRS"
  },
  9: {
    t: "RV Polarstern İlk Buz İstasyonuna Ulaştı",
    d: "Araştırma gemisi Polarstern, saha ölçümleri için kritik bir buz istasyonuna erişmiştir.",
    s: "https://en.wikipedia.org/wiki/CONTRASTS_Expedition"
  },
  10: {
    t: "Arktika-2007 Rus Kutup Araştırma Seferi",
    d: "Rusya’nın yüksek enlem araştırmalarında sembol olan Arktika-2007 seferine ilişkin kayıtlar bu güne aittir.",
    s: "https://ansiklopedi.tubitak.gov.tr/kutup/ansiklopedi/2007-rus-arastirma-yuksek-enlem-seferi-2007"
  }
};

const heroList = ["temmuz26.jpg", "temmuz1.jpg"];

function monthLabelUpper() {
  return monthNamesTR[monthIndex].toUpperCase();
}

function loadMonth() {
  const month = monthNames[monthIndex];
  const monthTR = monthNamesTR[monthIndex];
  const daysEl = document.getElementById("days");
  daysEl.innerHTML = "";

  for (let day = 1; day <= 31; day += 1) {
    const data = eventsByDay[day];
    const row = document.createElement("div");
    row.className = "day";

    row.innerHTML = `
      <div class="circle">
        <strong>${String(day).padStart(2, "0")}</strong>
        <span>${monthTR.slice(0, 3)}</span>
      </div>
      <div class="card">${monthTR} - ${data ? data.t : "Henüz içerik yok"}</div>
    `;

    row.onclick = () => showDay(month, day, row);
    daysEl.appendChild(row);
  }

  document.getElementById("activeMonth").textContent = monthLabelUpper();
  showDay(month, 1, daysEl.firstElementChild);
}

function showDay(month, day, rowEl) {
  document.querySelectorAll(".day").forEach((d) => d.classList.remove("active"));
  if (rowEl) rowEl.classList.add("active");

  const data = eventsByDay[day] || null; // sadece Temmuz kilidi yok
  const detail = document.getElementById("detail");
  const hero = document.getElementById("heroImage");

  hero.src = heroList[(day - 1) % heroList.length];

  if (!data) {
    detail.innerHTML = `
      <h2>Henüz içerik yok</h2>
      <p>Bu gün için içerik daha sonra eklenecektir.</p>
    `;
    return;
  }

  const monthTR = monthNamesTR[monthNames.indexOf(month)];

  detail.innerHTML = `
    <h2>${data.t}</h2>
    <p>${day} ${monthTR} tarihinde gerçekleşen olay.</p>
    <p>${data.d}</p>
    <p><strong>Kaynak:</strong> <a href="${data.s}" target="_blank" rel="noopener noreferrer">${data.s}</a></p>
  `;
}

function prevMonth() {
  monthIndex = (monthIndex + 11) % 12;
  loadMonth();
}

function nextMonth() {
  monthIndex = (monthIndex + 1) % 12;
  loadMonth();
}

loadMonth();
