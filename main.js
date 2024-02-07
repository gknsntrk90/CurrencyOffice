//*Element ve evantları topladığımız yer olacak

//*Elementleri seçiyoruz ve
//*inputu yakalıyoruz ilk olarak. constan sonra koyduğumuz isim bize bağlı const yaratırken!
const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOpiton");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");


//*Şimdi nesne türeteceğiz! currency js için;
const currency = new Currency();




//*INPUT'A DEĞER GİRDİĞİMİZDE ÇALIŞMASI İÇİN İŞLEM YAPACAĞIZ
//*TÜM EVENTLARIN ÇALIŞMASI İÇİN BİR METOT YAZACAĞIZ runEventListeners();
runEventListeners();

//*FUNCTİON İLE DE BU METODU ÇAĞIRACAĞIZ DAHA OKUNABİLİR OLMASI İÇİN!
function runEventListeners(){
    //*amountInput(Miktar inputunu) tetikleyeceğiz addEventLister ile ve exchange metoduma gitmesini sağlıyoruz
    amountInput.addEventListener("input",exchange);
}

 //*EXHANGE ADINDA Kİ DEĞERİMİZİ ÇALIŞTIRACAĞIZ
function exchange(){
    // alert("calisti.") //*test ediyoruz çalışıp çalışmadığını!
    // console.log(typeof amountInput.value); //*hangi tipte olduğuna bakıyoruz string mi diye!
    //*STRİNG OLDUĞU İÇİN MATEMATİK İŞLEMLERİ YAPAMAYIZ BU YÜZDEN NUMBER'A ÇEVİRECEĞİZ
    const amount = Number(amountInput.value.trim()); //*amount(içindeki değeri aldık!)
    //*para birimi inputu içinde selectedindex(EU,USD gibi) o an hangisi seçiliyse textcontentini yani,
    //*içerisindeki değeri bana vermiş demiş oluyoruz o an hangisi seçiliyse
    //*ve array olduğu için [] parantez içinde yazıyoruz
    const firstOptionValue = firstOption.options[firstOption.selectedIndex].textContent;

    //*Bu da diğer para birimi seçimi için.
     //*para birimi inputu içinde o an hangisi seçiliyse textcontentini yani,
    //*içerisindeki değeri bana vermiş demiş oluyoruz o an hangisi seçiliyse
    //*ve array olduğu için [] parantez içinde yazıyoruz
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;
   

    //! ŞİMDİ SIRA CURRENCY.JS BÖLÜMÜNDE


    //*Currency.js de işimiz bttiği için buraya currency tanıtacağız ve içine amount yazacağız
    //*firstoptionvalue ve second olanı veriyoruz
    currency.exhange(amount,firstOptionValue,secondOptionValue)
    //*.then ile yakalacağız promise dönüyoruz
    .then((result)=> {
        //*sonuçu yazacağız sonuç yukarıda result input tu ve noktadan sonra yanına value veriyoruz
        resultInput.value = result.toFixed(3) //* tofixed noktadan sonra ki basamak sayısını göreceğiz
    })
}