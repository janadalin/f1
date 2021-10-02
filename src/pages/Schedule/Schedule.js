import ScheduleSearch from 'components/Schedule/Search/Search';
import React from 'react';
import { useParams } from 'react-router';

const PageSchedule = () => {
    const { season } = useParams();

    return(
        <ScheduleSearch season={season} />
    );
};

export default PageSchedule;