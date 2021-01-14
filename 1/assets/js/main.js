        function NavOpen() {
			target = document.getElementById("wrapper");
			target2 = document.getElementById("entry");
            target.id = "wrapper-left";
			target2.id = "entry-active";
            return false;
        }
        function NavClose() {
			target2 = document.getElementById("entry-active");
			target = document.getElementById("wrapper-left");
            target2.id = "entry";
			target.id = "wrapper";
            return false;
        }
