export const boardColumnsMock = [
  {
    id: 'lead',
    title: 'Lead'
  },
  {
    id: 'rfp',
    title: 'RFP in progress'
  },
  {
    id: 'submitted',
    title: 'Submitted'
  },
  {
    id: 'won',
    title: 'Won'
  },
  {
    id: 'lost',
    title: 'Lost'
  },
  {
    id: 'closed',
    title: 'Closed'
  }
];

export const boardColumnsByTypeMock = new Map([
  ['basic', ['lead', 'rfp', 'submitted']],
  ['advanced', ['lead', 'rfp', 'submitted', 'lost']],
  ['expert', ['lead', 'rfp', 'submitted', 'won', 'lost', 'closed']],
  ['custom', ['rfp', 'submitted', 'won']],
])
