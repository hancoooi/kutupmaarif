diff --git a/script.js b/script.js
index e614c73ae8179aff6e913f6b125df5a871b8e4be..e97a74b2af20f62022c871e8a2e35c53dc950aec 100644
--- a/script.js
+++ b/script.js
@@ -1,34 +1,73 @@
-const temmuz = {
-1:{t:"MacGregor Arktik Seferinin Başlangıcı (1937)",d:"1 Temmuz 1937’de MacGregor Arktik Seferi başladı. Sefer, Kanada’nın Ellesmere Adası’ndaki Fort Conger bölgesine ulaşarak Kuzey Kutbu çevresinde meteoroloji, jeomanyetizma ve kutup ışıkları üzerine bilimsel gözlemler yapmak amacıyla düzenlendi. Araştırma gemisi Donald II ile yürütülen çalışmalar, zorlu kış koşulları da dâhil olmak üzere 1938 sonbaharına kadar devam etti. Bu sefer, Kuzey Kutbu’nda modern ve sistematik bilimsel ölçümlerin uygulanması açısından önemlidir. Özellikle hava durumu, manyetik alan ve aurora gözlemleri, Arktik bölgenin fiziksel koşullarının daha iyi anlaşılmasına katkı sağlamış ve sonraki kutup araştırmalarına bilimsel altyapı oluşturmuştur.",s:"https://kids.kiddle.co/MacGregor_Arctic_Expedition"},
-2:{t:"CONTRASTS Kutup Araştırma Seferi’nin Başlangıcı (2025)",d:"Alfred Wegener Enstitüsü tarafından yürütülen CONTRASTS (PS149) projesi, 2025 yazında Arktik Okyanusu'ndaki deniz buzlarının erime süreçlerini ve bu süreçlerin ekosistem üzerindeki etkilerini incelemeyi hedefleyen kapsamlı bir keşif gezisidir. Araştırma kapsamında, mevsimlik buzdan çok yıllık yaşlı buzlara kadar üç farklı buz rejimindeki fiziksel, oşinografik ve biyokimyasal değişimler, Polarstern araştırma gemisi ve otonom istasyonlar aracılığıyla gözlemlenmiştir. Elde edilen verilerle Arktik bölgesindeki iklim değişikliğinin nedenleri ve sonuçlarının daha iyi anlaşılması, böylece gelecekteki çevresel etkilerin daha isabetli öngörülmesi amaçlanmaktadır.",s:"https://www.awi.de/en/science/climate-sciences/sea-ice-physics/projects/translate-to-english-contrasts.html"},
-3:{t:"ABD’nin Antarktika Antlaşması Çevre Koruma Protokolü’nü İmzalaması",d:"ABD Başkanı George H. W. Bush, 1959 Antarktika Antlaşması’na ek çevresel koruma protokolü çerçevesinde Antarktika’da 50 yıl süreyle madenciliği yasaklayan uluslararası anlaşmayı (Madencilik Protokolü) imzalayacağını açıkladı. Bu kararla ABD, uzun süredir karşı çıktığı madencilik yasağı içeren protokole onay vermiştir.",s:"https://shorturl.at/Y42qq"},
-4:{t:"Nordenskiöld Arktik Seferi Başlangıcı (1872)",d:"1872–1873 Arctic seferi, Prof. Adolf Erik Nordenskiöld liderliğinde 4 Temmuz 1872’de Göteborg, İsveç’ten Svalbard’a hareketle başlamıştır.",s:"https://www.thejubileeexpedition.com/expedition"},
-5:{t:"Fred Roots Doğum Günü (1923)",d:"Fred Roots (doğum: 5 Temmuz 1923), Kanadalı bir jeolog ve kutup araştırmacısıdır.",s:"https://iasc.info/news/iasc-news/257-in-memoriam-fred-roots-polar-scientist-educator-and-one-of-iasc-s-founders"},
-6:{t:"Robert Peary ve Matthew Henson’ın Kuzey Kutbu Seferi İçin Yola Çıkışı",d:"6 Temmuz 1908 tarihinde Robert E. Peary liderliğindeki Kuzey Kutbu seferi yola çıktı.",s:"https://www.nationalgeographic.com/adventure/article/the-legacy-of-arctic-explorer-matthew-henson"},
-7:{t:"İkinci Ulusal Arktik Bilimsel Araştırma Seferi (TASE-II)",d:"TÜBİTAK koordinasyonunda yürütülen TASE-II başladı.",s:"https://tubitak.gov.tr/tr/haber/ikinci-ulusal-arktik-bilimsel-arastirma-seferi-tase-ii-basladi"},
-8:{t:"Prag Deklarasyonu (2019)",d:"Antarktika Antlaşması’nın 60. yılı anısına ilan edildi.",s:"https://shorturl.at/KjQRS"},
-9:{t:"RV Polarstern İlk Buz İstasyonuna Ulaştı (2025)",d:"CONTRASTS seferi kapsamında ilk buz istasyonuna ulaşıldı.",s:"https://en.wikipedia.org/wiki/CONTRASTS_Expedition"},
-10:{t:"Arktika-2007 Rus Kutup Araştırma Seferi",d:"Rusya tarafından yürütülen Arktika-2007 seferi başladı.",s:"https://ansiklopedi.tubitak.gov.tr/kutup/ansiklopedi/2007-rus-arastirma-yuksek-enlem-seferi-2007"}
-};
-
-function loadMonth(m){
-  const days=document.getElementById("days");
-  days.innerHTML="";
-  for(let i=1;i<=30;i++){
-    days.innerHTML+=`<div class="day" onclick="showDay('${m}',${i})"><div class="circle">${i}</div><div class="card">${m.toUpperCase()} ${i}</div></div>`;
-  }
-}
-
-function showDay(day){
-  const data = temmuz[day];
-
-  document.getElementById("dayTitle").innerText = data.t;
-
-  document.getElementById("dayText").innerHTML = `
-    <img src="images/temmuz${day}.jpg" class="day-img">
-    <p>${data.d.replace(/\n/g,"<br>")}</p>
-  `;
-}
-
-loadMonth("temmuz");
-
+const monthNames = ['ocak', 'subat', 'mart', 'nisan', 'mayis', 'haziran', 'temmuz', 'agustos', 'eylul', 'ekim', 'kasim', 'aralik'];
+let monthIndex = 6;
+
+const temmuz = {
+  1: { t: 'MacGregor Arktik Seferinin Başlangıcı (1937)', d: '1 Temmuz 1937’de MacGregor Arktik Seferi başladı. Sefer, Kanada’nın Ellesmere Adası’ndaki Fort Conger bölgesine ulaşarak Kuzey Kutbu çevresinde meteoroloji, jeomanyetizma ve kutup ışıkları üzerine bilimsel gözlemler yapmak amacıyla düzenlendi.', s: 'https://kids.kiddle.co/MacGregor_Arctic_Expedition' },
+  2: { t: 'CONTRASTS Kutup Araştırma Seferi’nin Başlangıcı (2025)', d: 'Alfred Wegener Enstitüsü tarafından yürütülen CONTRASTS projesi, Arktik Okyanusu’ndaki deniz buzlarının erime süreçlerini inceleyen kapsamlı bir keşif programıdır.', s: 'https://www.awi.de/en/science/climate-sciences/sea-ice-physics/projects/translate-to-english-contrasts.html' },
+  3: { t: 'ABD’nin Antarktika Antlaşması Çevre Koruma Protokolü', d: 'ABD, Antarktika’da madenciliği sınırlayan çevresel koruma protokolüne destek vererek önemli bir dönüm noktası oluşturmuştur.', s: 'https://shorturl.at/Y42qq' },
+  4: { t: 'Nordenskiöld Arktik Seferi Başlangıcı (1872)', d: 'Nordenskiöld liderliğindeki sefer, Kuzey Kutbu keşif tarihinin önemli girişimlerinden biridir.', s: 'https://www.thejubileeexpedition.com/expedition' },
+  5: { t: 'Fred Roots Doğum Günü (1923)', d: 'Kanadalı jeolog ve kutup araştırmacısı Fred Roots, kutup bilimine sunduğu katkılarla tanınmıştır.', s: 'https://iasc.info/news/iasc-news/257-in-memoriam-fred-roots-polar-scientist-educator-and-one-of-iasc-s-founders' },
+  6: { t: 'Peary ve Henson Sefer Hazırlıkları', d: 'Kuzey Kutbu seferlerine dair modern kutup tarihini etkileyen hazırlık süreçleri bu tarihte hız kazanmıştır.', s: 'https://www.nationalgeographic.com/adventure/article/the-legacy-of-arctic-explorer-matthew-henson' },
+  7: { t: 'TASE-II Başlangıcı', d: 'TÜBİTAK koordinasyonundaki ikinci ulusal Arktik sefer çalışmaları başladı.', s: 'https://tubitak.gov.tr/tr/haber/ikinci-ulusal-arktik-bilimsel-arastirma-seferi-tase-ii-basladi' },
+  8: { t: 'Prag Deklarasyonu (2019)', d: 'Antarktika Antlaşması’nın 60. yılı kapsamında uluslararası iş birliği ve bilimsel barış vurgusu öne çıkmıştır.', s: 'https://shorturl.at/KjQRS' },
+  9: { t: 'RV Polarstern İlk Buz İstasyonuna Ulaştı', d: 'Araştırma gemisi Polarstern, saha ölçümleri için kritik bir buz istasyonuna erişmiştir.', s: 'https://en.wikipedia.org/wiki/CONTRASTS_Expedition' },
+  10: { t: 'Arktika-2007 Rus Kutup Araştırma Seferi', d: 'Rusya’nın yüksek enlem araştırmalarında sembol olan Arktika-2007 seferine ilişkin kayıtlar bu güne aittir.', s: 'https://ansiklopedi.tubitak.gov.tr/kutup/ansiklopedi/2007-rus-arastirma-yuksek-enlem-seferi-2007' }
+};
+
+function getMonthLabel() {
+  return monthNames[monthIndex].toUpperCase();
+}
+
+function loadMonth() {
+  const month = monthNames[monthIndex];
+  const days = document.getElementById('days');
+  days.innerHTML = '';
+
+  for (let i = 1; i <= 31; i += 1) {
+    const row = document.createElement('div');
+    row.className = 'day';
+    row.onclick = () => showDay(month, i, row);
+    row.innerHTML = `
+      <div class="circle"><strong>${String(i).padStart(2, '0')}</strong><span>${month.slice(0, 3)}</span></div>
+      <div class="card">${month.charAt(0).toUpperCase() + month.slice(1)} - ${temmuz[i]?.t || 'Henüz içerik yok'}</div>
+    `;
+    days.appendChild(row);
+  }
+
+  document.getElementById('activeMonth').textContent = getMonthLabel();
+  showDay(month, 1, days.firstElementChild);
+}
+
+function showDay(month, day, el) {
+  document.querySelectorAll('.day').forEach((d) => d.classList.remove('active'));
+  if (el) el.classList.add('active');
+
+  const data = month === 'temmuz' ? temmuz[day] : null;
+  const box = document.getElementById('detail');
+
+  if (!data) {
+    box.innerHTML = '<h2>Henüz içerik yok</h2><p>Bu gün için içerik daha sonra eklenecektir.</p>';
+    document.getElementById('heroImage').src = 'temmuz1.jpg';
+    return;
+  }
+
+  document.getElementById('heroImage').src = day % 2 === 0 ? 'temmuz26.jpg' : 'temmuz1.jpg';
+  box.innerHTML = `
+    <h2>${data.t}</h2>
+    <p>${day} ${month.charAt(0).toUpperCase() + month.slice(1)} tarihinde gerçekleşen olay.</p>
+    <p>${data.d}</p>
+    <p><strong>Kaynak:</strong> <a href="${data.s}" target="_blank" rel="noopener noreferrer">${data.s}</a></p>
+  `;
+}
+
+function prevMonth() {
+  monthIndex = (monthIndex + 11) % 12;
+  loadMonth();
+}
+
+function nextMonth() {
+  monthIndex = (monthIndex + 1) % 12;
+  loadMonth();
+}
+
+loadMonth();
