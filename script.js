const months = [
  { key: "temmuz", label: "TEMMUZ", short: "tem", days: 31 },
  { key: "ağustos", label: "AĞUSTOS", short: "agu", days: 31 },
  { key: "eylül", label: "EYLÜL", short: "eyl", days: 30 },
  { key: "ekim", label: "EKİM", short: "eki", days: 31 },
  { key: "kasım", label: "KASIM", short: "kas", days: 30 },
  { key: "aralık", label: "ARALIK", short: "ara", days: 31 },
  { key: "ocak", label: "OCAK", short: "oca", days: 31 },
  { key: "şubat", label: "ŞUBAT", short: "şub", days: 28 },
  { key: "mart", label: "MART", short: "mar", days: 31 },
  { key: "nisan", label: "NİSAN", short: "nis", days: 30 },
  { key: "mayıs", label: "MAYIS", short: "may", days: 31 },
  { key: "haziran", label: "HAZİRAN", short: "haz", days: 30 }
];

const dayData = {
  temmuz: {
    1: {
      baslik: "MacGregor Arktik Seferinin Başlangıcı (1937)",
      metin: `1 Temmuz 1937’de MacGregor Arktik Seferi başladı.
Sefer, Kanada’nın Ellesmere Adası’ndaki Fort Conger bölgesine ulaşarak Kuzey Kutbu çevresinde meteoroloji, jeomanyetizma ve kutup ışıkları üzerine bilimsel gözlemler yapmak amacıyla düzenlendi. Araştırma gemisi Donald II ile yürütülen çalışmalar, zorlu kış koşulları da dâhil olmak üzere 1938 sonbaharına kadar devam etti. Bu sefer, Kuzey Kutbu’nda modern ve sistematik bilimsel ölçümlerin uygulanması açısından önemlidir. Özellikle hava durumu, manyetik alan ve aurora gözlemleri, Arktik bölgenin fiziksel koşullarının daha iyi anlaşılmasına katkı sağlamış ve sonraki kutup araştırmalarına bilimsel altyapı oluşturmuştur.`,
      kaynak: `https://kids.kiddle.co/MacGregor_Arctic_Expedition`
    },

    2: {
      baslik: "CONTRASTS Kutup Araştırma Seferi’nin Başlangıcı (2025)",
      metin: `Alfred Wegener Enstitüsü tarafından yürütülen CONTRASTS (PS149) projesi, 2025 yazında Arktik Okyanusu'ndaki deniz buzlarının erime süreçlerini ve bu süreçlerin ekosistem üzerindeki etkilerini incelemeyi hedefleyen kapsamlı bir keşif gezisidir. Araştırma kapsamında, mevsimlik buzdan çok yıllık yaşlı buzlara kadar üç farklı buz rejimindeki fiziksel, oşinografik ve biyokimyasal değişimler, Polarstern araştırma gemisi ve otonom istasyonlar aracılığıyla gözlemlenmiştir. Elde edilen verilerle Arktik bölgesindeki iklim değişikliğinin nedenleri ve sonuçlarının daha iyi anlaşılması, böylece gelecekteki çevresel etkilerin daha isabetli öngörülmesi amaçlanmaktadır.`,
      kaynak: `https://www.awi.de/en/science/climate-sciences/sea-ice-physics/projects/translate-to-english-contrasts.html`
    },

    3: {
      baslik: "ABD’nin Antarktika Antlaşması Çevre Koruma Protokolü’nü İmzalaması / Alfred Stephonson’ın Vefatı (1999)",
      metin: `ABD Başkanı George H. W. Bush, 1959 Antarktika Antlaşması’na ek çevresel koruma protokolü çerçevesinde Antarktika’da 50 yıl süreyle madenciliği yasaklayan uluslararası anlaşmayı (Madencilik Protokolü) imzalayacağını açıkladı. Bu kararla ABD, uzun süredir karşı çıktığı madencilik yasağı içeren protokole onay vermiştir.

3 Temmuz 1999 tarihinde 90 yaşında hayatını kaybeden Alfred Stephenson, hem Arktik hem de Antarktika'nın haritalandırılmasında kritik roller üstlenmiş seçkin bir kutup kaşifi ve araştırmacıdır. Genç yaşta Shackleton’dan ilham alarak başladığı kariyerinde, Grönland ve Graham Toprakları gibi bölgelere düzenlenen önemli keşif gezilerine liderlik ederek modern kutup araştırmalarına öncülük etmiştir. Hayatını coğrafyaya ve eğitime adayan Stephenson, uzun yıllar Imperial College bünyesinde dersler vermiş ve kutup bölgelerindeki üstün hizmetleri nedeniyle Polar Madalyası gibi saygın ödüllere layık görülmüştür.`,
      kaynak: `https://shorturl.at/Y42qq
https://shorturl.at/HRvvy`
    },

    4: {
      baslik: "Nordenskiöld Arktik Seferi Başlangıcı (1872)",
      metin: `1872–1873 Arctic seferi, Prof. Adolf Erik Nordenskiöld liderliğinde 4 Temmuz 1872’de Göteborg, İsveç’ten Svalbard’a hareketle başlamıştır. Bu seferin amacı, Kuzey Kutbu’na ulaşarak orayı keşfetmekti ancak yoğun deniz buzları nedeniyle bu hedef gerçekleştirilememiştir. Bunun yerine ekip, Svalbard’da zor bir kış geçirmiş ve ardından Kuzeydoğu Toprakları (Nordaustlandet) boyunca yeni keşifler yapmıştır. Bu süreçte coğrafya, meteoroloji ve diğer bilimsel alanlara dair önemli veriler toplanmış ve bölgede ilk kapsamlı keşiflerden biri olarak kayda geçmiştir.`,
      kaynak: `https://www.thejubileeexpedition.com/expedition?utm_source`
    },

    5: {
      baslik: "Fred Roots Doğum Günü (1923)",
      metin: `Fred Roots (doğum: 5 Temmuz 1923), Kanadalı bir jeolog ve kutup araştırmacısıdır. 1949–1952 yılları arasında Norveç-Britanya-İsveç Antarktika Seferi’nde baş jeolog olarak görev yapmış, uzun süreli kızaklı arazi çalışmalarıyla Antarktika jeolojisi ve iklim bilimine önemli katkılar sağlamıştır. Daha sonra Kanada’da kutup araştırma altyapısının gelişmesinde kilit rol oynamış ve Order of Canada gibi onursal ödüllerle ile onurlandırılmıştır.`,
      kaynak: `https://iasc.info/news/iasc-news/257-in-memoriam-fred-roots-polar-scientist-educator-and-one-of-iasc-s-founders`
    },

    6: {
      baslik: "Robert Peary ve Matthew Henson’ın Kuzey Kutbu Seferi İçin Yola Çıkışı.",
      metin: `6 Temmuz 1908 tarihinde Robert E. Peary liderliğindeki Kuzey Kutbu seferi, Matthew Henson’un da yer aldığı ekip ile birlikte Roosevelt gemisiyle New York’tan yola çıkmıştır. Bu sefer, Peary’nin Kuzey Kutbu’na ulaşmayı hedefleyen son ve en iddialı keşif girişimi olup, Henson’un kızaklı ulaşım, navigasyon ve Inuit teknikleri konusundaki uzmanlığı kritik rol oynamıştır. Sefer, Arktik keşif tarihinde lojistik planlama ve insan dayanıklılığı açısından önemli bir aşamayı temsil etmiştir.`,
      kaynak: `https://www.nationalgeographic.com/adventure/article/the-legacy-of-arctic-explorer-matthew-henson`
    },

    7: {
      baslik: "İkinci Ulusal Arktik Bilimsel Araştırma Seferi (TASE-II) Başlangıcı (2022)",
      metin: `7 Temmuz’da başlayan İkinci Ulusal Arktik Bilimsel Araştırma Seferi (TASE-II), TÜBİTAK koordinasyonunda Arktik Okyanusu’nda gerçekleştirilmiştir. Sefer kapsamında iklim değişikliği, deniz suyu kimyası, atmosferik koşullar ve deniz ekosistemleri gibi alanlarda çok disiplinli bilimsel çalışmalar yürütülmüştür. Toplanan veriler, Arktik bölgedeki çevresel değişimlerin anlaşılmasına ve Türkiye’nin kutup araştırmalarına bilimsel katkı sağlamayı amaçlamaktadır.`,
      kaynak: `https://tubitak.gov.tr/tr/haber/ikinci-ulusal-arktik-bilimsel-arastirma-seferi-tase-ii-basladi`
    },

    8: {
      baslik: "Prag Deklarasyonu (2019) / Discovery Seferinin Bitişi (1904)",
      metin: `Antarktika Antlaşması’nın 60. yıl dönümünde devletlerarası olarak kabul edilen bu deklarasyon, 8 Temmuz 2019’da ilan edilmiştir. Deklarasyonda, Antarktika’nın barış ve bilim bölgesi olarak korunması taahhüt edilmiş, mevcut yönetim sisteminin güçlendirilmesi vurgulanmıştır.

Sir Robert F. Scott komutasındaki İngiliz Discovery gemisi, Antarktika kıtasını keşfetmek üzere gitmiştir. Sefer başarıyla tamamlanmış ve Discovery, 8 Temmuz 1904’te limana döndüğünü müjdeleyen mektuplar yayınlamıştır. Bu tarihte geminin seferi sonlanmış, denizciler İngiltere’ye geri dönmüştür.`,
      kaynak: `https://shorturl.at/KjQRS
https://shorturl.at/mIUp5`
    },

    9: {
      baslik: "RV Polarstern Gemisi’nin İlk Buz İstasyonuna Ulaşması (2025)",
      metin: `9 Temmuz 2025’te, CONTRASTS Arktik Seferi kapsamında RV Polarstern araştırma gemisi ekipleri, ilk buz istasyonuna (floe 1) ulaşarak Arktik okyanusundaki buzu incelemeye başladı. Bu seferin amacı, deniz buzu erimesinin mekanizmalarını farklı buz rejimlerinde incelemekti ve bu istasyona varılması seferin bilimsel saha faaliyetlerinin önemli başlangıç noktalarından birini temsil ediyor.`,
      kaynak: `https://en.wikipedia.org/wiki/CONTRASTS_Expedition`
    },

    10: {
      baslik: "Arktika-2007 Rus Kutup Araştırma Seferi Başlangıcı",
      metin: `10 Temmuz 2007’de, Rusya tarafından yürütülen Arktika-2007 bilimsel kutup seferi, araştırma gemisi Akademik Fedorov’un St. Petersburg’dan Arktik Okyanusu’na doğru yola çıkmasıyla resmen başladı. Bu sefer, Uluslararası Kutup Yılı (2007–2008) kapsamında Arktik deniz tabanının jeolojik yapısını incelemeyi amaçlıyordu. Araştırmalar özellikle Lomonosov Sırtı gibi stratejik deniz altı oluşumlarına odaklandı. 10 Temmuz, Kuzey Kutbu’nda derin deniz araştırmalarına zemin hazırlayan bu büyük ölçekli bilimsel girişimin başlangıç tarihi olarak kayıtlara geçti.`,
      kaynak: `https://ansiklopedi.tubitak.gov.tr/kutup/ansiklopedi/2007-rus-arastirma-yuksek-enlem-seferi-2007`
    },

    11: {
      baslik: "Andrée’nin Arktik Balon Seferi Başlangıcı (1897)",
      metin: `11 Temmuz 1897’de, İsveçli mühendis ve kaşif Salomon August Andrée, Nils Strindberg ve Knut Frænkel, S.A. Andrée’nin Arktik Balon Seferi’ni Spitsbergen (Svalbard)’dan bir hidrojen balonuyla Kuzey Kutbu’na ulaşmak için başlattı.
Sefer sırasında balon, rüzgârın etkisiyle hızla kontrolünü kaybetti ve uçuş sırasında ballastların atılması gibi çabaları güçlükle sürdürdü. Balon kısa süre sonra kontrolsüz şekilde yükselmiş ve yolculuk, planlanan güzergahta ilerlemek yerine rüzgârın inisiyatifine bırakılmıştır. Bu cesur ama riskli girişim, Arktik keşif tarihinin en dramatik ve trajik balon denemelerinden biri olarak kayıtlara geçti ve uzun süre gizemini korudu.`,
      kaynak: `https://oceanwide-expeditions.com/blog/the-flight-of-the-ornen-andree-s-1897-arctic-balloon-expedition?srsltid=AfmBOoqmvpE4V5Ri2M-EH_Ld1yqd2CASVm4qUjejwchgSUQoAEcSrD1z`
    },

    12: {
      baslik: "Shackleton Kurtarma Girişimi İçin Emma Gemisi’nin Ayrılması (1916) / Stephen Borough’un Ölümü (1584)",
      metin: `12 Temmuz 1916’da, Sir Ernest Shackleton’ın Endurance Seferi sonrası mürettebatını kurtarmak için düzenlenen kurtarma çabalarından birinde, İngiliz derme-toplama gemisi Emma Punta Arenas, Şili’den kuzeye doğru yola çıktı. Bu gemi Shackleton ekibini Weddell Denizi ve Elephant Island çevresinde enkaz altındaki mürettebatla bağlantı kurma umuduyla denize açıldı, ancak yoğun deniz buzları nedeniyle ilerleyemedi. Bu tarih, Shackleton’ın Antarktika seferinden sonraki kurtarma operasyonlarının önemli parçalarından biri olarak tarihsel kayıtlara geçti.

12 Temmuz 1584’te, İngiliz denizci ve Arktik kaşifi Stephen Borough hayatını kaybetti. Borough, 16. yüzyılda Kuzey Kutbu çevresinde yürütülen erken Avrupa keşif seferlerinde önemli bir rol oynayan denizcilerden biriydi; özellikle Rusya’nın Beyaz Deniz’i ve Kuzeydoğu Geçidi güzergâhı üzerindeki deniz yollarının keşfi ve haritalanmasında katkı sağladı. Bu tarihle kaydedilmiş ölümü, Arktik keşif tarihindeki erken dönem kaşiflerin yaşam döngüsünü gösteren somut bir olaydır.`,
      kaynak: `https://www.aurora-expeditions.com/eu/blog/shackletons-endurance-expedition-timeline
https://en.wikipedia.org/wiki/Stephen_Borough`
    },

    13: {
      baslik: "Polarstern Araştırma Gemisi Arktik Seferi Başlangıcı (2011)",
      metin: `13 Temmuz 2011’de, Alman araştırma gemisi Polarstern, Kuzey Kutup bölgesindeki ARK-XXVI/2 numaralı Arktik bilimsel seferinin Longyearbyen (Svalbard) limanından hareketiyle başladı. Bu seferde 50’den fazla bilim insanı ve teknisyen deniz suyu özellikleri, deniz buzunun fiziksel yapısı, biyolojik örneklemeler ve deniz tabanı koşullarını incelemek üzere bir araya geldi. Gemide kullanılan ROV (uzaktan kumandalı araç) ve AUV (özerk su altı aracı) gibi ileri teknoloji sistemler, araştırmacıların deniz tabanı ve su sütununa dair yüksek çözünürlüklü veriler toplamasına olanak sağladı. 13 Temmuz bu seferin aktif bilimsel araştırma ayağının ilk günü olarak kayıtlara geçti ve Arktik iklim modelleri ile deniz çevresi biliminin gelişimine önemli katkılar sundu.`,
      kaynak: `https://epic.awi.de/id/eprint/30564/1/645_ARK%2026-2_Klages%20.pdf`
    },

    14: {
      baslik: "Kuzey Kutbu İçin Ek Fon Kararı (Gustave Lambert Planı) (1870)",
      metin: `14 Temmuz 1870’te, Fransız yasama organı Corps législatif, Kuzey Kutbu’na yönelik bir bilimsel araştırma seferi düzenlemek için 100.000 frank ek bütçe tahsis etmeye karar verdi. Bu karar, kutup keşif tarihinin erken dönemlerinde, bilimsel ve coğrafi veri toplama hedefiyle organize edilen Arktik girişimlerin devlet düzeyinde destek görmeye başladığını gösteren somut bir tarihsel olaydır.`,
      kaynak: `https://en.wikipedia.org/wiki/Gustave_Lambert`
    },

    15: {
      baslik: "Arktik Deniz Buz Günü",
      metin: `15 Temmuz, uluslararası çevre kuruluşları tarafından “Arktik Deniz Buzu Günü” olarak anılmaktadır. Bu tarih, Arktik Okyanusu’ndaki deniz buzunun son kırk yılda uydu gözlemleriyle belgelenen hızlı alan ve kalınlık kaybına dikkat çekmek amacıyla seçilmiştir. Deniz buzu, Güneş ışığını yansıtarak (albedo etkisi) küresel ısı dengesini düzenlediği için, bu buzun kaybı Kuzey Yarımküre iklim sisteminde geri besleme mekanizmalarını hızlandırmaktadır. Bu farkındalık günü, bilimsel verilerin kamuoyuna aktarılması ve iklim değişikliğinin kutup ekosistemleri üzerindeki etkilerine yönelik politikaların desteklenmesi açısından önemli bir araçtır.`,
      kaynak: `https://polarbearsinternational.org/act-now/awareness-events/arctic-sea-ice-day/`
    },

    16: {
      baslik: "ROALD AMUNDSEN DOĞUMU (1872)",
      metin: `16 Temmuz 1872’de, Norveçli kutup kaşifi Roald Amundsen doğmuştur. Amundsen, 1911 yılında Güney Kutbu’na ilk ulaşan ekip lideri olarak, kutup bölgelerinde yön bulma, ekstrem iklim koşullarında lojistik planlama ve buzul geçiş tekniklerinin bilimsel temellere oturtulmasına öncülük etmiştir. Ayrıca Kuzeybatı Geçidi’ni deniz yoluyla geçen ilk keşif ekibine liderlik ederek Arktik okyanus sistemlerinin ve deniz buzu dinamiklerinin anlaşılmasına katkı sağlamıştır.`,
      kaynak: `https://en.wikipedia.org/wiki/Roald_Amundsen`
    },

    17: {
      baslik: "Nansen’in Grönland Seferi (1888)",
      metin: `Yirmi yedi yaşındaki Nansen, Grönland’ın kayakla geçilmesini hedefleyen bir keşif planlamıştır. Dönemin bilimsel varsayımlarına göre adanın iç kesimlerinin yaşanabilir olabileceği düşünülmekteydi. Nansen, geri dönüş olasılığını ortadan kaldırmak amacıyla doğudan batıya geçiş stratejisini benimsemiştir. Sefer ekibi, 17 Temmuz 1888’de fok avcısı Jason gemisinden ayrılmış, sürüklenen buzlar arasında kürek çekerek ve yelken açarak ilerlemiş; 10 Ağustos’ta Umivik’e karaya çıkmış ve 15 Ağustos’ta iç bölgelere ilerlemek üzere harekete hazır hâle gelmiştir.`,
      kaynak: `https://frammuseum.no/polar-history/explorers/otto-neumann-knoph-sverdrup-1854-1930/`
    },

    18: {
      baslik: "MAUD SEFERİ’NİN BAŞLANGICI (1918)",
      metin: `18 Temmuz 1918’de, Norveçli kutup kaşifi Roald Amundsen liderliğindeki Maud gemisi, Vardø (Norveç) limanından Arktik Okyanusu’na doğru resmen yola çıkarak seferin fiilî başlangıcını yaptı. Bu sefer, Kuzeydoğu Geçidi boyunca deniz buzu hareketleri, okyanus akıntıları ve atmosfer koşullarını uzun süreli gözlemlerle incelemeyi hedefleyen ilk kapsamlı bilimsel girişimlerden biriydi. Maud seferi boyunca toplanan veriler, Arktik deniz sistemlerinin fiziksel davranışını anlamada ve kutup bölgelerinin iklimle ilişkisini açıklamada önemli katkılar sağladı.`,
      kaynak: `https://frammuseum.no/polar-history/expeditions/the-maud-expedition-1918-1925/`
    },

    19: {
      baslik: "Svalbard Konferansı (1910)",
      metin: `19 Temmuz 1910’da Christiania’da başlayan Svalbard Konferansı, kutupların tarihini keşif defterlerinden çıkarıp diplomasi masasına taşıyan önemli bir dönüm noktasıydı. Norveç, İsveç ve Rusya’nın katıldığı bu görüşmeler, Svalbard’ın hukuki statüsünü ve nasıl yönetileceğini tartışmaya açtı; yani mesele artık yalnızca buz, harita ve sefer değil, egemenlik ve uluslararası dengeydi. Bu konferans hemen kesin bir çözüm getirmedi, ama 1920’de imzalanacak Svalbard Antlaşması’na giden sürecin ilk ciddi adımlarından biri oldu.`,
      kaynak: `https://www.researchgate.net/publication/347583969_The_Svalbard_Treaty_and_Norwegian_Sovereignty`
    },

    20: {
      baslik: "Victoria Adası’nın Arktik’te Keşfi (1898)",
      metin: `20 Temmuz 1898’de, Norveçli kaşifler Johannes Nilsen ve Ludvig Bernard Sebulonsen, Arktik Okyanusu’nda yer alan Victoria Adası’nı keşfederek bölgenin haritalanmasına ilk bilimsel katkıyı sağlamıştır. Bu keşif, daha önce belirsiz olan yüksek enlem deniz alanlarının coğrafi olarak tanımlanmasına ve Arktik’in morfolojik yapısının anlaşılmasına olanak tanımıştır. Ada çevresinde yapılan ilk gözlemler, deniz buzu hareketleri ve kutup ikliminin yüzey şekilleri üzerindeki etkilerinin incelenmesine zemin hazırlamıştır.`,
      kaynak: `https://en.wikipedia.org/wiki/Bratvaag_Expedition`
    },

    21: {
      baslik: "Fram Gemisinin Vardø Limanı’ndan Ayrılması",
      metin: `21 Temmuz 1893’te, Fridtjof Nansen liderliğindeki Fram gemisi, Vardø limanından ayrılarak Arktik Okyanusu’na yönelmiş ve Kuzeydoğu Geçidi boyunca ilerleyecek keşif rotasına girmiştir. Bu seferin amacı, deniz buzu hareketlerini doğal akıntılarla birlikte izlemek ve Arktik Okyanusu’nun fiziksel dinamiklerine dair uzun süreli gözlemler yapmaktı. Fram üzerindeki bilim ekibi, sıcaklık, basınç, manyetik alan ve buz kalınlığına ilişkin düzenli ölçümler gerçekleştirmiştir.`,
      kaynak: `https://en.wikipedia.org/wiki/Fridtjof_Nansen`
    },

    22: {
      baslik: "İkinci Ulusal Arktik Bilimsel Araştırma Seferi (TASE-II) Bitişi (2022)",
      metin: `TÜBİTAK koordinasyonunda yürütülen İkinci Ulusal Arktik Bilimsel Araştırma Seferi (TASE-II) 22 günlük bilimsel çalışmanın ardından başarıyla tamamlanmış ve bilim heyeti Türkiye’ye dönmüştür. Sefer boyunca 14 farklı bilimsel projede deniz suyu özellikleri, plankton örneklemeleri, kirleticiler, mikroplastikler, meteorolojik ve atmosferik veriler gibi çevresel parametreler Arktik Okyanusu’nda ölçülmüştür. Elde edilen veriler, laboratuvar analizleriyle değerlendirilecek ve iklim değişikliği ile kutup bilimleri alanında bilimsel makaleler ve raporlar halinde paylaşılmıştır.`,
      kaynak: `https://tubitak.gov.tr/tr/haber/ikinci-ulusal-arktik-bilimsel-arastirma-seferi-tase-ii-sona-erdi`
    },

    23: {
      baslik: "Edward Adrian Wilson’ın Doğumu (1872)",
      metin: `23 Temmuz 1872’de, Antarktika keşiflerinin bilimsel altyapısını oluşturan önemli isimlerden biri olan Edward Adrian Wilson doğmuştur. Wilson, Discovery ve Terra Nova seferlerinde biyolog ve hekim olarak görev almış; Antarktika’daki canlı çeşitliliğini sistematik gözlem, çizim ve kayıtlarla belgeleyen ilk bilim insanları arasında yer almıştır. Onun saha notları ve görsel kayıtları, günümüzde kutup ekosistemlerinin uzun dönemli değişimini anlamada referans veri kaynağı olarak kullanılmaktadır`,
      kaynak: `https://en.wikipedia.org/wiki/Edward_Wilson_%28explorer%29`
    },

    24: {
      baslik: "Graf Zeppelin Hava Gemisinin Arktik Bilim Uçuşu Başlangıcı",
      metin: `24 Temmuz 1931’de, LZ-127 Graf Zeppelin hava gemisi, Arktik Okyanusu üzerinde bilimsel veri toplamak amacıyla kutup bölgesine yönelik tarihî bir keşif uçuşuna başlamıştır. Bu görev kapsamında atmosfer koşulları, manyetik alan değişimleri ve buz örtüsünün dağılımı üzerine ölçümler yapılmış; aynı zamanda yüksek irtifadan fotoğrafik gözlemler gerçekleştirilmiştir. Elde edilen veriler, Arktik bölgenin fiziksel özelliklerinin daha iyi anlaşılmasına katkı sağlayarak kutup araştırmalarında havacılık temelli gözlemlerin önünü açmıştır.`,
      kaynak: `https://www.airships.net/lz127-graf-zeppelin/polar-flight/`
    },

    25: {
      baslik: "Sir William Edward Parry’nin “Farthest North” kaydı (1827)",
      metin: `25 Temmuz 1827’de, İngiliz kâşif Sir William Edward Parry, Spitsbergen üzerinden kuzeye ilerleyerek 82°45′ kuzey enlemine ulaşmış ve o döneme kadar erişilmiş en kuzey nokta rekorunu kırmıştır.`,
      kaynak: `https://www.spri.cam.ac.uk/museum/catalogue/article/y58.7/`
    },

    26: {
      baslik: "Antarktika’nın ilk motorsuz tam geçiş seferinin başlangıcı (1989)",
      metin: `26 Temmuz 1989’da, Jean-Louis Étienne ve Will Steger liderliğindeki Trans-Antarctica Expedition, Antarktika kıtasını motor gücü kullanmadan geçmeyi hedefleyen tarihî seferini başlatmıştır. Ekip, köpek kızaklarıyla binlerce kilometrelik bir rota boyunca ilerleyerek Antarktika’nın aşırı iklim ve buz koşullarına dair saha gözlemleri ve çevresel veriler toplamıştır. Bu sefer, insan gücüne dayalı kutup keşiflerinin çevresel etkileri en aza indirerek yürütülebileceğini gösteren öncü bir örnek olarak kutup araştırmaları literatüründe önemli bir yer edinmiştir.`,
      kaynak: `https://www.guinnessworldrecords.com/world-records/663844-first-non-motorised-crossing-of-antarctica`
    },

    27: {
      baslik: "Maud seferi Nome (Alaska) limanına ulaştı (1920)",
      metin: `27 Temmuz 1920’de, Fridtjof Amundsen komutasındaki Maud araştırma gemisi, Kuzeydoğu Geçidi seferi kapsamında Alaska’daki Nome limanına ulaşmıştır. Bu varış, seferin Arktik Okyanusu boyunca sürdürdüğü uzun gözlem ve rota belirleme sürecinin belgelenmiş bir aşamasını temsil etmekte ve bölgedeki deniz buzları ile akıntı koşullarına dair verilerin toplanmasına imkân sağlamıştır. Maud seferi, Kuzey Kutbu çevresindeki deniz yollarının ve çevresel dinamiklerin anlaşılmasına yönelik erken dönem bilimsel çalışmaların temel taşlarından biri olarak kabul edilmektedir.`,
      kaynak: `https://frammuseum.no/polar-history/vessels/the-polar-ship-maud/`
    },

    28: {
      baslik: "E. A. Wilson’ın (Discovery seferi) Suluboya Eseri “South Trinidad”",
      metin: `28 Temmuz 1910’da, Britanyalı kutup bilim insanı ve sanatçısı Edward Adrian Wilson, Antarktika seferleri kapsamında gözlemlediği coğrafi ve çevresel koşulları belgelemek amacıyla “South Trinidad” adlı suluboya çalışmasını üretmiştir. Bu eser, erken dönem kutup keşiflerinde doğrudan saha gözlemlerinin yalnızca sayısal değil, görsel kayıtlarla da desteklendiğini gösteren önemli bir bilimsel doküman niteliği taşımaktadır. Wilson’ın çalışmaları, Antarktika çevresel tarihinin ve keşif sürecindeki doğal koşulların günümüze aktarılmasında temel referans kaynaklardan biri olarak kabul edilmektedir.`,
      kaynak: `https://www.spri.cam.ac.uk/museum/catalogue/article/n1321/`
    },

    29: {
      baslik: "USS Jeannette ekibinin Bennett Adası’na ulaşması (1881)",
      metin: `29 Temmuz 1881’de, George W. De Long komutasındaki Jeannette keşif seferinden ayrılan bir ekip, Arktik Okyanusu’ndaki Bennett Adası’na ulaşarak karaya çıkmıştır. Bu olay, seferin Kuzey Kutbu çevresindeki buz koşulları, ada jeomorfolojisi ve hayatta kalma stratejileri hakkında doğrudan saha gözlemleri yapmasına olanak sağlamıştır. Jeannette seferine ait bu kayıtlar, Arktik keşiflerinin lojistik sınırlarını ve çevresel zorluklarını anlamada erken dönem bilimsel referanslar arasında yer almaktadır.`,
      kaynak: `https://en.wikipedia.org/wiki/Jeannette_expedition`
    },

    30: {
      baslik: "Shackleton’ın Nimrod seferinin İngiltere’den ayrılışı (1907)",
      metin: `30 Temmuz 1907’de Nimrod, İngiltere’den ayrılarak Shackleton’ın Antarktika seferini fiilen başlattı. Bu sadece bir yolculuğun başlangıcı değil, Cape Royds üssüne, Erebus’a ilk çıkışa ve Güney Kutbu yönünde dönemin en ileri ilerleyişlerinden birine açılan ilk adımdı. Küçük ve yıpranmış bir gemi olan Nimrod, buna rağmen kutup tarihinin en iddialı girişimlerinden birini taşıdı.`,
      kaynak: `https://nzaht.org/conserve/explorer-bases/shackletons-hut/history-of-shackletons-expedition/`
    },

    31: {
      baslik: "TASE- V Tamamlandı (2025) / Valdivia (Carl Chun) Derin Deniz Seferi’nin Hamburg’dan ayrılışı",
      metin: `31 Temmuz 2025’te, Türkiye’nin 5. Ulusal Arktik Bilimsel Araştırma Seferi (TASE-V) kapsamında yürütülen saha çalışmaları başarıyla tamamlanmıştır. Sefer boyunca deniz suyu kimyası, mikroplastik dağılımı, atmosferik kirleticiler ve deniz buzu dinamiklerine yönelik çok disiplinli ölçümler gerçekleştirilerek Arktik ekosisteminin güncel durumu hakkında kapsamlı veri setleri elde edilmiştir. Bu çalışmalar, Türkiye’nin kutup araştırmalarındaki bilimsel görünürlüğünü artırarak iklim değişikliğinin Arktik üzerindeki etkilerinin küresel ölçekte anlaşılmasına katkı sağlamaktadır.

31 Temmuz 1898’de, zoolog ve deniz bilimci Carl Chun liderliğindeki Alman araştırma gemisi Valdivia, derin deniz ekosistemlerini incelemek amacıyla Hamburg Limanı’ndan yola çıkmıştır. Sefer süresince okyanusun derin katmanlarından biyolojik örnekler toplanmış, su sütunu yapısı ve sıcaklık-tuzluluk profilleri ölçülerek denizlerin fiziksel ve biyolojik dinamikleri sistematik biçimde kaydedilmiştir. Valdivia seferi, derin deniz araştırmalarını modern bilimsel yöntemlerle yürüten ilk büyük ölçekli çalışmalardan biri olarak kutup ve okyanus bilimleri literatüründe önemli bir yer edinmiştir.`,
      kaynak: `https://tubitak.gov.tr/tr/haber/besinci-ulusal-arktik-bilimsel-arastirma-seferi-tase-v-sona-erdi
https://polarjournal.net/carl-chun-the-man-with-a-deep-insight/`
    }
  },

  ağustos: {},
  eylül: {},
  ekim: {},
  kasım: {},
  aralık: {},
  ocak: {},
  şubat: {},
  mart: {},
  nisan: {},
  mayıs: {},
  haziran: {}
};

