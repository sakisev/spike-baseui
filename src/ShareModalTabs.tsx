import React from 'react';
import { Tab, Tabs } from 'baseui/tabs';
import { LabelXSmall } from 'baseui/typography';

interface IProps {
    active: string | number;
    setActive: (value: string | number) => void;
}
export default function ShareModalTabs({ active, setActive }: IProps) {
    return (
        <Tabs
            onChange={({ activeKey }) => setActive(activeKey)}
            activeKey={active}
            overrides={{
                TabBar: {
                    style: {
                        backgroundColor: 'none',
                        padding: '0',
                        marginTop: '16px',
                        borderBottom: '1px solid rgba(41, 44, 49, 0.08)',
                    },
                },
                TabContent: ({ $value }: any) => <LabelXSmall>{$value}</LabelXSmall>,
                Tab: {
                    style: ({ $active }: any) => ({
                        color: $active ? '#0071DB' : '#292C31',
                        borderColor: $active ? '#0071DB' : 'none',
                        width: 'auto',
                        marginLeft: '0',
                        marginTop: '0',
                        marginBottom: '0',
                        paddingRight: '0',
                        paddingLeft: '0',
                        paddingTop: '0',
                        paddingBottom: '8px',
                        marginRight: '24px',
                    }),
                },
            }}
        >
            <Tab title={'Share'} />
            <Tab title={'Settings'} />
        </Tabs>
    );
}
