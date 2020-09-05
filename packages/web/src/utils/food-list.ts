type ListProps = {
  [index: string]: Array<{ key: string; text: string; value: string }>;
};

const foodListObject: ListProps = {
  Fish: [
    {
      key: 'Small fish',
      text: 'Small fish',
      value: 'Small fish',
    },
    {
      key: 'Fish eggs',
      text: 'Fish eggs',
      value: 'Fish eggs',
    },
  ],
  Mollusks: [
    {
      key: 'Snails',
      text: 'Snails',
      value: 'Snails',
    },
    {
      key: 'Worms',
      text: 'Worms',
      value: 'Worms',
    },
    {
      key: 'Slugs',
      text: 'Slugs',
      value: 'Slugs',
    },
    {
      key: 'Other mollusks',
      text: 'Other mollusks',
      value: 'Other mollusks',
    },
  ],
  Grass: [
    {
      key: 'Grass',
      text: 'Grass',
      value: 'Grass',
    },
    {
      key: 'Leaves',
      text: 'Leaves',
      value: 'Leaves',
    },
    {
      key: 'Weeds',
      text: 'Weeds',
      value: 'Weeds',
    },
  ],
  'Aquatic plants': [
    {
      key: 'Algae',
      text: 'Algae',
      value: 'Algae',
    },
    {
      key: 'Roots',
      text: 'Roots',
      value: 'Roots',
    },
  ],
  Amphibians: [
    {
      key: 'Frogs',
      text: 'Frogs',
      value: 'Frogs',
    },
    {
      key: 'Tadpoles',
      text: 'Tadpoles',
      value: 'Tadpoles',
    },
    {
      key: 'Salamanders',
      text: 'Salamanders',
      value: 'Salamanders',
    },
    {
      key: 'Other amphibians',
      text: 'Other amphibians',
      value: 'Other amphibians',
    },
  ],
  Insects: [
    {
      key: 'Aquatic insects',
      text: 'Aquatic insects',
      value: 'Aquatic insects',
    },
    {
      key: 'Land insects',
      text: 'Land insects',
      value: 'Land insects',
    },
  ],
  Grain: [
    {
      key: 'Seeds',
      text: 'Seeds',
      value: 'Seeds',
    },
    {
      key: 'Grains',
      text: 'Grains',
      value: 'Grains',
    },
  ],
  Fruits: [
    {
      key: 'Berries',
      text: 'Berries',
      value: 'Berries',
    },
    {
      key: 'Fruits',
      text: 'Fruits',
      value: 'Fruits',
    },
    {
      key: 'Nuts',
      text: 'Nuts',
      value: 'Nuts',
    },
  ],
};

const foodList = (foodType: string) => foodListObject[foodType];

export default foodList;
