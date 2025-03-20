import reactVsVanillaJs from './assets/react-vs-vanilla-js.jpg';
import reactLogo from './assets/react.svg';
import './index.css';

export default function App() {
  return (
    <main className='content-center bg-zinc-700'>
      <section className='grid h-dvh place-items-center content-center gap-8'>
        <div className='flex gap-4'>
          <h1 className='text-center text-6xl text-white'>Hello, React!</h1>
          <img src={reactLogo} alt='React Logo' className='size-16' />
        </div>
        <img
          src={reactVsVanillaJs}
          alt='We are moving to React now, bye bye vanilla JavaScript...'
          className='rounded-xl shadow-md'
        />
        <p className='text-center text-xl text-white'>
          It's time to move on from
          <span className='font-semibold text-yellow-400'>
            {' '}
            HTML + Vanilla JS{' '}
          </span>
          to
          <span className='font-semibold text-sky-400'> React with JSX</span>
        </p>
      </section>
    </main>
  );
}
