import React, { useEffect } from 'react';
import useApiF1 from 'components/utils/useApiF1';
import ScheduleTable from '../Table/Table';

const ScheduleSearch = ({ season }) => {
    const [load, loadInfo] = useApiF1({
        url: `/api/f1/${season}.json`,
        method: 'get',
    });

    useEffect(() => {
        load();
    }, []);

    return(
        <ScheduleTable
            schedules={loadInfo.data}
            loading={loadInfo.loading}
            error={loadInfo.error}
        />
    );
};

export default ScheduleSearch;