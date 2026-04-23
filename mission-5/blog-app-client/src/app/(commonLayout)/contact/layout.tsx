import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <h1>This is contact branch</h1>
            {children}
        </div>
    )
}

export default layout