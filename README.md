# Project Responsive Web Design using Bootstrap
## Date:

## AIM:
To create a simplified clone of Dribbble (https://dribbble.com/) landing page.


## DESIGN STEPS:

### Step 1:
Clone the repository from GitHub.

### Step 2:
Create Django Admin project.

### Step 3:
Create a New App under the Django Admin project.

### Step 4:
Insert the necessary CSS and JavaScript files as external in order to use Bootstrap.

### Step 5:
Create a HTML file and include the needed Bootstrap components.

### Step 6:
Publish the website in the LocalHost.

## PROGRAM :

Index.html
~~~
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>ClipCraft Studio</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand fw-bold" href="index.html">ClipCraft Studio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="service.html">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="team.html">Team</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero -->
  <section class="hero text-center text-white d-flex align-items-center">
    <div class="container">
      <h1 class="display-4 fw-bold">Crafting Visual Stories</h1>
      <p class="lead">Professional video editing that brings your vision to life.</p>
      <a href="contact.html" class="btn btn-primary btn-lg mt-3">Get in Touch</a>
    </div>
  </section>

  <!-- Portfolio -->
  <section class="portfolio py-5">
    <div class="container">
      <h2 class="text-center mb-4">Featured Projects</h2>
      <div class="row g-4">
        <div class="col-md-4"><img src="branding.png" class="img-fluid rounded" alt="Social Media branding"></div>
        <div class="col-md-4"><img src="vlog.jpg" class="img-fluid rounded" alt="Project 2"></div>
        <div class="col-md-4"><img src="street.jpg" class="img-fluid rounded" alt="Project 3"></div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer text-center">
    <div class="container">
      <p>&copy; 2025 ClipCraft Studio | Designed by <strong>Rihan Ahamed.S</strong></p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
~~~
Service.html
~~~
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Services | ClipCraft Studio</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand fw-bold" href="index.html">ClipCraft Studio</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link active" href="service.html">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="team.html">Team</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Our Services</h2>
      <div class="row">
        <div class="col-md-4"><h5>Video Editing</h5><p>Cutting-edge editing for commercials, YouTube content, and films.</p></div>
        <div class="col-md-4"><h5>Motion Graphics</h5><p>Dynamic animations to elevate your brand’s storytelling.</p></div>
        <div class="col-md-4"><h5>Color Grading</h5><p>Professional color correction and mood setting for cinematic quality.</p></div>
      </div>
    </div>
  </section>

  <footer class="footer text-center">
    <div class="container">
      <p>&copy; 2025 ClipCraft Studio | Designed by <strong>Rihan Ahamed.S</strong></p>
    </div>
  </footer>
</body>
</html>
~~~
Team.html
~~~
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Team | ClipCraft Studio</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand fw-bold" href="index.html">ClipCraft Studio</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="service.html">Services</a></li>
          <li class="nav-item"><a class="nav-link active" href="team.html">Team</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Meet Our Team</h2>
      <div class="row text-center">
        <div class="col-md-4">
          <img src="ceo.jpg" alt="Member 1" class="rounded-circle team-member-img" />
          <h5>Rihan Ahamed.S</h5>
          <p>Founder & Lead Editor</p>
        </div>
        <div class="col-md-4">
          <img src="motiongraphics.jpg" alt="Member 2" class="rounded-circle team-member-img" />
          <h5>Naveen</h5>
          <p>Motion Designer</p>
        </div>
        <div class="col-md-4">
          <img src="videoedit.jpg" alt="Member 3" class="rounded-circle team-member-img" />
          <h5>Simon</h5>
          <p>Video Editor</p>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer text-center">
    <div class="container">
      <p>&copy; 2025 ClipCraft Studio | Designed by <strong>Rihan Ahamed.S</strong></p>
    </div>
  </footer>
</body>
</html>
~~~
Contact.html
~~~
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Contact | ClipCraft Studio</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand fw-bold" href="index.html">ClipCraft Studio</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="service.html">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="team.html">Team</a></li>
          <li class="nav-item"><a class="nav-link active" href="contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="py-5">
    <div class="container">
      <h2 class="text-center mb-4">Contact Us</h2>
      <form class="mx-auto" style="max-width: 600px;">
        <div class="mb-3"><label for="name" class="form-label">Name</label><input type="text" class="form-control" id="name" required></div>
        <div class="mb-3"><label for="email" class="form-label">Email</label><input type="email" class="form-control" id="email" required></div>
        <div class="mb-3"><label for="message" class="form-label">Message</label><textarea class="form-control" id="message" rows="4" required></textarea></div>
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>

  <footer class="footer text-center">
    <div class="container">
      <p>&copy; 2025 ClipCraft Studio | Designed by <strong>Rihan Ahamed.S</strong></p>
    </div>
  </footer>
</body>
</html>
~~~

Style.css
~~~
body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
}

.hero {
  background: 
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('clipcraft0.jpg') no-repeat center center/cover;
  padding: 100px 0;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  flex-direction: column;
}

.team-member-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 10px;
}

.footer {
  background-color: #111;
  color: #bbb;
  padding: 20px 0;
}

section {
  padding-top: 60px;
  padding-bottom: 60px;
}

~~~

## OUTPUT:
![alt text](<Screenshot 2025-05-22 091106.png>)
![alt text](<Screenshot 2025-05-22 091117.png>)
![alt text](<Screenshot 2025-05-22 091132.png>)
![alt text](<Screenshot 2025-05-22 091147.png>)
![alt text](<Screenshot 2025-05-22 091449.png>)

## RESULT:
The Project for responsive web design using Bootstrap is completed successfully.
