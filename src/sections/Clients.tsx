const Clients = () => {
  return (
    <section id='books' className='py-8 bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-2xl tracking-tight text-slate-900'>
            Trusted by India's top companies
          </h2>
        </div>
      </div>
      <div className="mt-8">
        <div className='slider relative overflow-hidden'>
          <div className='slide-track flex gap-[15px] mb-[16px]'>
            {Array(18)
              .fill(0)
              .map((_, id) => (
                <div className='slide w-[100px] h-[75px] p-2 border rounded-md' key={id}>
                  <img
                    src={`/assets/clients/${id + 1}.png`}
                    className='object-contain h-full w-full'
                    alt=''
                  />
                </div>
              ))}
            {Array(18)
              .fill(0)
              .map((_, id) => (
                <div className='slide w-[100px] h-[75px] p-2 border rounded-md' key={id}>
                  <img
                    src={`/assets/clients/${id + 1}.png`}
                    className='object-contain h-full w-full'
                    alt=''
                  />
                </div>
              ))}
          </div>
        </div>
        <div className='slider relative overflow-hidden'>
          <div className='slide-track flex gap-[15px] mb-[16px]'>
            {Array(18)
              .fill(0)
              .map((_, id) => (
                <div className='slide w-[100px] h-[75px] p-2 border rounded-md' key={id}>
                  <img
                    src={`/assets/clients/${id + 19}.png`}
                    className='object-contain h-full w-full'
                    alt=''
                  />
                </div>
              ))}
            {Array(18)
              .fill(0)
              .map((_, id) => (
                <div className='slide w-[100px] h-[75px] p-2 border rounded-md' key={id}>
                  <img
                    src={`/assets/clients/${id + 19}.png`}
                    className='object-contain h-full w-full'
                    alt=''
                  />
                </div>
              ))}
          </div>
        </div>
        <div className='slider relative overflow-hidden'>
          <div className='slide-track flex gap-[15px] mb-[16px]'>
            {Array(18)
              .fill(0)
              .map((_, id) => (
                <div className='slide w-[100px] h-[75px] p-2 border rounded-md' key={id}>
                  <img
                    src={`/assets/clients/${id + 37}.png`}
                    className='object-contain h-full w-full'
                    alt=''
                  />
                </div>
              ))}
            {Array(18)
              .fill(0)
              .map((_, id) => (
                <div className='slide w-[100px] h-[75px] p-2 border rounded-md' key={id}>
                  <img
                    src={`/assets/clients/${id + 37}.png`}
                    className='object-contain h-full w-full'
                    alt=''
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
