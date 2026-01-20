const days = {
  "7 Temmuz": "Türkiye’nin Ulusal Arktik Bilimsel Araştırma Seferi (TASE), bu tarihte Arktik Okyanusu’nda bilimsel ölçümler gerçekleştirmiştir.",
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
