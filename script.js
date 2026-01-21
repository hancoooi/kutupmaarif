const days = {
  "1 Temmuz": "1 Temmuz 1937’de MacGregor Arktik Seferi başladı.
Sefer, Kanada’nın Ellesmere Adası’ndaki Fort Conger bölgesine ulaşarak Kuzey Kutbu çevresinde meteoroloji, jeomanyetizma ve kutup ışıkları üzerine bilimsel gözlemler yapmak amacıyla düzenlendi.Araştırma gemisi Donald II ile yürütülen çalışmalar, zorlu kış koşulları da dâhil olmak üzere 1938 sonbaharına kadar devam etti.Bu sefer, Kuzey Kutbu’nda modern ve sistematik bilimsel ölçümlerin uygulanması açısından önemlidir.Özellikle hava durumu, manyetik alan ve aurora gözlemleri, Arktik bölgenin fiziksel koşullarının daha iyi anlaşılmasına katkı sağlamış ve sonraki kutup araştırmalarına bilimsel altyapı oluşturmuştur.
    Türkiye’nin Ulusal Arktik Bilimsel Araştırma Seferi(TASE), bu tarihte Arktik Okyanusu’nda bilimsel ölçümler gerçekleştirmiştir.",
  "15 Temmuz": "Kutup bölgelerinde deniz buzu kalınlığı ve sıcaklık değişimleri üzerine gözlemler yapılmıştır.",
  "1 Ağustos": "Kutup ekosistemlerinde iklim değişikliğinin etkileri bilimsel raporlarla ortaya konmuştur.",
  "6 Ağustos": "Arktik seferleri kapsamında deniz suyu ve atmosfer örnekleri toplanmıştır."
};

const calendar = document.getElementById("calendar");
const title = document.getElementById("dayTitle");
const text = document.getElementById("dayText");

for (let day in days) {
  const div = document.createElement("div");
  div.className = "day";
  div.innerText = day;

  div.onclick = function () {
    title.innerText = day;
    text.innerText = days[day];
  };

  calendar.appendChild(div);
}
