const events = [
    { title: "Wedding Ceremony", image: "assets/images/event1.jpg" },
    { title: "Corporate Meetup", image: "assets/images/event2.jpg" },
    { title: "Birthday Celebration", image: "assets/images/event3.jpg" }
];

const gallery = document.getElementById("gallery");
events.forEach(event => {
    const imgElement = document.createElement("img");
    imgElement.src = event.image;
    imgElement.alt = event.title;
    imgElement.classList.add("w-full", "h-64", "object-cover", "rounded-lg");
    gallery.appendChild(imgElement);
});
