        function NavOpen() {
            target = document.getElementById("nav-close");
            target.id = "nav-open";
            target = document.getElementById("nav-shadow");
            target.id = "nav-shadow-active";
            return false;
        }
        function NavClose() {
            target = document.getElementById("nav-open");
            target.id = "nav-close";
            target = document.getElementById("nav-shadow-active");
            target.id = "nav-shadow";
            return false;
        }