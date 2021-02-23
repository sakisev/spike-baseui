import { OptionsT, Select, SIZE, TYPE, Value } from 'baseui/select';
import React from 'react';
import { LabelXSmall } from 'baseui/typography';
import { Icon } from 'baseui/icon';
import { Button } from 'baseui/button';
import { StatefulCheckbox } from 'baseui/checkbox';

interface IProps {
    value: Value | undefined;
    setValue: (value: Value) => void;
}
export default function SelectUsers({ value, setValue }: IProps) {
    const opts = [
        { label: 'AliceBlue', id: '#F0F8FF' },
        { label: 'AntiqueWhite', id: '#FAEBD7' },
        { label: 'Aqua', id: '#00FFFF' },
        { label: 'Aquamarine', id: '#7FFFD4' },
        { label: 'Azure', id: '#F0FFFF' },
        { label: 'Beige', id: '#F5F5DC' },
    ] as OptionsT;
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
                            fontSize: '12px',
                        },
                    },
                }}
            >
                {'Start typing to add Editors'}
            </LabelXSmall>
            <div style={{ display: 'inline-flex' }}>
                <Select
                    options={opts}
                    overrides={{
                        SearchIconContainer: {
                            component: () => null,
                            style: { display: 'none' },
                        },
                        ControlContainer: {
                            style: {
                                borderRadius: '6px',
                                width: '255px',
                                backgroundColor: '#ffffff',
                                border: '1px solid #DFE2E6',
                            },
                        },
                        ClearIcon: () => (
                            <div
                                style={{
                                    width: 24,
                                    height: 24,
                                    backgroundColor: '#ccc',
                                    display: 'flex',
                                    justifyItems: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Icon>
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M-3-6h24v24H-3z" />
                                        <path
                                            fill="#5f6369"
                                            d="M10.675 7.356l.087.11c.477.552.856 1.096 1.444 1.475.367.243.827.406 1.086.44l.102.006c.776 0 1.47-.345 1.979-.83a2.55 2.55 0 00.23-.253c.322.248.715.41 1.154.447l.191.008.151-.005.16-.017a2.4 2.4 0 00.173-.03C16.654 10.073 15.133 11 13.392 11c-.78-.005-1.597-.317-2.188-.697a4.956 4.956 0 01-.862-.736l-.61-.651-.091-.107-.057-.06 1.09-1.393zM4.578 2.255c.78.005 1.596.317 2.187.697.339.22.609.472.863.736l.61.652c.009.013.005.014.02.033l.088.097-1.091 1.398-.087-.106c-.477-.551-.958-1.046-1.546-1.425-.362-.24-.703-.383-.937-.415l-.109-.007a2.88 2.88 0 00-1.979.813 2.65 2.65 0 000 3.833c.464.441 1.08.763 1.767.818l.225.008c.224 0 .738-.162 1.137-.42.34-.216.599-.545.899-.877l.304-.326c.114-.128.264-.306.432-.511l.765-.954c.518-.656.985-1.259 1.037-1.32l.38-.452c.46-.544.982-1.124 1.671-1.574.115-.075.24-.146.37-.213a2.072 2.072 0 00-.126.544l-.009.194.005.146.017.156c.05.345.187.66.387.928-.17.142-.341.3-.505.461l-.193.194c-.192.195-.619.718-1.054 1.265L8.81 8.275l-.38.453c-.458.544-.977 1.124-1.667 1.575-.59.38-1.406.691-2.188.697C2.05 11 .001 9.042 0 6.628c0-2.416 2.049-4.372 4.578-4.373zM16.719 0c.415 0 .75.407.75.909v1.686h1.626c.5 0 .905.337.905.753s-.405.753-.905.753H17.47v1.686c0 .502-.335.909-.75.909-.414 0-.75-.407-.75-.909V4.101h-1.73c-.5 0-.906-.337-.906-.753s.405-.753.905-.753h1.731V.909c0-.502.336-.909.75-.909z"
                                        />
                                    </g>
                                </Icon>
                            </div>
                        ),
                        ValueContainer: { style: { paddingLeft: '4px' } },
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
                    clearable={true}
                    placeholder="Select color"
                    onChange={(params) => {
                        setValue(params.value);
                        console.log(value);
                    }}
                />
                <Button
                    overrides={{
                        BaseButton: {
                            style: {
                                width: '73px',
                                height: '32px',
                                alignSelf: 'center',
                                marginLeft: '8px',
                                marginBottom: 0,
                                marginRight: 0,
                                paddingLeft: '20px',
                                paddingRight: '20px',
                            },
                        },
                    }}
                >
                    <LabelXSmall
                        overrides={{
                            Block: {
                                style: {
                                    color: 'rgb(255,255,255)',
                                    fontWeight: 600,
                                    lineHeight: 1.333,
                                    fontSize: '12px',
                                },
                            },
                        }}
                    >
                        Invite
                    </LabelXSmall>
                </Button>
            </div>
            <StatefulCheckbox
                onChange={() => console.log('you won a beer')}
                overrides={{
                    Checkmark: { style: { borderRadius: '6px', border: '1px solid #CFD2D7' } },
                    Label: () => (
                        <LabelXSmall
                            color={'#646D7A'}
                            overrides={{
                                Block: {
                                    style: {
                                        fontWeight: 400,
                                        height: '16px',
                                        fontSize: '12px',
                                        marginLeft: '8px',
                                    },
                                },
                            }}
                        >
                            Folder name
                        </LabelXSmall>
                    ),
                    Root: {
                        style: {
                            marginTop: '12px',
                            alignItems: 'center',
                        },
                    },
                }}
            />
        </>
    );
}
