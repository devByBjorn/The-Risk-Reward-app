import moment from 'moment'
export default [{
  direction: "long",
  market: "GOLD",
  entry: "1455",
  stop: "1450",
  target: "1468",
  opened: moment(0),
  closed: moment(0).add(2, 'days'),
  period: 2,
  outcome: "loss",
  rewardToRisk: -0.38,
  conclusion: {
    execution: "both",
    management: "poor",
    whyNote: "note",
    improveNote: "note",
  },
  id: "badf4096-51d6-4907-9b30-e01eed5f5143"
}, {
  direction: "short",
  market: "CRUDE OIL",
  entry: "28",
  stop: "32",
  target: "22",
  opened: moment(0).add(5, 'days'),
  closed: moment(0).add(9, 'days'),
  period: 4,
  outcome: "win",
  rewardToRisk: 1.5,
  conclusion: {
    execution: "poor",
    management: "both",
    whyNote: "note",
    improveNote: "note",
  },
  id: "370176dc-6295-45c6-b69d-00717e8afc3d"
}, {
  direction: "long",
  market: "PLE",
  entry: "223",
  stop: "215",
  target: "250",
  opened: moment(0).subtract(12, 'days'),
  closed: moment(0).subtract(3, 'days'),
  period: 9,
  outcome: "win",
  rewardToRisk: 4.33,
  conclusion: {
    execution: "good",
    management: "good",
    whyNote: "note",
    improveNote: "note",
  },
  id: "18e0c043-bdff-41f0-8b1a-ea45c553d750"
}]

