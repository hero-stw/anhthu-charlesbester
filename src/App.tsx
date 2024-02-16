import RSVPForm from "./components/RSVPForm";

function App() {
  return (
    <div className='max-w-[480px] mx-auto main'>
      <div className='absolute max-w-[480px] w-full h-full pattern pointer-events-none z-[98]'>
        <div className='splash-1 pointer-events-none'></div>
        <div className='splash-2 pointer-events-none'></div>
      </div>
      <div className='z-[99] relative px-[70px] pt-8 pb-0'>
        <img
          className='w-[78px] mx-auto mb-8'
          src='./images/flower.png'
          alt=''
        />
        <h3 className='text-center font-main-sans text-brown uppercase tracking-wider text-[13px]'>
          TOGETHER WITH OUR FAMILY AND FRIENDS
        </h3>
      </div>
      <div className='z-[99] relative px-[70px] py-8'>
        <h1 className='font-main-serif text-brown uppercase text-[40px] text-center'>
          ANH THƯ
        </h1>
        <h1 className='font-main-serif text-brown uppercase text-[40px] text-center'>
          &
        </h1>
        <h1 className='font-main-serif text-brown uppercase text-[40px] text-center'>
          Charles Bester
        </h1>
      </div>
      <div className='z-[99] relative px-[110px] pt-0'>
        <p className='text-center font-main-sans text-brown uppercase tracking-wider text-[11px]'>
          request the pleasure of your company at HUMPLY of our wedding
        </p>
      </div>
      <div className='date-box w-full z-[99] relative py-14'>
        <div className='text-center text-brown text-xl font-normal font-main-serif uppercase tracking-widest border-black border-t-[0.75px] border-b-[0.75px] py-3'>
          SATURDAY
        </div>
        <div className='justify-center items-center flex w-full'>
          <div className='flex-col justify-center items-center gap-[7px] w-full'>
            <div className='text-center text-brown text-base font-normal font-main-serif uppercase tracking-widest'>
              oct
            </div>
            <div className='text-center text-brown text-[40px] font-normal font-main-serif uppercase tracking-[4.80px] border-black border-l-[0.75px] border-r-[0.75px]'>
              26
            </div>
            <div className='text-center text-brown text-base font-normal font-main-serif uppercase tracking-widest'>
              2024
            </div>
          </div>
        </div>
        <div className='text-center text-brown text-xl font-normal font-main-serif uppercase tracking-widest border-black border-t-[0.75px] border-b-[0.75px] py-3'>
          5PM
        </div>
      </div>
      <div className='place w-full z-[99] relative text-center pb-14'>
        <h2 className='uppercase font-main-sans-bold text-[13px] text-center text-brown'>
          PLACE
        </h2>
        <h3 className='text-center font-main-sans-medium text-brown lowercase tracking-wider text-[13px]'>
          Hanoi, Vietnam
        </h3>
        <h3 className='venue relative inline-block  mx-auto text-center font-main-sans-medium text-brown tracking-wider text-[10px] pt-8'>
          venue to be announced, more information to follow
        </h3>
      </div>
      <div className='z-[99] relative main-img'></div>
      <div className='bg-[#fff8f2] py-14 px-12 relative'>
        <div className='rsvp rounded-[10px] shadow p-8 z-[100] relative'>
          <h3 className='font-main-serif text-form text-[24px] text-center tracking-[0.225em]'>
            Anh Thư
          </h3>
          <h3 className='font-main-serif text-form uppercase text-[24px] text-center'>
            &
          </h3>
          <h3 className='font-main-serif text-form text-[24px] text-center tracking-[0.225em]'>
            Charles Bester
          </h3>
          <img
            className='w-[78px] mx-auto my-4'
            src='./images/flower_2.png'
            alt=''
          />
          <p className='text-center font-main-sans-medium text-form tracking-wider text-[12px] capitalize '>
            We Look forward for your Attendance
          </p>
          <RSVPForm />
        </div>
        <div className='splash-4 pointer-events-none z-[98]'></div>
      </div>
    </div>
  );
}

export default App;
