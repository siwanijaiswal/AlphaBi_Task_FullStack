import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export const Loader = () => {
    return (
        <div className="flex justify-center items-center">
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}
