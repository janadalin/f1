import React, { useState } from 'react';
import { Alert, Row, Col, Typography, Select, Button } from 'antd';
import { useHistory } from 'react-router';

const { Title, text } = Typography;
const { Option } = Select;

const SeasonSelect = ({ loading, error, seasons }) => {
    const [season, setSeason] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const history = useHistory();

    if(error){
        return <Alert type='error' message='Error' banner />
    };

    if(loading || seasons === null){
        return <Alert type='success' message='Loading...' banner />
    };

    if(seasons.MRData.SeasonTable.Seasons.length === 0){
        return <Alert type='warning' message='No records found.' />
    };

    const onChange = (value) => {
        setDisabled(value !== 0 ? false : true);
        setSeason(value);
    };

    const onClick = () => {
        history.push(`/schedule/${season}`);
    };

    return(
        <>
            <Row>
                <Col
                    span={24}
                    justify='center'
                    align='middle'
                >
                    <Title>Seasons</Title>
                </Col>
            </Row>
            <Row>
                <Col
                    span={24}
                    justify='center'
                    align='middle'
                >
                    <Select 
                        showSearch
                        style={{ width: 300 }}
                        placeholder='Select a Season'
                        optionFilterProp='children'
                        filterOption={(input, option) => (
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        )}
                        size='large'
                        onChange={onChange}
                    >
                        {seasons.MRData.SeasonTable.Seasons.sort((a, b) => b.season.localeCompare(a.season)).map((season, index) => (
                            <Option key={index} value={season.season}>{season.season}</Option>
                        ))}
                    </Select>
                </Col>
            </Row>
            <Row>
                <Col
                    span={24}
                    justify='center'
                    align='middle'
                    style={{ padding: '10px' }}
                >
                    <Button
                        type='primary'
                        shape='round'
                        size='large'
                        disabled={disabled}
                        onClick={onClick}
                    >Schedule</Button>
                </Col>
            </Row>
        </>
    );
};

export default SeasonSelect;