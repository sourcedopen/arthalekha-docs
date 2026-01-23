import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Concepts',
      link: {
        type: 'doc',
        id: 'concepts/overview',
      },
      items: [
        'concepts/accounts',
        'concepts/incomes',
        'concepts/expenses',
        'concepts/transfers',
        'concepts/people',
        'concepts/tags',
        'concepts/balances',
        'concepts/recurring-transactions',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/dashboard',
        'features/projected-balance',
        'features/filtering-and-search',
        'features/exports',
        'features/account-types',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/setting-up-accounts',
        'guides/tracking-daily-expenses',
        'guides/managing-recurring',
        'guides/family-budgeting',
        'guides/analyzing-spending',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/account-types',
        'reference/frequencies',
        'reference/glossary',
      ],
    },
  ],
};

export default sidebars;
