        function NavOpen() {
			target = document.getElementById("schedule-close");
			target2 = document.getElementById("schedule-open");
            target.id = "schedule-open";
			target2.id = "schedule-close";
            return false;
        }
        function NavClose() {
			target = document.getElementById("schedule-open");
            target.id = "schedule-close";
            return false;
        }
