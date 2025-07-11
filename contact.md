---
layout: default
title: Contact
permalink: /contact/
---
<div class="container-fluid">

  <!-- Thông tin liên lạc -->
  <div class="row mb-4">
    <div class="col-12">
      <div style="text-align: left;">
        <p>
          Dr. Thanh-Noi Phan<br>
          Department of Geography<br>
          Ludwig-Maximilians-Universität München (LMU)<br>
          Luisenstraße 37<br>
          80333 München<br>
          Germany
        </p>
        <span class="glyphicon glyphicon-phone-alt"></span> +49 (0)89 2180-6748 <br>
        <i class="glyphicon glyphicon-envelope"></i> <a href="mailto:Phan.Noi@lmu.de">Phan.Noi@lmu.de</a>
      </div>

<div style="margin-top: 1rem;">
  <a href="https://www.linkedin.com/in/thanhnoiphan/">
  <img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn Badge" />
  </a>
  <a href="https://www.github.com/thanhnoiphan/">
    <img src="https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub Badge" />
  </a>
  <a href="https://www.researchgate.net/profile/Thanh-Noi-Phan">
    <img src="https://img.shields.io/badge/-ResearchGate-00CCBB?style=flat&logo=researchgate&logoColor=white" alt="ResearchGate Badge" />
  </a>
  <a href="https://scholar.google.com/citations?user=dGQgwH0AAAAJ&hl=en&oi=ao">
    <img src="https://img.shields.io/badge/-Google_Scholar-4285F4?style=flat&logo=googlescholar&logoColor=white" alt="Google Scholar Badge" />
  </a>
  <a href="https://www.scopus.com/authid/detail.uri?authorId=58706107200">
    <img src="https://img.shields.io/badge/-Scopus-FF6F00?style=flat&logo=elsevier&logoColor=white" alt="Scopus Badge" />
  </a>
  <a href="https://www.webofscience.com/wos/author/record/AAD-9789-2019">
    <img src="https://img.shields.io/badge/-Web_of_Science-7030A0?style=flat&logo=clarivate&logoColor=white" alt="Web of Science Badge" />
  </a>
</div>


  <!-- Google Map -->
  <div class="row mb-4">
    <div class="col-12">
      <h4>Directions to the Department of Geography, LMU:</h4>
      <div id="map" style="width: 100%; height: 400px;"></div>
    </div>
  </div>

  <!-- Ảnh tòa nhà 
  <div class="row">
    <div class="col-12">
      <figure style="margin: 0 auto; max-width: 1200px;">
        <img src="{{ site.url }}{{ site.baseurl }}/assets/images/lmu_building_bw1120.jpg" alt="Department of Geography" style="width: 100%; height: auto;" />
        <figcaption style="text-align: center; margin-top: 0.5rem;">
          Department of Geography <span class="copyright">&copy;</span> LMU
        </figcaption>
      </figure>
    </div>
  </div>
-->
</div>

<script>
function myMap() {
  var myCenter = new google.maps.LatLng(48.138967, 11.567185); // Kinh độ - vĩ độ Luisenstraße 37, 80333 München
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 12};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position: myCenter});
  marker.setMap(map);

  var infowindow = new google.maps.InfoWindow({
    content: "<strong>Department of Geography, LMU Munich</strong><br>Luisenstraße 37<br>80333 München"
  });

  infowindow.open(map, marker);
}
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA7i6vSafRzNMdIaq-SslU9oycP9HMR9TM&callback=myMap" async defer></script>
