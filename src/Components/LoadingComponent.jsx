import react from 'react';

export const LoadingSpinner = () => {
    return(
        <div className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary ">
            </span>
            <p>Loading . . .</p>
        </div>
    );
};