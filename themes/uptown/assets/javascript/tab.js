function tab() {
	var upcoming = document.getElementById("upcoming-tab");
	var contact = document.getElementById("contact-tab");
	var upcomingDiv = document.getElementById("upcoming-div");
	var contactDiv = document.getElementById("contact-div");
	var tabs = document.getElementById("tab-container");

	upcoming.addEventListener("click", function() {
		console.log("upcoming!!");
		upcomingDiv.classList.add("showDiv");
		contactDiv.classList.remove("showDiv");
		upcoming.classList.add("selected-tab");
		contact.classList.remove("selected-tab");
		tabs.classList.remove("forward");
		tabs.classList.add("reverse");
	});
	contact.addEventListener("click", function() {
		console.log("contact!!");
		contactDiv.classList.add("showDiv");
		upcomingDiv.classList.remove("showDiv");
		contact.classList.add("selected-tab");
		upcoming.classList.remove("selected-tab");
		tabs.classList.add("forward");
		tabs.classList.remove("reverse");
	});
}
tab();
