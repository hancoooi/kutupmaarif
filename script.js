const temmuz = {
1:{t:"MacGregor Arktik Seferinin Başlangıcı (1937)",d:"1 Temmuz 1937’de MacGregor Arktik Seferi başladı. Sefer, Kanada’nın Ellesmere Adası’ndaki Fort Conger bölgesine ulaşarak Kuzey Kutbu çevresinde meteoroloji, jeomanyetizma ve kutup ışıkları üzerine bilimsel gözlemler yapmak amacıyla düzenlendi. Araştırma gemisi Donald II ile yürütülen çalışmalar, zorlu kış koşulları da dâhil olmak üzere 1938 sonbaharına kadar devam etti. Bu sefer, Kuzey Kutbu’nda modern ve sistematik bilimsel ölçümlerin uygulanması açısından önemlidir. Özellikle hava durumu, manyetik alan ve aurora gözlemleri, Arktik bölgenin fiziksel koşullarının daha iyi anlaşılmasına katkı sağlamış ve sonraki kutup araştırmalarına bilimsel altyapı oluşturmuştur.",s:"https://kids.kiddle.co/MacGregor_Arctic_Expedition"},
2:{t:"CONTRASTS Kutup Araştırma Seferi’nin Başlangıcı (2025)",d:"Alfred Wegener Enstitüsü tarafından yürütülen CONTRASTS (PS149) projesi, 2025 yazında Arktik Okyanusu'ndaki deniz buzlarının erime süreçlerini ve bu süreçlerin ekosistem üzerindeki etkilerini incelemeyi hedefleyen kapsamlı bir keşif gezisidir. Araştırma kapsamında, mevsimlik buzdan çok yıllık yaşlı buzlara kadar üç farklı buz rejimindeki fiziksel, oşinografik ve biyokimyasal değişimler, Polarstern araştırma gemisi ve otonom istasyonlar aracılığıyla gözlemlenmiştir. Elde edilen verilerle Arktik bölgesindeki iklim değişikliğinin nedenleri ve sonuçlarının daha iyi anlaşılması, böylece gelecekteki çevresel etkilerin daha isabetli öngörülmesi amaçlanmaktadır.",s:"https://www.awi.de/en/science/climate-sciences/sea-ice-physics/projects/translate-to-english-contrasts.html"},
3:{t:"ABD’nin Antarktika Antlaşması Çevre Koruma Protokolü’nü İmzalaması",d:"ABD Başkanı George H. W. Bush, 1959 Antarktika Antlaşması’na ek çevresel koruma protokolü çerçevesinde Antarktika’da 50 yıl süreyle madenciliği yasaklayan uluslararası anlaşmayı (Madencilik Protokolü) imzalayacağını açıkladı. Bu kararla ABD, uzun süredir karşı çıktığı madencilik yasağı içeren protokole onay vermiştir.",s:"https://shorturl.at/Y42qq"},
4:{t:"Nordenskiöld Arktik Seferi Başlangıcı (1872)",d:"1872–1873 Arctic seferi, Prof. Adolf Erik Nordenskiöld liderliğinde 4 Temmuz 1872’de Göteborg, İsveç’ten Svalbard’a hareketle başlamıştır.",s:"https://www.thejubileeexpedition.com/expedition"},
5:{t:"Fred Roots Doğum Günü (1923)",d:"Fred Roots (doğum: 5 Temmuz 1923), Kanadalı bir jeolog ve kutup araştırmacısıdır.",s:"https://iasc.info/news/iasc-news/257-in-memoriam-fred-roots-polar-scientist-educator-and-one-of-iasc-s-founders"},
6:{t:"Robert Peary ve Matthew Henson’ın Kuzey Kutbu Seferi İçin Yola Çıkışı",d:"6 Temmuz 1908 tarihinde Robert E. Peary liderliğindeki Kuzey Kutbu seferi yola çıktı.",s:"https://www.nationalgeographic.com/adventure/article/the-legacy-of-arctic-explorer-matthew-henson"},
7:{t:"İkinci Ulusal Arktik Bilimsel Araştırma Seferi (TASE-II)",d:"TÜBİTAK koordinasyonunda yürütülen TASE-II başladı.",s:"https://tubitak.gov.tr/tr/haber/ikinci-ulusal-arktik-bilimsel-arastirma-seferi-tase-ii-basladi"},
8:{t:"Prag Deklarasyonu (2019)",d:"Antarktika Antlaşması’nın 60. yılı anısına ilan edildi.",s:"https://shorturl.at/KjQRS"},
9:{t:"RV Polarstern İlk Buz İstasyonuna Ulaştı (2025)",d:"CONTRASTS seferi kapsamında ilk buz istasyonuna ulaşıldı.",s:"https://en.wikipedia.org/wiki/CONTRASTS_Expedition"},
10:{t:"Arktika-2007 Rus Kutup Araştırma Seferi",d:"Rusya tarafından yürütülen Arktika-2007 seferi başladı.",s:"https://ansiklopedi.tubitak.gov.tr/kutup/ansiklopedi/2007-rus-arastirma-yuksek-enlem-seferi-2007"}
};

function loadMonth(m){
  const days=document.getElementById("days");
  days.innerHTML="";
  for(let i=1;i<=30;i++){
    days.innerHTML+=`<div class="day" onclick="showDay('${m}',${i})"><div class="circle">${i}</div><div class="card">${m.toUpperCase()} ${i}</div></div>`;
  }
}

function showDay(m,d){
  const box=document.getElementById("detail");
  if(m==="temmuz" && temmuz[d]){
    box.innerHTML=`<h2>${temmuz[d].t}</h2><p>${temmuz[d].d}</p><p><b>Kaynak:</b> <a href="${temmuz[d].s}" target="_blank">${temmuz[d].s}</a></p>`;
  } else {
    box.innerHTML="<h2>Henüz içerik yok</h2><p>Bu gün daha sonra doldurulacaktır.</p>";
  }
}

loadMonth("temmuz");
