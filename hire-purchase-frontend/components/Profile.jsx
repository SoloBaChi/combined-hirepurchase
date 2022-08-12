import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

function Profile(props) {
  return (
    <>
    <section className="profile-container">
     <div className="profile-header">
     <FaUserCircle className='profile-header-details'/>
     <h2>{props.heading}</h2>
     </div>
    </section> 
       <section className='profile-body grid place-items-center md:place-items-stretch'>
       <dl className='md:flex md:justify-between'>
         <div className="col-1">
         <dt>Phone:</dt>
         <dd>{props.phone}</dd>
         <dt>E-mail:</dt>
         <dd>{props.email}</dd>
         <dt>Address:</dt>
         <dd>{props.address}</dd>
         <dt>State:</dt>
         <dd>{props.state}</dd>
         </div>
        <div className="col-2">
         <dt>Program:</dt>
         <dd>{props.program}</dd>
         <dt>Time on Hire Purchase:</dt>
         <dd>{props.timeOnHirePurchase}</dd>
         <dt>Amount to be paid this month:</dt>
         <dd>₦{props.amountToBePaidThisMonth}</dd>
         <dt className='font-medium'>Time left for payment:</dt>
         <dd>{props.timeLeftForPayment}</dd>
        </div>
         </dl>
       </section>
    </>
  );
}

export default Profile;
