people = [
    { name: 'Mahmudul',
      Age: 27,
      Occupation: 'Web Development'  
    },
    { name: 'Kazi Sakib',
      Age: 25,
      Occupation: 'Driving'
    },
    { name: 'Tanvir',
      Age: 23,
      Occupation: 'Grapchi Design'  
    }
];

// const ages = people.map((people) => {
//     return people.ages;
// });

/*
const getAges = (people) => people.Ages;

const ages = people.map(getAges);

console.log(ages);
*/


/*
const fetchData = people.map((item) => {
    return{
        name: item.name.toUpperCase(),
        age: item.Age + 20
    }
})

console.log(fetchData);
*/

const fetchData = people.map((people) => 
`<h3> ${people.name}, 
      ${people.Age}, 
      ${people.Occupation}
</h3>`)
const result = document.querySelector('#results');
result.innerHTML = fetchData.join('');



