
```javascript
/*
database.ref('trades').push({
  closed: 3,
  direction: "long",
  entry: "11850",
  market: "DAX",
  opened: 1,
  outcome: "win",
  period: 2,
  rewardToRisk: 8,
  setup: "ib low and above",
  status: "closed",
  stop: "11825",
  target: "12050",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
})

database.ref('trades').push({
  closed: 5,
  direction: "short",
  entry: "10",
  market: "DAX",
  opened: 2,
  outcome: "win",
  period: 3,
  rewardToRisk: 1,
  setup: "ib high and above",
  status: "closed",
  stop: "12",
  target: "8",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
})

database.ref('trades').push({
  closed: 12,
  direction: "long",
  entry: "25",
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
})
*/

database.ref('trades').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})

// READ DATA OF THE TRADES REF
/*
database.ref('trades')
  .once('value')
  .then((snapshot) => {
    const trades = []

    snapshot.forEach((childSnapshot) => {
      const key = childSnapshot.key
      const childData = childSnapshot.val()

      trades.push({
        id: key,
        ...childData
      })
    })
    console.log(trades)
  })
  .catch((err) => {
    console.log('FAIL', err)
  })
  */

// database.ref().set({
//   closed: 3,
//   direction: "long",
//   entry: "11850",
//   market: "DAX",
//   opened: 1,
//   outcome: "win",
//   period: 2,
//   rewardToRisk: 8,
//   setup: "ib low and above",
//   status: "closed",
//   stop: "11825",
//   target: "12050",
//   conclusion: {
//     execution: "good",
//     improveExecution: "",
//     improveManagement: "",
//     management: "good",
//     whyExecution: "",
//     whyManagement: "",
//   }
// }).then(() => {
//   console.log('Data was saved')
// }).catch((err) => {
//   console.log('FAIL', err)
// })

/* database.ref('period').set('3') */
/* database.ref('conclusion/execution').set('poor')*/
/* database.ref().update({
  opened: 5,
  outcome: 'loss'
})
*/

/*
database.ref('conclusion/improveExecution')
  .remove()
  .then(() => {
    console.log('data was removed')
  }).catch((err) => {
    console.log('FAIL', err)
  })
*/
//database.ref('conclusion/improveExecution').set('')

/*
database.ref('conclusion').update({
  execution: 'bad',
  management: 'both'
})
*/

/*
database.ref('conclusion')
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val()
    console.log(val)
  })
  .catch((err) => {
    console.log('FAIL', err)
  })
*/

/*
const onValueChange = database.ref('conclusion')
  .on('value', snapshot => {
    console.log(snapshot.val())
  }, err => {
    console.log('FAIL', err)
  })

console.log(onValueChange)

database.ref('conclusion')
  .off('value', onValueChange)
*/

// THINKING IN LISTs
// const firebaseTrades = {
//   trades: {
//     jdgöjsdg: {
//       status: 'closed',
//       opened: 5,
//       closed: 11,
//       period: 6,
//     },
//     lklknfsafn: {
//       status: 'closed',
//       opened: 2,
//       closed: 5,
//       period: 3,
//     },
//   }
// }

