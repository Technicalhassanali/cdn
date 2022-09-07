 var accordion = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < accordion.length; i++) {
            accordion[i].addEventListener("click", function () {
                this.classList.toggle("active-color");
                var accordion_panel = this.nextElementSibling;
                if (accordion_panel.style.display === "block") {
                    accordion_panel.style.display = "none";
                } else {
                    accordion_panel.style.display = "block";
                }
            });
        }
