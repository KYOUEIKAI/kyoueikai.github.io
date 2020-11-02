        function NavOpen() {
            target = document.getElementById("nav-close");
            target.id = "nav-open";
            target = document.getElementById("nav-shadow");
            target.id = "nav-shadow-active";
            target = document.getElementById("form-fixed");
            target.id = "form-none";
            target = document.getElementById("form-fixed2");
            target.id = "form-none2";
            return false;
        }
        function NavClose() {
            target = document.getElementById("nav-open");
            target.id = "nav-close";
            target = document.getElementById("nav-shadow-active");
            target.id = "nav-shadow";
		    target = document.getElementById("form-none");
            target.id = "form-fixed";	
			target = document.getElementById("form-none2");
            target.id = "form-fixed2";
            return false;
        }
		window.onload = function() {
  const spinner = document.getElementById('pattern');
  spinner.classList.add('loaded');
}