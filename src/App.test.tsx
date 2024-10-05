import App  from './App';
import { render, screen } from '@testing-library/react';
describe("App", () => {
  it("should render App", async () => {
    render(<App/>)
    const heading = await screen.findByRole('heading', {name: /hello world/i })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveStyle({color: 'rgb(220, 20, 60)'})
  });
});