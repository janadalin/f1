import React from 'react';
import { Alert, Table } from 'antd';

const ConstructorStandingTable = ({ loading, error, standings }) => {
    const columns = [
        {
            title: 'Pos',
            dataIndex: 'position',
            key: 'position'
        },
        {
            title: 'Constructor',
            dataIndex: 'Constructor',
            key: 'Constructor',
            render: Constructor => {
                return Constructor.name;
            }
        },
        {
            title: 'Nationality',
            dataIndex: 'Constructor',
            key: 'nationality',
            render: Constructor => {
                return Constructor.nationality;
            }
        },
        {
            title: 'Points',
            dataIndex: 'points',
            key: 'points',
        },
        {
            title: 'Wins',
            dataIndex: 'wins',
            key: 'wins',
        }
    ];

    if(error){
        return <Alert type='error' message='An unexpected error happened.' banner />;
    };

    if(loading || standings === null){        
        return <Alert type='success' message='Loading...' banner />;
    };

    if(standings.MRData.StandingsTable.StandingsLists.length === 0){
        return <Alert type='warning' message='No records found.' banner />;
    };
    
    return(
        <Table
            scroll={{ x: 1500, y: 200 }}
            columns={columns}
            dataSource={standings.MRData.StandingsTable.StandingsLists[0].ConstructorStandings}
            rowKey='position'
        />
    );
};

export default ConstructorStandingTable;
