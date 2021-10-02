import React from 'react';
import { Alert, Table } from 'antd';

const QualifyingTable = ({ loading, error, qualifyings }) => {
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
            title: 'Q1',
            dataIndex: 'Q1',
            key: 'Q1',
        },
        {
            title: 'Q2',
            dataIndex: 'Q2',
            key: 'Q2',
        },
        {
            title: 'Q3',
            dataIndex: 'Q3',
            key: 'Q3',
        }
    ];

    if(error){
        return <Alert type='error' message='Error' banner />
    };

    if(loading || qualifyings === null){
        return <Alert type='success' message='Loading...' banner />
    };

    if(qualifyings.MRData.RaceTable.Races.length === 0){
        return <Alert type='warning' message='No records found.' banner />
    };

    return(
        <Table
            scroll={{ y: 200 }}
            columns={columns}
            dataSource={qualifyings.MRData.RaceTable.Races[0].QualifyingResults}
            rowKey='position'
        />
    );
};

export default QualifyingTable;