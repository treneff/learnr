const baseURL = `http://localhost:8080/api/days`;

const DayService = {
    getDaysByWeek(week) {
        return fetch(baseURL+`?week=${week}`).then((res) => res.json());

    
    },

    getDays(){
        return fetch(baseURL).then((res) => res.json());
    }

    // addPlayer(player) {
    //     return fetch(baseURL, {
    //         method: 'POST',
    //         body: JSON.stringify(player),
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     }).then((res) => res.json());
    // },
};

export default DayService;
