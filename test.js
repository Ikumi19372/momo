const img_src = ["C:\Users\ootsu\OneDrive\画像\S__17063956.jpg","C:\Users\ootsu\OneDrive\画像\テニス２.jpg","C:\Users\ootsu\OneDrive\画像\テニス５.jpg"];
      let num = -1;
 
      function slide_time() {
        if (num === 2) {
          num = 0;
        } else {
          num++;
        }
        document.getElementById("slide_img").src = img_src[num];
      }
 
      setInterval(slide_time,1500);
      

      