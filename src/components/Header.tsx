import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="flex flex-row justify-between p-6">
      <h1>The Lab</h1>
      <ThemeToggle></ThemeToggle>
    </header>
  );
}
