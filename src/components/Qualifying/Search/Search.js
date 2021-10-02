import React, { useEffect } from 'react';
import useApiF1 from 'components/utils/useApiF1';
import QualifyingTable from '../Table/Table';

const QualifyingSearch = ({ season, round }) => {
    const [load, loadInfo] = useApiF1({
        url: `/api/f1/${season}/${round}/qualifying.json`,
        method: 'get',
    });

    useEffect(() => {
        load();
    }, []);

    return(
        <QualifyingTable
            qualifyings={loadInfo.data}
            loading={loadInfo.loading}
            error={loadInfo.error}
        />
    );
};

export default QualifyingSearch;