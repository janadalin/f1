import React from 'react';
import { Alert, Table } from 'antd';

const ResultTable = ({ loading, error, results }) => {
    const columns = [
        {
            title: 'Pos',
            dataIndex: 'position',
            key: 'position'
        },
        {
            title: 'No',
            dataIndex: 'number',
            key: 'number'
        },
        {
            title: 'Driver',
            dataIndex: 'Driver',
            key: 'Driver',
            render: Driver => {
                return Driver.givenName + ' ' + Driver.familyName;
            }
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
            title: 'Laps',
            dataIndex: 'laps',
            key: 'laps',
        },
        {
            title: 'Grid',
            dataIndex: 'grid',
            key: 'grid',
        },
        {
            title: 'Time',
            dataIndex: 'Time',
            key: 'Time',
            render: Time => {
                return Time ? Time.time : '-'
            }
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Points',
            dataIndex: 'points',
            key: 'points',
        },
    ];

    if(error){
        return <Alert type='error' message='Error' banner />
    };

    if(loading || results === null){
        return <Alert type='success' message='Loading...' banner />
    };

    if(results.MRData.RaceTable.Races.length === 0){
        return <Alert type='warning' message='No records found.' banner />
    };

    return(
        <Table
            scroll={{ x: 1500, y: 200 }}
            columns={columns}
            dataSource={results.MRData.RaceTable.Races[0].Results}
            rowKey='position'
        />
    );
};

export default ResultTable;
