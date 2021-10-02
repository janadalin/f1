import React from 'react';
import { Alert, Row, Col, Table, Button } from 'antd';
import { useHistory } from 'react-router';

const ScheduleTable = ({ loading, error, schedules }) => {
    const history = useHistory();
    const columns = [
        {
            title: 'Round',
            dataIndex: 'round',
            key: 'round'
        },
        {
            title: 'Race Name',
            dataIndex: 'raceName',
            key: 'raceName'
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date'
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time'
        },
        {
            title: 'Circuit',
            dataIndex: 'Circuit',
            key: 'Circuit',
            render: Circuit => 
                Circuit.circuitName
        },
        {
            title: 'Locality',
            dataIndex: 'Circuit',
            key: 'Circuit',
            render: Circuit => 
                Circuit.Location.locality
        },
        {
            title: 'Country',
            dataIndex: 'Circuit',
            key: 'Circuit',
            render: Circuit => 
                Circuit.Location.country
        },
        {
            title: '',
            dataIndex: 'Races',
            key: 'Races',
            render: (text, record) => (
                <Button 
                    type='primary' 
                    shape='round'
                    onClick={() => {
                        history.push({
                            pathname: `/details`,
                            state: {
                                detail: {record}
                            }
                        })
                    }}
                >
                    More details
                </Button>
            )
        }
    ];

    if(error){
        return <Alert type='error' message='Error' banner />
    };

    if(loading || schedules === null){
        return <Alert type='success' message='Loading...' banner />
    };

    if(schedules.MRData.RaceTable.Races.length === 0){
        return <Alert type='warning' message='No records found.' />
    };

    return(
        <>
            <Row>
                <Col
                    span={24}
                >
                    <Table 
                        columns={columns} 
                        dataSource={schedules.MRData.RaceTable.Races} 
                        scroll={{ x: 1500, y: 600 }}
                        bordered
                        title={() => `Schedule ${schedules.MRData.RaceTable.season}`}
                        rowKey='round'
                    />
                </Col>
            </Row>
        </>
    );
};

export default ScheduleTable;