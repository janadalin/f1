import React, { useEffect } from 'react';
import useApiF1 from 'components/utils/useApiF1';
import SeasonSelect from '../Select/Select';

const SeasonSearch = () => {
    const limit = 1000;
    const [load, loadInfo] = useApiF1({
        url: `/api/f1/seasons.json`,
        method: 'get',
        params: {
            limit
        }
    });

    useEffect(() => {
        load();
    }, []);

    return(
        <SeasonSelect
            seasons={loadInfo.data}
            loading={loadInfo.loading}
            error={loadInfo.error}
        />
    );
};

export default SeasonSearch;