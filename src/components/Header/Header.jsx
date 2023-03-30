import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="header flex justify-between p-4 lg:px-12 lg:py-5 bg-slate-200">
                <div className="navbar-brand">
                    <h1 className='text-3xl font-semibold'>Brainwave Hub</h1>
                </div>
                <div className="user-profile w-10">
                    <img className='rounded-full'  src="https://media.licdn.com/dms/image/C5103AQHloKgHKXDH2A/profile-displayphoto-shrink_800_800/0/1577787932606?e=2147483647&v=beta&t=4AUJ2RH7_iCiqAVsmSKRl1uAsDKMbmeQ7XFcIowkxO0" alt="SmMunna" />
                </div>
            </div>
        </div>
    );
}

export default Header;
