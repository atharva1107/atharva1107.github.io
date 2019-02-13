
/*
      Example 4: Bouncing
    */
    window.onload = function() {

      // Initialise an empty canvas and place it on the page
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      canvas.width = 800;
      canvas.height = 380;
      document.body.appendChild(canvas);

      // Inital starting position
      var posX = 20,
          posY = canvas.height / 2;

      // Initial velocities
      var vx = 16,
          vy = -16,
          gravity = 1;

      // Draw shapes on the canvas
      setInterval(function() {
        // Erase canvas
        context.fillStyle = "black";
        context.fillRect(0,0,canvas.width, canvas.height);
        posX += vx;
        posY += vy;

        if (posY > canvas.height * 0.75) {
          vy *= -0.6;
          vx *= 0.75;
          posY = canvas.height * 0.75;
        }

        vy += gravity;

        // Draw a circle particle on the canvas
        context.beginPath();
        context.fillStyle = "white";
        // After setting the fill style, draw an arc on the canvas
        context.arc(posX, posY, 10, 0, Math.PI*2, true); 
        context.closePath();
        context.fill();
        
      }, 30);


    };
