import { Link } from '@mui/material';
import React from 'react'

export function Breadcrumbs({ items }) {
    return (
        <nav aria-label="breadcrumb">
            <ol style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0 }}>
                {items.map((item, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        {item.link ? (
                            <Link to={item.link} style={{ textDecoration: 'none', color: '#929292', fontWeight: "500" }}>
                                {item.label}
                            </Link>
                        ) : (
                            <span style={{ color: '#407EB2', fontWeight: "600" }}>{item.label}</span>
                        )}
                        {index < items.length - 1 && (
                            <span style={{ margin: '0 8px', color: '#929292', fontWeight: "500" }}>{'>'}</span>
                        )}
                    </li>
                ))}
                <li>
                    <span style={{ margin: '0 8px', color: '#929292', fontWeight: "500" }}>{'>'}</span>
                    <span className='px-[10px] py-[2px] bg-[#E7E7E7] text-[1rem] font-medium'>DRAFT</span>
                </li>
            </ol>
        </nav>
    );
}
