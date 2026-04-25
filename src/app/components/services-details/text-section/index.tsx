import React from 'react';

export default function TextSection() {

    return (
        <section className='py-0 dark:bg-darkmode'>
            <div className='max-w-4xl mx-auto text-center text-gray' data-aos='fade-up'>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-4 sm:mb-6 md:mb-8' data-aos="fade-up">
                        Welcome to <span className="text-red">Epa</span><span className="text-primary">phras</span> Hospital
                    </p>
            </div>
        </section>
    );
}
