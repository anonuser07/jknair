import { booksList } from '@/constant/config';
import Link from 'next/link';

const Books = () => {
  return (
    <section id='books' className='py-20 sm:py-32 bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl tracking-tight text-slate-900 sm:text-4xl heading'>
            Best-selling books
          </h2>
          <p className='mt-4 text-lg tracking-tight text-slate-700 text-balance'>
            Our proven strategic training modules are personally curated to
            achieve specific goals for each client
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-16 max-w-4xl gap-24 text-sm flex flex-col md:flex-row justify-center'
        >
          {booksList.map((book) => (
            <div key={book.anchor} className='max-w-[300px]'>
              <img
                src={book.image}
                className='h-full max-h-[500px] mb-4 rounded-r-xl'
              />
              <h3 className='mb-2'>{book.name}</h3>
              <span className='text-sm text-slate-700'>{book.description}</span>
              <Link
                href={book.buyLink}
                className='mt-6 w-fit flex items-center text-sm font-mediumtext-gray- underline'
              >
                Learn more
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Books;
