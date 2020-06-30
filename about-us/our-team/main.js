let team_members = document.getElementById("team_members");

data = {
    "members": [
        {
            "name": "Ravi Nedungadi",
            "img": "./img/Ravi Nedungadi.jpg",
            "position": "President"
        },
        {
            "name": "Kamal Bhandari",
            "img": "./img/kamal self formal.png",
            "position": "Immediate Past President"
        },
        {
            "name": "Srikanth Bhagvat",
            "img": "./img/SRIKANTH - SELF PIC 1.png",
            "position": "President Elect"
        },
        {
            "name": "Atul Kaushal",
            "img": "./img/ATUL KAUSHAL SELF PIC.JPG",
            "position": "V P"
        },
        {
            "name": "Palani Loganathan",
            "img": "./img/PALANI SELF.JPG - formal.jpeg",
            "position": "Hon. Secretary"
        },
        {
            "name": "Anil Lala",
            "img": "./img/ANIL LALA - SELF FOTO.png",
            "position": "Hon. Joint Secretary"
        },
        {
            "name": "Uday Masturlal",
            "img": "./img/UDAY MASTURLAL - SELF PIC.jpeg",
            "position": "Hon. Treasurer"
        },
        {
            "name": "Deepak Pinto",
            "img": "./img/DEEPAK PINTO SELF FOTO.jpg",
            "position": "Sargent"
        },
        {
            "name": "Punith Jalan",
            "img": "./img/PUNITH JALAN -DIRECTOR COMMUNITY SERVICE - SELF FOTO.jpeg",
            "position": "Commty Serv"
        },
        {
            "name": "Seema Sibal",
            "img": "./img/SEEMA SIBAL SELF PIC 5.jpeg",
            "position": "TEACH"
        },
        {
            "name": "Rakesh Sharma",
            "img": "./img/RAKESH SHARMA - SELF FOTO.jpeg",
            "position": "Vocational"
        },
        {
            "name": "Farook Mahmood",
            "img": "./img/FAROOK MAHMOOD - SEELF PIC.jpg",
            "position": "International Service"
        },
        {
            "name": "Jayata Jhaveri",
            "img": "./img/JAYATA JHAVERI SELF FOTO.jpg",
            "position": "Youth Services"
        },
        {
            "name": "Sunil Mysore",
            "img": "./img/SUNIL MYSORE - SELF PIC.jpeg",
            "position": "Membership"
        },
        {
            "name": "Aditya Shroff",
            "img": "./img/ADITYA SHROFF SELF PIC BACKGROUND CHANGE.jpeg",
            "position": "TRF"
        },
        {
            "name": "Varadu Seshamani",
            "img": "./img/VARADU SELF FOTO (1)-1.png",
            "position": "coopted"
        },
        {
            "name": "Manandi Satish",
            "img": "./img/SATISH MANANDI - CO-OPTED DIRECTOR SELF FOTO - EDITED BACKGROUND.jpeg",
            "position": "coopted"
        },
        {
            "name": "M G Pramod",
            "img": "./img/M G PRAMOD - SELF FOTO.jpeg",
            "position": "Mentor"
        },
        {
            "name": "Vishwanath Setty",
            "img": "./img/Vishwanath Setty - SELF FOTO.jpeg",
            "position": "Club Trainer"
        },
        {
            "name": "Nadeem Ahmed",
            "img": "./img/NADEEM AHMED - PERMANENT INVITEE - SELF FOTO.jpeg",
            "position": "Permant Invitee"
        },
        {
            "name": "Suresh Bhatia",
            "img": "./img/SURESH BHATIA - SELF FOTO - PPT.jpeg",
            "position": "Permant Invitee"
        },
    ]
};

team_members.innerHTML = ``;

for (let i = 0; i < data["members"].length; i++) {
    team_members.innerHTML = team_members.innerHTML + `
<article class="mw5 col-md-4 col-12 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow">
    <div class="tc">
      <img src="${data["members"][i]["img"]}" class="br-100 h4 w4 dib ba b--black-05 pa2" >
      <h1 class="f3 mb2">${data["members"][i]["name"]}</h1>
      <hr class="mw3 bb bw1 b--black-10">
      <h2 class="f5 fw4 gray mt0">${data["members"][i]["position"]}</h2>
    </div>
</article>
`;
}
