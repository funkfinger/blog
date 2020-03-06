import React from 'react';

import HeroImage from './HeroImage';

import { heroImageFluid } from '../../___test___/fixtures';

const testComponent = <HeroImage img={heroImageFluid} />;

test('it renders', () => {
  const { container } = render(testComponent);
  expect(container.querySelector('img')).toBeInTheDocument();
});
