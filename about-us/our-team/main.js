let team_members = document.getElementById("team_members");

data = {
    "members": [
        {
            "name": "Rtn Kamal Bhandari",
            "img": "./img/Rtn_Kamal_Bhandari.png",
            "position": "President"
        },
        {
            "name": "Rtn Kshama Bhatia",
            "img": "./img/Rtn_Kshama_Bhatia.png",
            "position": "Immediate Past President"
        },
        {
            "name": "Rtn Ravi Nedungadi",
            "img": "./img/Rtn_Ravi_Nedungadi.png",
            "position": "President Elect & Director-Club Services"
        },
        {
            "name": "Rtn Rohitesh Hamirwasia",
            "img": "./img/Rtn_Rohitesh_Hamirwasia.png",
            "position": "Hon. Secretary"
        },
        {
            "name": "Rtn Gagan Bihari",
            "img": "./img/Rtn_Gagan_Bihari.png",
            "position": "Hon. Joint Secretary"
        },
        {
            "name": "Rtn Sunil Mysore",
            "img": "./img/Rtn_Sunil_Mysore.png",
            "position": "Sgt-At-Arms"
        },
        {
            "name": "Rtn Aditya Shroff",
            "img": "./img/Rtn_Aditya_Shroff.png",
            "position": "Hon. Treasurer"
        },
        {
            "name": "Rtn Punit Jalan",
            "img": "./img/Rtn_Punit_Jalan.png",
            "position": "Director-Community Services"
        },
        {
            "name": "Rtn Farook Mahmood",
            "img": "./img/Rtn_Farook_Mahmood.png",
            "position": "Director-Vocational Services"
        },
        {
            "name": "Rtn PP Quresh Merchant",
            "img": "./img/Rtn_PP_Quresh_Merchant.png",
            "position": "Director-International Services"
        },
        {
            "name": "Rtn Gyan Bhandari",
            "img": "./img/Rtn_Gyan_Bhandari.png",
            "position": "Director-New Generation"
        },
        {
            "name": "Rtn Seema Sibbal",
            "img": "./img/Rtn_Seema_Sibbal.png",
            "position": "Director-TEACH"
        },
        {
            "name": "Rtn Deepak Pinto",
            "img": "./img/Rtn_Deepak_Pinto.png",
            "position": "Director-Rotary Foundation"
        },
        {
            "name": "Rtn PP Nadeem Ahmed",
            "img": "./img/Rtn_PP_Nadeem_Ahmed.png",
            "position": "Co Opted Director"
        },
        {
            "name": "Rtn PP Deepak Malik",
            "img": "./img/Rtn_PP_Deepak_Malik.png",
            "position": "Co Opted Director"
        },
        {
            "name": "Rtn PP AVS Murthy",
            "img": "./img/Rtn_PP_AVS_Murthy.png",
            "position": "Permanent Invitee to The Board"
        },
        {
            "name": "Rtn PP Satish Manandi",
            "img": "./img/Rtn_PP_Satish_Manandi.png",
            "position": "Permanent Invitee to The Board"
        },
        {
            "name": "PDG B R Vishwanath Setty",
            "img": "./img/PDG_B_R_Vishwanath_Setty.png",
            "position": "Mentor to the Board"
        },
        {
            "name": "Rtn Arun Chamaria",
            "img": "./img/Rtn_Arun_Chamaria.png",
            "position": "Charitable Trust Treasurer"
        },
    ]
};

team_members.innerHTML = ``;

for (let i = 0; i < data["members"].length; i++) {
    team_members.innerHTML = team_members.innerHTML + `
<article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 shadow">
    <div class="tc">
      <img src="${data["members"][i]["img"]}" class="br-100 h4 w4 dib ba b--black-05 pa2" >
      <h1 class="f3 mb2">${data["members"][i]["name"]}</h1>
      <hr class="mw3 bb bw1 b--black-10">
      <h2 class="f5 fw4 gray mt0">${data["members"][i]["position"]}</h2>
    </div>
</article>
`;
}
