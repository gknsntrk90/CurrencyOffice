//*parasal ilemleri buradan yapacağız.

//*currency adında bir class açıyoruz
//*içine bir constructor yazıyoruz buna url vereceğiz this ile istek atacağımız için
//*çünkü bir sınıftan nesne türettiğimizde ilk olarak constructor çalışır
class Currency{
    constructor(){
        //*api linkimizin sonuna ?key="" yapıyoruz apikey linkini içine yapıştırıyoruz
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=DwubsVWBQzrAI1rY529XjbZ1rny84BA3XaIujP0&base_currency=";
    }

    //!Main JS geçiyoruz şimdi

    //*şimdi exchange adında bir metot yazacağız
    //*bizden bir (amount, firstCurrency, SecondCurrency) adında yapıyoruz
    //* tabi ki async kullanacağız fetch içinde await kullanacağız
   async exhange(amount, firstCurrency, SecondCurrency){
        //*Şimdi fetch ile isteğimizi atacağız siteye para değişimi için
        //*fakat öncelikle const response = yapıyoruz await ile!
        //*${} yapıypruz içine this kullanıp yukarıdaki url yazıyoruz
        const response= await  fetch(`${this.url}${firstCurrency}`) //*ikinci dolar içine firstcurrency parametresini giriyoruz
        //*para birimi olan ilk inputun işlemi için const result await yapıp response.json yapacağız
        const result = await response.json();
        //*sonuç için ise const açacağız herhangi bir isimle
        //*içine result.data[secondcurrecny] gireceğiz
        const exchangedResult = amount * result.data[SecondCurrency];

        //*şimdi ise return edeceğiz
        return exchangedResult;
     
    }