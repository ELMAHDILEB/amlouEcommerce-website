import React from 'react'

const SkeletonLoader = ({count}) => {
  return (
    <>
        {
            Array.from({ length: count }).map((_, index) => (
              <div
                className="w-full h-[500px] flex flex-col items-center bg-[var(--cardColor)] rounded-[15px] shadow-md overflow-hidden pb-2"
                key={index * 3}
              >
                {/* Skeleton for image */}
                <div className="w-full h-[250px] flex items-center justify-center">
                  <Skeleton height="100%" width="100%" />
                </div>

                {/* Skeleton for text */}
                <div className="w-full flex flex-col justify-center gap-10 flex-grow">
                  <div className="flex flex-col justify-between items-center gap-5 px-4">
                    <Skeleton width={150} height={20} />
                    <Skeleton width={100} height={20} />
                  </div>

                  {/* Skeleton for category */}
                  <div className="flex flex-row justify-between px-4">
                    <Skeleton width={80} height={15} />
                    <Skeleton width={50} height={15} />
                  </div>
                </div>

                {/* Skeleton for button */}
                <Skeleton width={150} height={40} />
              </div>
            ))
        }
    </>
  )
}

export default SkeletonLoader

