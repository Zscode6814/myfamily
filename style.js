var family_names=[
    "1. Tanim Mustafiz (My dad)",
    "4. Zaina Mustafiz (My second younguest sister)",
    "5. Zunera Mustafiz (My younguest sister)"
     ];
     var family_picture=
     [
        " Dad picture.jpg",
        "Zaina Picture.jpg",
        "Zunera Picture.jpg",
    
     ];
     var i=0;
     function NextPage()
     {

        i++; 
        var holder=3
        if(i>holder)
        {
            i=0;
        }
         var update_image=family_picture[i];
         var update_name=family_names[i];
     document.getElementById("family_names").innerHTML=update_name;
     document.getElementById("family_picture").src=update_image;
    }
  