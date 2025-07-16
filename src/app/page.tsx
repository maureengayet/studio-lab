'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  // const { data: session } = useSession();
  // if (session) {
  // 	return (
  // 		<>
  // 			Signed in as {session.user?.name} <br />
  // 			{session.user?.image && <img src={session.user.image} alt="Profile picture" />}
  // 			<button onClick={() => signOut()}>Sign out</button>
  // 		</>
  // 	);
  // }
  // return (
  // 	<>
  // 		Not signed in <br />
  // 		<button onClick={() => signIn()}>Sign in</button>
  // 	</>
  // );
  return (
    <>
      <h2 className="mx-6 my-20 text-[5em] leading-[1.2]">
        Welcome to my lab of things — a space where I build ideas that live somewhere between
        design, curiosity, and code.{' '}
        <span className="animate-pulse" style={{ animationDuration: '1.1s' }}>
          💜
        </span>
      </h2>
      <div className="absolute bottom-6 left-6">
        <h3 className="text-xs font-semibold tracking-wide uppercase">GitHub</h3>
        <a
          href="https://github.com/maureengayet"
          target="_blank"
          className="text-xs tracking-wide uppercase"
        >
          @maureengayet
        </a>
      </div>
    </>
  );
}
