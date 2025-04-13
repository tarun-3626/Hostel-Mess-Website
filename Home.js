<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home Page</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
  <link rel="stylesheet" href="home.css" />
</head>
<body>
  <header>
    <nav class="navbar">
      <div class="title">
        <a href="#">HOSTEL MESS</a>
      </div>
      <ul class="link">
        <li><a href="login.html"><i class="fa fa-home"></i> Home</a></li>
        <li><a href="login.html"><i class="fa fa-sticky-note"></i> Order</a></li>
        <li><a href="login.html"><i class="fa fa-download"></i> Receive</a></li>
      </ul>
      <a href="login.html" class="action_btn">Login</a>
      <div class="toggle_btn">
        <i class="fa fa-bars"></i>
      </div>
    </nav>
    <div class="dropdown_menu">
      <li><a href="login.html">Home</a></li>
      <li><a href="login.html">Order</a></li>
      <li><a href="login.html">Receive</a></li>
      <li><a href="login.html" class="action_btn">Login</a></li>
    </div>
  </header>

  <main>
    <section id="content">
      <h1>Welcome!!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, similique! Nihil molestias facere quis, error voluptatum aliquid vel libero hic totam possimus quidem consequuntur ex a pariatur iure non aperiam?</p>
    </section>
  </main>

  <script>
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.onclick = function () {
      dropDownMenu.classList.toggle('open');
      const isOpen = dropDownMenu.classList.contains('open');

      toggleBtnIcon.className = isOpen
        ? 'fa fa-times-circle'
        : 'fa fa-bars';
    };
  </script>
</body>
</html>
