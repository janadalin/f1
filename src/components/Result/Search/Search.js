import React, { useEffect } from 'react';
import useApiF1 from 'components/utils/useApiF1';
import ResultTable from '../Table/Table';

const ResultSearch = ({ season, round }) => {
    const [load, loadInfo] = useApiF1({
        url: `/api/f1/${season}/${round}/results.json`,
        method: 'get',
    });

    useEffect(() => {
        load();
    }, []);

    return(
        <ResultTable
            results={loadInfo.data}
            loading={loadInfo.loading}
            error={loadInfo.error}
        />
    );
};

export default ResultSearch;