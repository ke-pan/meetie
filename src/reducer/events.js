const presetEvents = [
  {
    title: 'Birthday fun',
    started_at: {
      date: '3/1/2016',
      time: '7:00 pm',
    },
    ended_at: {
      date: '3/1/2016',
      time: '10:00 pm',
    },
    host: 'Peter',
    location: 'Ice bar',
    type: 'Birthday party',
    guests: 'Mike, John, Jenny',
    message: '',
  },
  {
    title: 'React Workshop',
    started_at: {
      date: '3/15/2016',
      time: '9:00 am',
    },
    ended_at: {
      date: '3/18/2016',
      time: '6:00 pm',
    },
    host: 'Orsland University',
    location: 'Orsland University',
    type: 'Workshop',
    guests: 'People who are interested in React',
    message: 'Please bring laptop',
  },
  {
    title: "Mr. and Mrs Pan's wedding",
    started_at: {
      date: '2/1/2016',
      time: '11:00 am',
    },
    ended_at: {
      date: '2/1/2016',
      time: '1:00 pm',
    },
    host: 'Mr. and Mrs Pan',
    location: 'Riverside Church',
    type: 'Wedding',
    guests: 'Family and friends',
    message: 'Bring your best wishes',
  },
];



export default function events(state = presetEvents, action) {
  switch (action.type) {
    case 'ADD_EVENT':
          return state.concat([action.event]);
    default:
          return state;
  }
}
