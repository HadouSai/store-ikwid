export const list: tabs[] = [
  {
    name: 'Uno',
    code: 1,
    path: '/',
  },
  {
    name: 'dos',
    code: 2,
    path: '/2',
  },
  {
    name: 'tres',
    code: 3,
    path: '/3',
  },
  {
    name: 'cuatro',
    code: 4,
    path: '/4',
  },
];

export interface tabs {
  name: string;
  code: number;
  path: string;
}
