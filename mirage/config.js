export default function () {
  let devices = [
    {
      type: "device",
      id: "dfdfdas",
      attributes: {
        name: 'shexiangji',
        date: '2018/12/03',
        num: 10,
        note: ''
      },
    },
    {
      type: 'device',
      id: 'daadsf',
      attributes: {
        name: 'danfa',
        date: '2018/09/08',
        num: 34,
        note: 'dfafdafdsafsafa'
      }
    }
  ];
  let people = [
    {
      type: 'person',
      id: 1,
      attributes: {
        name: 'sun',
        gender: 'male',
        age: '18',
        date: '2015/01/02',
        grade: 'three',
        major: 'softwareEnginering'
      }
    },
    {
      type: 'person',
      id: 2,
      attributes: {
        name: 'wang',
        gender: 'male',
        age: '20',
        date: '2016/02/03',
        grade: 'three',
        major: 'soft'
      }
    }
  ]
  let actis = [
    {
      type: 'acti',
      id: 12,
      attributes: {
        name: 'zhibo',
        date: '2017/07/23',
        class: 'zhibo',
        people: 'sun',
        note: ''
      }
    }
  ]


  this.get('/devices', function (db, request) {
    if (request.queryParams.name !== undefined) {
      let filteredRentals = devices.filter(function (i) {
        return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: devices };
    }
  });

  this.get('/actis', function (db, request) {
    if (request.queryParams.name !== undefined) {
      let filteredRentals = actis.filter(function (i) {
        return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
      });
      return { data: filteredRentals }
    } else {
      return { data: actis };
    }
  });

  this.get('/people', function (db, request) {
    if (request.queryParams.name !== undefined) {
      let filteredRentals = people.filter(function (i) {
        return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: people };
    }
  });
}