import { Select, SIZE, TYPE, Value } from 'baseui/select';
import React from 'react';
import { LabelXSmall } from 'baseui/typography';

interface IProps {
    value: Value | undefined;
    setValue: (value: Value) => void;
}
export default function SelectUsers({ value, setValue }: IProps) {
    return (
        <>
            <LabelXSmall
                overrides={{
                    Block: {
                        style: {
                            marginBottom: '4px',
                            color: 'rgb(41, 44, 49)',
                            fontWeight: 400,
                            lineHeight: 1.333,
                            fontSize: 12,
                        },
                    },
                }}
            >
                {'Start typing to add Editors'}
            </LabelXSmall>
            <Select
                options={[
                    { label: 'AliceBlue', id: '#F0F8FF' },
                    { label: 'AntiqueWhite', id: '#FAEBD7' },
                    { label: 'Aqua', id: '#00FFFF' },
                    { label: 'Aquamarine', id: '#7FFFD4' },
                    { label: 'Azure', id: '#F0FFFF' },
                    { label: 'Beige', id: '#F5F5DC' },
                ]}
                overrides={{
                    DropdownListItem: {
                        // component: ($value: any) => <DropdownListItem />,
                    },
                }}
                size={SIZE.compact}
                value={value}
                labelKey="label"
                closeOnSelect={false}
                multi
                required
                type={TYPE.search}
                placeholder="Select color"
                onChange={(params) => setValue(params.value)}
            />
        </>
    );
}
