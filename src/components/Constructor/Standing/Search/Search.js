import React, { useEffect } from 'react';
import useApiF1 from 'components/utils/useApiF1';
import ConstructorStandingTable from '../Table/Table';

const ConstructorStandingSearch = ({ season, round }) => {
    const [load, loadInfo] = useApiF1({
        url: `/api/f1/${season}/${round}/constructorStandings.json`,
        method: 'get',
    });

    useEffect(() => {
        load();
    }, []);

    return(
        <ConstructorStandingTable
            standings={loadInfo.data}
            loading={loadInfo.loading}
            error={loadInfo.error}
        />
    );
};

export default ConstructorStandingSearch;