const now = new Date('2020-03-22')

export const tradeDefault = {
  direction: '',
  market: '',
  entry: 0,
  stop: 0,
  target: 0,
  status: '',
  setup: '',
  opened: 0,
  closed: 0,
  period: 0,
  outcome: '',
  rewardToRisk: 0,
  negativeR: 0,
  positiveR: 0,
  conclusion: {
    execution: '',
    improveExecution: '',
    management: '',
    improveManagement: '',
    whyExecution: '',
    whyManagement: '',
  }
}

export const trades = [{
  id: '123',
  direction: 'long',
  market: 'dax',
  entry: 120,
  stop: 110,
  target: 140,
  status: 'closed',
  setup: 'ibl tick under',
  opened: 1587031851000,
  closed: 1587115800000,
  period: 0,
  outcome: 'win',
  rewardToRisk: 2,
  negativeR: false,
  positiveR: false,
  conclusion: {
    execution: 'abc',
    improveExecution: 'def',
    management: 'ghi',
    improveManagement: 'jkl',
    whyExecution: 'mno',
    whyManagement: 'pqr',
  }
}, {
  id: '456',
  direction: 'short',
  market: 'omx',
  entry: 1500,
  stop: 1600,
  target: 1400,
  status: 'closed',
  setup: 'ibh tick above',
  opened: 5,
  closed: 6,
  period: 0,
  outcome: 'loss',
  rewardToRisk: 2,
  negativeR: false,
  positiveR: false,
  conclusion: {
    execution: 'sdgsdg',
    improveExecution: 'sdgsdg',
    management: 'sdgsdg',
    improveManagement: 'sdgsdg',
    whyExecution: 'sdgsdg',
    whyManagement: 'sdgsdgsdg',
  }
}, {
  id: '789',
  direction: 'short',
  market: 'dax',
  entry: 12500,
  stop: 12800,
  target: 11900,
  status: 'closed',
  setup: 'weekly low break',
  opened: 9,
  closed: 10,
  period: 1,
  outcome: 'win',
  rewardToRisk: 2,
  negativeR: false,
  positiveR: false,
  conclusion: {
    execution: 'sdg sdg sd',
    improveExecution: 'fh gjgfjj',
    management: 'dsg s jgdj gj',
    improveManagement: 'dfhasdh dfh dfhdf',
    whyExecution: 'afdhdfh dfhdfhdf',
    whyManagement: 'dfdfhdfh dfah adfh',
  }
},
]