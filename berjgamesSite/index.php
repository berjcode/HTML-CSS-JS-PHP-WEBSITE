<!DOCTYPE html>
<html lang="tr">
<!-- Abdullah Balıkçı   -->
<head>
    <meta charset="UTF-8">
    <title> berjgames </title>
    <link rel="stylesheet" type="text/css" href="style.css" />
</head>

<body>
    
    <section>
        <div class="circle"></div>
        <header>
            <a href="#"><img src="Images/logo.png" class="logo"></a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">New</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="Login.php">Login</a></li>
            </ul>
        </header>
        <div class="content">
            <div class="textBox">
                <h2> Mobil Oyun Geliştirme <br> 2D ve 3D <br> <span> berjgames</span></h2>
                <p> Oyun severler için eğlenceli ve güzel oyunlar üretmeye çalışan bir  oyun sever  kuruluşu...</p>
                <a href="#" >Daha Fazla</a>
            </div>
                <div class ="imgBox">
                    <img src="Images/img1.png"  class="berjgames" height="300" width="300" >
                    
    
         
                </div>
           

       </div>
       
       <ul class ="thumb">
        <li><img src="Images/thumb1.png" width="50" height="50" onclick="imgSlider('Images/img1.png');changeCircleColor('#017143')"></li>
        <li><img src="Images/thumb2.png" width="50" height="50"onclick="imgSlider('Images/img2.png');changeCircleColor('#eb7495')"></li>
        <li><img src="Images/thumb3.png" width="50" height="50"onclick="imgSlider('Images/img3.png');changeCircleColor('#d752b1')"></li>
       
    
       </ul>

       <ul class="sci">
        <li> <a href="#"><img src="Images/facebok.png"  width="60" height="60"> </a></li>
        <li> <a href="#"><img src="Images/instagram.png" width="60" height="60"> </a></li>
 
       </ul>
  
    </section>

    <script type="text/javascript">
        function imgSlider(anything)
        {
            document.querySelector(".berjgames").src=anything;
        }

        function changeCircleColor(color)
        {
            const circle = document.querySelector('.circle');
            circle.style.background =color;
        }
    </script>
   

   

</body>

</html>