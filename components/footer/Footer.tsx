export const Footer = () => {
  return (
    <footer className='footer bg-base-100 p-10 text-base-content'>
      <div>
        <span className='footer-title'>Services</span>
        <a className='link link-hover'>Crypto Asset Management</a>
        <a className='link link-hover'>Consultancies</a>
        <a className='link link-hover'>Design</a>
        <a className='link link-hover'>DeFi</a>
      </div>
      <div>
        <span className='footer-title'>Company</span>
        <a className='link link-hover'>About Us</a>
        <a className='link link-hover'>Contact</a>
        <a className='link link-hover'>Jobs</a>
      </div>
      <div>
        <span className='footer-title'>Legal</span>
        <a className='link link-hover'>Terms of use</a>
        <a className='link link-hover'>Privacy policy</a>
      </div>
      <div className='flex flex-col w-full'>
        <span className='footer-title'>Subscribe</span>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Enter your Email Address</span>
          </label>
          <div className='relative'>
            <input
              type='text'
              placeholder='Username@mail.com'
              className='input input-bordered w-full pr-16'
            />
            <button className='btn btn-secondary absolute top-0 right-0 rounded-l-none'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
