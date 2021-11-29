const competitors =[
    {
        name: "Daniel",
        points : 0,
        targetsMet: 0,
        topFive: 0,
    },
    {
        name: "Ahmed",
        points : 0,
        targetsMet: 0,
        topFive: 0,
    },
    {
        name: "Clinton",
        points : 2,
        targetsMet: 0,
        topFive: 0,
    },
    {
        name: "Eleazar",
        points : 5,
        targetsMet: 1,
        topFive: 1,
    },
    // {
        //     name: "Jade",
        //     points : 0,
        //     targetsMet: 0,
        // topFive: 0,
        // },
        {
            name: "Juwon",
            points : 5,
            targetsMet: 1,
            topFive: 1,
        },
        {
            name: "Samuel",
            points : 0,
            targetsMet: 0,
            topFive: 0,
        },
        {
            name: "Victor",
            points : 5,
            targetsMet: 1,
            topFive: 1,
        },
        {
            name: "Success",
            points : 0,
            targetsMet: 0,
            topFive: 0,
    },
    {
        name: "Prosper",
        points : 0,
        targetsMet: 0,
        topFive:0,
    },
    {
        name: "Joshua",
        points : 0,
        targetsMet: 0,
        topFive:0,
    },
    {
        name: "Nyerho",
        points : 5,
        targetsMet: 1,
        topFive:1,
    },
    {
        name: "Lateef",
        points : 0,
        targetsMet: 0,
        topFive:0,
    },
    {
        name: "Zarouk",
        points : 0,
        targetsMet: 0,
        topFive:0,
    },
    {
        name: "Esther",
        points : 2,
        targetsMet: 0,
        topFive:0,
    },
    {
        name: "Wofe",
        points : 5,
        targetsMet: 1,
        topFive:1,
    },
    {
        name: "Kobi",
        points : 0,
        targetsMet: 0,
        topFive:0,
    },
    {
        name: "David",
        points : 0,
        targetsMet: 0,
        topFive:0,
    },
]

const sortedByName = competitors.sort((a,b) => {
    if(a.name > b.name){
        return 1;
    }else {
        return -1;
    }
})
const sortedByPoints = competitors.sort((a,b) => {
    if(a.points > b.points){
        return -1;
    }else {
        return 1;
    }
})

const table = document.querySelector("#table");

const row = document.createElement("tr");

    for(i=0; i<sortedByPoints.length; i++){
        row.innerHTML = `
        <td>${i+1}</td>
        <td style="text-align: center;">${competitors[i].name}</td>
        <td style="text-align: center;">${competitors[i].points}</td>
        <td style="text-align: center;">${competitors[i].targetsMet}</td>
        <td style="text-align: center;">${competitors[i].topFive}</td>`

        table.append(row.cloneNode(true))
    }

   

