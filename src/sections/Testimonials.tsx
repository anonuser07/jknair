import Link from 'next/link';

const testimonialColumns = [
  [
    {
      reviewerName: 'Lorem Ipsum 1',
      reviewLink: '#',
      reviewerImage:
        'https://ui-avatars.com/api/?name=YJ&background=f7f8f2&color=0d1220',
      review:
        "JK Nair provided invaluable tools and techniques for stress management that have made a significant difference in our team’s well-being. Their workshops were informative and highly practical, helping our employees manage their stress levels and maintain a healthy work-life balance",
    },
  ],
  [
    {
      reviewerName: 'Lorem Ipsum 2',
      reviewLink: '#',
      reviewerImage:
        'https://ui-avatars.com/api/?name=ABC&background=f7f8f2&color=0d1220',
      review:
        'Working with JK Nair was a game-changer for our organization. Their insights and strategies for improving our work culture were transformative. We saw a noticeable increase in employee engagement and satisfaction',
    },
    {
      reviewerName: 'Lorem Ipsum 3',
      reviewLink: '#',
      reviewerImage:
        'https://ui-avatars.com/api/?name=FA&background=f7f8f2&color=0d1220',
      review:
        'The presentation skills training from JK Nair was exceptional. Their approach to enhancing our team’s presentation abilities was engaging and effective',
    },
  ],
  [
    {
      reviewerName: 'Lorem Ipsum 4',
      reviewLink: '#',
      reviewerImage:
        'https://ui-avatars.com/api/?name=LI&background=f7f8f2&color=0d1220',
      review:
        'JK Nair has a unique talent for developing leadership versatility. Their program helped our leadership team to become more adaptable and effective in different situations. The skills we acquired have been crucial in navigating various challenges and driving our company forward',
    }
  ],
];

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      aria-label='What our customers are saying'
      className='py-20 sm:py-32 bg-alabaster'
    >
      {/* <div className='stars'>
        <div className='clip-star'></div>
        <div className='clip-star'></div>
        <div className='clip-star'></div>
        <div className='clip-star'></div>
        <div className='clip-star'></div>
      </div> */}
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl md:text-center'>
          <img
            src='/assets/5-star.png'
            className='h-[50px] md:h-[64px] md:mx-auto'
          />
          {/* <span className='uppercase text-xs text-slate-700'>Testimonials</span> */}
          <h2 className='text-3xl tracking-tight text-slate-900 sm:text-4xl heading'>
            Why Choose J K Nair?
          </h2>
          {/* <p className='mt-4 text-lg tracking-tight text-slate-700'>
            recommended for our honesty, reliability & expertise in autocare
          </p> */}
        </div>
        <ul
          role='list'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none md:grid-cols-2 lg:grid-cols-3'
        >
          {testimonialColumns.map((testimonialCol) => (
            <li key={testimonialCol[0]?.reviewerName}>
              <ul role='list' className='flex flex-col gap-y-6 sm:gap-y-8'>
                {testimonialCol.map((testimonial) => (
                  <li key={testimonial.reviewerName}>
                    <Link href={testimonial.reviewLink} target='_blank'>
                      <figure className='relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10'>
                        <svg
                          aria-hidden='true'
                          width='105'
                          height='78'
                          className='absolute left-0 top-0 fill-slate-100'
                        >
                          <path d='M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z'></path>
                        </svg>
                        <blockquote className='relative'>
                          <p className='text-base tracking-tight text-slate-600 italic'>
                            {testimonial.review}
                          </p>
                        </blockquote>
                        <figcaption className='relative mt-2 flex items-center justify-start gap-4 pt-2'>
                          <div className='overflow-hidden rounded-full'>
                            <img
                              alt=''
                              loading='lazy'
                              width='48'
                              height='48'
                              decoding='async'
                              data-nimg='1'
                              className='h-10 w-10 object-cover'
                              src={testimonial.reviewerImage}
                            />
                          </div>
                          <div>
                            <div className='text-base text-slate-900'>
                              {testimonial.reviewerName}
                            </div>
                            <div className='flex'>
                              {Array.from(Array(5)).map((_, key) => (
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  viewBox='0 0 23.44 19'
                                  className='w-[16px]'
                                  key={key}
                                >
                                  <polygon
                                    fill='#fdd663'
                                    points='10,15.27 16.18,19 14.54,11.97 20,7.24 12.81,6.63 10,0 7.19,6.63 0,7.24 5.46,11.97 3.82,19'
                                  />
                                </svg>
                              ))}
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
