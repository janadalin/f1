import React from 'react';
import { Row, Col, Descriptions, Tabs } from 'antd';
import { useLocation } from 'react-router';
import QualifyingSearch from 'components/Qualifying/Search/Search';
import ResultSearch from 'components/Result/Search/Search';
import ConstructorStandingSearch from 'components/Constructor/Standing/Search/Search';
import DriverStandingSearch from 'components/Driver/Standing/Search/Search';

const { TabPane } = Tabs;

const DetailCard = () => {
    const location = useLocation();

    const callback = (key) => {
        //console.log(key);
    };

    return(
        <Row>
            <Col
                span={24}
                justify='center'
                align='middle'
            >
                <Descriptions
                    title={location.state.detail.record.raceName}
                >
                    <Descriptions.Item label='Season'>
                        {location.state.detail.record.season}
                    </Descriptions.Item>
                    <Descriptions.Item label='Round'>
                        {location.state.detail.record.round}
                    </Descriptions.Item>
                    <Descriptions.Item label='Location'>
                        {location.state.detail.record.Circuit.Location.locality} / {location.state.detail.record.Circuit.Location.country}
                    </Descriptions.Item>
                    <Descriptions.Item label='Date'>
                        {location.state.detail.record.date}
                    </Descriptions.Item>
                    <Descriptions.Item label='Time'>
                        {location.state.detail.record.time}
                    </Descriptions.Item>
                    <Descriptions.Item label='Circuit Name'>
                        {location.state.detail.record.Circuit.circuitName}
                    </Descriptions.Item>
                </Descriptions>
            </Col>
            <Col
                span={24}
                justify='center'
            >
                <Tabs 
                    defaultActiveKey='1'
                    onChange={callback}
                    type='card'
                >
                    <TabPane tab='Qualifying' key='1'>
                        <QualifyingSearch
                            season={location.state.detail.record.season}
                            round={location.state.detail.record.round}
                        />
                    </TabPane>
                    <TabPane tab='Results' key='2'>
                        <ResultSearch
                            season={location.state.detail.record.season}
                            round={location.state.detail.record.round}
                        />
                    </TabPane>
                    <TabPane tab='Constructor' key='3'>
                        <ConstructorStandingSearch
                            season={location.state.detail.record.season}
                            round={location.state.detail.record.round}
                        />
                    </TabPane>
                    <TabPane tab='Driver' key='4'>
                        <DriverStandingSearch
                            season={location.state.detail.record.season}
                            round={location.state.detail.record.round}
                        />
                    </TabPane>
                </Tabs>
            </Col>
        </Row>
    );
};

export default DetailCard;