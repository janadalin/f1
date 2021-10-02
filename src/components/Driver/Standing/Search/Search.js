import React, { useEffect } from 'react';
import useApiF1 from 'components/utils/useApiF1';
import DriverStandingTable from '../Table/Table';

const DriverStandingSearch = ({ season, round }) => {
    const [load, loadInfo] = useApiF1({
        url: `/api/f1/${season}/${round}/driverStandings.json`,
        method: 'get',
    });

    useEffect(() => {
        load();
    }, []);

    return(
        <DriverStandingTable
            standings={loadInfo.data}
            loading={loadInfo.loading}
            error={loadInfo.error}
        />
    );
};

export default DriverStandingSearch;