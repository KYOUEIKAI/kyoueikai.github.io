        function NavOpen() {
			target = document.getElementById("wrapper");
			target2 = document.getElementById("entry");
			target3 = document.getElementById("blue");
			target4 = document.getElementById("gray");
            target.id = "wrapper-left";
			target2.id = "entry-active";
			target3.id ="gray";
			target4.id ="blue";
            return false;
        }
        function NavClose() {
			target2 = document.getElementById("entry-active");
			target = document.getElementById("wrapper-left");
			target3 = document.getElementById("blue");
			target4 = document.getElementById("gray");
            target2.id = "entry";
			target.id = "wrapper";
			target3.id ="gray";
			target4.id ="blue";
            return false;
        }
