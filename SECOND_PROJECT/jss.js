let links = document.querySelectorAll(".portfolio .site li");
let imags = document.querySelectorAll(".portfolio .photos .box");


links.forEach((link) =>{

    //class active
    link.addEventListener("click" , (ele) =>{

        links.forEach((element) =>{

            element.classList.remove("active");

        });

        ele.target.classList.add("active");
    });    

    //image
    link.addEventListener("click" , (e) =>{

        imags.forEach((img) =>{

            img.style.display = 'none';
        })
        
        document.querySelectorAll(`.portfolio ${e.target.dataset.cat}`).forEach((el) =>{

            el.style.display = 'block';

        });
    });
});