let currentMonthIndex = 0;

const daysContainer = document.getElementById("days");
const activeMonthText = document.getElementById("activeMonth");
const detail = document.getElementById("detail");
const heroImage = document.getElementById("heroImage");

function padDay(day) {
  return String(day).padStart(2, "0");
}

function formatMonthName(label) {
  return label.charAt(0) + label.slice(1).toLowerCase();
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function kaynaklariLinkeCevir(kaynakText) {
  if (!kaynakText || !kaynakText.trim()) {
    return "";
  }

  const links = kaynakText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map(
      (url) =>
        `<div><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(url)}</a></div>`
    )
    .join("");

  return `
    <div class="sources-block" style="margin-top:16px;">
      <h3 style="margin-bottom:8px;">Kaynakça</h3>
      ${links}
    </div>
  `;
}

function getMonthData() {
  return months[currentMonthIndex];
}

function getDayEntry(monthKey, dayNumber) {
  const monthEntries = dayData[monthKey] || {};
  return monthEntries[dayNumber] || null;
}

function createDayBox(dayNumber, monthInfo) {
  const entry = getDayEntry(monthInfo.key, dayNumber);
  const card = document.createElement("div");
  card.className = "day-item";

  const dayCircle = document.createElement("div");
  dayCircle.className = "day-circle";
  dayCircle.innerHTML = `<strong>${padDay(dayNumber)}</strong><span>${monthInfo.short}</span>`;

  const dayContent = document.createElement("div");
  dayContent.className = "day-content";

  const titleText = entry && entry.baslik && entry.baslik.trim() !== ""
    ? `${formatMonthName(monthInfo.label)} – ${entry.baslik}`
    : `${formatMonthName(monthInfo.label)} – Henüz girilmedi`;

  dayContent.textContent = titleText;

  card.appendChild(dayCircle);
  card.appendChild(dayContent);

  card.onclick = function () {
    showDayDetail(dayNumber, monthInfo);
  };

  return card;
}

function showDayDetail(dayNumber, monthInfo) {
  const entry = getDayEntry(monthInfo.key, dayNumber);

  if (entry && entry.baslik && entry.baslik.trim() !== "") {
    detail.innerHTML = `
      <h2>${escapeHtml(dayNumber + " " + formatMonthName(monthInfo.label))}</h2>
      <h3 style="margin-top: 10px;">${escapeHtml(entry.baslik)}</h3>
      <p style="white-space: pre-line;">${escapeHtml(entry.metin || "")}</p>
      ${kaynaklariLinkeCevir(entry.kaynak || "")}
    `;
  } else {
    detail.innerHTML = `
      <h2>${escapeHtml(dayNumber + " " + formatMonthName(monthInfo.label))}</h2>
      <p>Bu gün için içerik henüz girilmedi.</p>
    `;
  }

  if (heroImage) {
    heroImage.onerror = null;
    heroImage.src = `images/${monthInfo.key}/${dayNumber}.jpg`;
    heroImage.onerror = function () {
      heroImage.src = "temmuz26.jpg";
    };
  }
}

function renderDays() {
  const monthInfo = getMonthData();
  activeMonthText.textContent = monthInfo.label;
  daysContainer.innerHTML = "";

  for (let i = 1; i <= monthInfo.days; i++) {
    daysContainer.appendChild(createDayBox(i, monthInfo));
  }

  detail.innerHTML = `
    <h2>Bir gün seçiniz</h2>
    <p>Sağdaki listeden bir gün seçerek detayları görüntüleyebilirsiniz.</p>
  `;

  if (heroImage) {
    heroImage.onerror = null;
    heroImage.src = "temmuz26.jpg";
  }
}

function prevMonth() {
  currentMonthIndex = (currentMonthIndex - 1 + months.length) % months.length;
  renderDays();
}

function nextMonth() {
  currentMonthIndex = (currentMonthIndex + 1) % months.length;
  renderDays();
}

window.prevMonth = prevMonth;
window.nextMonth = nextMonth;

renderDays();
