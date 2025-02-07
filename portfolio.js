const projects = [
  {
    heading: "Visualisers",
    summary: "Play with visualisers and learn",
    image: "visualisers.png",
    link: "https://rajdhami273.github.io/visualisers/",
    bgColor: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
  },
  {
    heading: "Globiliti",
    summary:
      "Where schools innovate their future - together with help of innovators",
    image:
      "https://goglobiliti.com/assets/landing-page/main/globiliti-logo2x.png",
    link: "https://goglobiliti.com/",
    bgColor: "linear-gradient(315deg, #2d3436 0%, #777 74%)",
  },
  {
    heading: "Zero Jhanjhat for Tenants",
    summary: "Tenants can manage their profile and bills.",
    description: [
      "View and pay bills and dues.",
      "Subscribe/Unsubscribe a service.",
      "Lodge complaints/query.",
      "View property details.",
      "Add feedback.",
    ],
    image: "zj.png",
    bgColor:
      "linear-gradient(to top, rgb(60, 87, 122) 0%, rgb(31, 51, 78) 100%)",
  },
  {
    heading: "Ezhuthukoottam",
    summary: "Share your views by writing articles, read articles and comment.",
    description: [
      "Read Articles",
      "Write Articles",
      "Add Comment",
      "Add Feedback",
    ],
    image: "ez.png",
    bgColor: "linear-gradient(to right, #9FAC53 0%, #9EAE47 100%)",
  },
  {
    heading: "GruzGo",
    summary: "Truck delivery system simplified!",
    description: [
      "Shippers/Dispatchers can add/edit shipments.",
      "Dispatchers can add/remove drivers.",
      "Drivers/Dispatchers can accept/reject shipments.",
      "Drivers can add/edit trucks.",
      "Manage profiles for Shippers/Drivers/Dispatchers.",
      "Drivers/Dispatchers can add/edit bids on shipments.",
      "Live tracking of shipments",
    ],
    image: "gruzgo.png",
    bgColor: "linear-gradient(315deg, #009FFD 0%, #1763DC 74%)",
  },
  {
    heading: "Malayalam News Live TV",
    summary: "Watch live malayalam news from various channels at one place.",
    description: [
      "View live Malayalam news.",
      "All channels at one single place.",
      "Switch between channels with ease.",
    ],
    image:
      "https://lh3.googleusercontent.com/brcEoX7opyv-yChkerfSuM25NAy0FOU3PLfOixOpgA7a9kyeggTKW0VznO9OBNCMRFk=s180-rw",
    bgColor: "linear-gradient(315deg, #f5f5f1 0%, #e50914 74%)",
  },
  {
    heading: "Gamingverse",
    summary: "Pay entry fee, play game, win and earn money.",
    description: [
      "Add money to wallet.",
      "Send wallet money to your account.",
      "Participate in games.",
      "See your stats.",
    ],
    image:
      "https://lh3.googleusercontent.com/Txr0lTNeeGWC2f6MFfCZ2cXkKluKE7bpBJKNuFa96SOes6GIps-DfVgtrXjvTaWOIw=s360-rw",
    bgColor: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
  },
];

const projectsContainer = document.getElementById("projects-container");
const fragment = document.createDocumentFragment();
projects.forEach(({ image, heading, summary, link, bgColor }) => {
  fragment.append(
    new DOMParser().parseFromString(
      `<div class="col-12 col-md-4">
              <div class="card card-custom" style="background: ${bgColor};">
                <img src="${image}" class="card-img-top" alt="${heading}" />
                <div class="card-body text-white">
                  <h5 class="card-title">${heading}</h5>
                  <p class="card-text">${summary}</p>
                  ${
                    link
                      ? `<a class="btn btn-outline-light" href="${link}" target="_blank">Try it out</a>`
                      : ""
                  }
                </div>
              </div>
            </div>`,
      "text/html"
    ).body.firstChild
  );
});
projectsContainer.append(fragment);
