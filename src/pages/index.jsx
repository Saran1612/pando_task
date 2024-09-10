import React from 'react'
import { Breadcrumbs } from '../components/breadcrumbs'
import Buttons from '../components/button';
import MiniDrawer from '../components/drawer';

export const Lane = () => {
    const breadcrumbItems = [
        { label: 'Sourcing Events', link: '/' },
        { label: 'AIR 009' }, // No link, it's the current page
    ];
    return (
        <div>
            <div className='px-[20px] py-[10px] flex justify-between items-center' style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" }}>
                <div>
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
                <div className='flex justify-between items-center'>
                    <div class="vertical-line vertical-line_two"></div>
                    <Buttons
                        onClick={() => { }}
                        className="text-[14px]"
                        text="INITIATE EVENT"
                    />
                </div>
            </div>

            <div>
                <MiniDrawer />
            </div>


        </div >
    )
}
