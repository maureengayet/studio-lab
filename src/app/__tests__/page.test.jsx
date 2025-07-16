import { render, screen } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import Page from '../page';
import '@testing-library/jest-dom';

describe('Page', () => {
  it('renders without crashing', () => {
    render(
      <SessionProvider session={null}>
        <Page />
      </SessionProvider>
    );
  });

  it('renders logged-in content when authenticated', () => {
    const mockSession = {
      user: { name: 'Jane Doe', email: 'jane@example.com' },
      expires: '2099-12-31T23:59:59.999Z',
    };

    render(
      <SessionProvider session={mockSession}>
        <Page />
      </SessionProvider>
    );
    expect(screen.getByText(/jane doe/i)).toBeInTheDocument();
  });
});
