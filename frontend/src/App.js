
import './App.css';
import { useState } from 'react';

function App() {

  const [result,setResult] = useState("Get People From Spring!");

  function click(){
    fetch('/api/people')
    .then(response=>response.json())
    .then(json=>setResult("Received From Spring: " + JSON.stringify(json)))
  }

  return (
    <div>
      <p>*React ile Springi bir arada çalıştırmak için react/package.json dosyasına "proxy": "http://localhost:8080" kısmını ekleyerek geliştirme aşamasında fetch işlemi yaparken cors hatası almayı engelliyoruz.</p>
      <p>*Vscode'da hem springi hem de reactı bir arada görmek için ayrı ayrı açıyoruz workspace'de. böylelikle hem javascript hem de java kod tamamlama özelliğini kullanabiliyoruz.</p>
      <p>*Tomcate Deploy ettiğimizde direkt adres satırı ile projeye ulaşmak için ROOT.war yapmamız gerekiyor. pom.xml &lt;build&gt;&lt; /build&gt; taginin altına &lt;finalName&gt;ROOT&lt;/finalName&gt;  ekleyerek ROOT.war elde edeceğiz derleme sonrasında.</p>
      <p>*SADECE REACTI BUILD ETTİĞİMİZDE SPRİNGİN DE BUILD EDİLMESİ İÇİN "postbuild":"robocopy build ../backend/src/main/resources/static /E /MOV & cd.. & cd backend & mvn package" satırını ekliyoruz package.jsona. Böylece reactı build edince /build altındaki tüm dosyaları springe aktarıyor. Daha sonra spring klasörüne geçip springi build ediyor. Yani sadece reactı build ederek springi de build edip ROOT.war oluşturabiliyoruz!!! </p>
      <p>*ROOT.war dosyasını tomcat/webapps altına atınca birkaç saniye içinde ROOT klasörü yoksa oluşturuyor, varsa içine atıyor dosyaları. Projeyi tomcate deploy edince default olarak index.html çalışıyor yani react sayfası yükleniyor. Aşağıdaki butona tıklayınca /api/getir adresinden fetch ile veri çekiyoruz. </p>
      <p>*Chrome önbelleğe aldığı sayfaları kullandığı için bazen fetch işlemi sorun çıkarabilir. Ya gizli sayfa ile aç yada postman kullan.</p>
      <p>*React verilerimiz ROOT.war altında /WEB-INF/classes/static altında görülebilir..</p>
      <p>*Geliştirme sırasında reactı çalıştırmadan önce spring otomatik çalışsın istiyorsak <span style={{color:"orangered"}}> "npm i concurrently --save"</span> ile paketi yükledikten sonra <span style={{color:'orangered'}}>"start": "concurrently \"cd.. &cd backend & mvn spring-boot:run\" \"react-scripts start\""</span> şeklinde start tagini güncelliyoruz. </p>
      <p>*Bir kez npm run start ile reactı başlatınca spring ile beraber başlıyor ve güzel tarafı şu: react kısmında güncelleme yapınca react serveri, spring tarafında güncelleme yapınca spring serveri yeniden başlıyor otomatik olarak!!!</p>
      <button onClick={click}>Click me!</button>
      <p style={{color:"orangered"}}>{result}</p>
    </div>
  );
}

export default App;
