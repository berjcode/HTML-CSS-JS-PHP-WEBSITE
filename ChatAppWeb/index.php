<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF8">
    <meta name="viewport" content="width=device-width, initial-scale =1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> Chat App</title>

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />


</head>

<body>
    <div class="wrapper">
        <section class="form signup">
                <header>Abdullah Balıkçı Chat App</header>
                <form action=""  enctype="multipart/from-data">

                    <div class="error-txt"> Bu bir Hata  mesajidir!</div>
                        <div class="name-details">
                            <div class="field input">
                                <label>Ad</label>
                                <input type="text" name="fname" placeholder="First Name" required>

                            </div>
                            <div class="field input">
                                <label>Soyad</label>
                                <input type="text"  name="lname" placeholder="Last Name" required>

                            </div>
                            <div class="field input">
                                <label>Email </label>
                                <input type="text" name="email" placeholder="Email" required>

                            </div>

                            <div class="field input">
                                <label>Şifre</label>
                                <input type="password" name="password" placeholder="Password" required>
                                <i class="fas fa-eye"></i>

                            </div>
                            <div class="field image">
                                <label>Resim Seç</label>
                                <input type="file"  name="image"  required >

                            </div>

                            <div class="field button">
                                
                                <input type="submit" value="Kaydol">

                            </div>
                         </div>

                </form>
                <div class="link"> Kaydoldun mu? <a href="#"> Şimdi giriş yap </a></div>
        </section>
    
    


    </div>


    <script src="javascript/pass-show-hide.js"></script>
    <script src="javascript/signup.js"></script>

</body>


</html>