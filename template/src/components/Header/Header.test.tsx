import { h } from 'preact';
import { Header } from './Header';
import { render } from '@testing-library/preact';

describe('<Header />', () => {
  it('renders the header label', async () => {
    const { findByText } = render(<Header />);
    await findByText('Preact App');
  });

  it('renders 3 nav items', async () => {
    const { findAllByRole } = render(<Header />);

    const links = await findAllByRole('link');

    expect(links.length).toBe(3);
  });
});
