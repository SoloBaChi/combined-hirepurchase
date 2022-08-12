import React from 'react';
import Image from 'next/image';
import avatar from "../sign-in-images/sign-in-image-3.jpeg";

function AdminBoard(props) {
    return (
        <div>
            <div className='table-wrapper'>
           <table>
            <thead>
                <th>Name</th>
                <th>Date</th>
                <th>Phone</th>
                <th>Program</th>
                <th>Age</th>
                <th>others</th>
            </thead>
            <tbody>
                <tr>
                    <td className='user-details details'>
                        <div className="flex">
                           <div className='img-container'>
                             <Image src={avatar} alt="user-image" className="img"/>
                            </div> 
                            <p className='name-title'>Kathryn Murphy</p>
                        </div>
                        </td>
                        <td className='date-details details'>6/21/19</td>
                        <td className='phone-details details'>09017912839</td>
                        <td className='program-details details'>Car</td>
                        <td className='age-details details'>48</td>
                        <td className='check details'>
                        <div className='check-icons flex'>
                        <span></span>
                        <span></span>
                        </div>
                        </td>
                </tr>
            </tbody>
           </table>
        </div>
    </div>
    );
}

export default AdminBoard;