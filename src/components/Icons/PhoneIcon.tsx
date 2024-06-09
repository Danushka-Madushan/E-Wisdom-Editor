const PhoneIcon = ({ size }: { size: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className='text-primary' viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828C17.657 22 15.771 22 12 22c-3.771 0-5.657 0-6.828-1.172C4 19.657 4 17.771 4 14z"/><path strokeLinecap="round" d="M15 5H9" opacity=".5"/><circle cx="12" cy="17" r="2" opacity=".5"/></g></svg>
  )
}

export default PhoneIcon
