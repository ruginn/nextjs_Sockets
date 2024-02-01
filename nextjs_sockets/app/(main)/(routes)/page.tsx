import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main className=''>
      <p className='text-lg font-black'>testing</p>
      <Button>click me</Button>
      <UserButton afterSignOutUrl='/' />
      <ModeToggle />
    </main>
  );
}
