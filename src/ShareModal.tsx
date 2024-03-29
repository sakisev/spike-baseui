import React, { useState } from 'react';
import { Value } from 'baseui/select';
import { Modal, ModalBody, ModalHeader, ROLE, SIZE } from 'baseui/modal';
import { LabelSmall, LabelXSmall } from 'baseui/typography';
import ShareModalTabs from './ShareModalTabs';
import SelectUsers from './SelectUsers';
import { OptionProfile, StatefulMenu } from 'baseui/menu';

interface IProps {
    isModalOpen: boolean;
    setModalOpen: (value: boolean) => void;
}
interface IItem {
    title: string;
    subtitle: string;
    body: string;
    imgUrl: string;
}
const ITEMS = Array.from({ length: 4 }, () => ({
    title: 'David Smith',
    subtitle: 'Senior Engineering Manager',
    body: 'Uber Everything',
    imgUrl: 'https://via.placeholder.com/32x32',
}));
function ShareModal({ isModalOpen, setModalOpen }: IProps) {
    const [value, setValue] = useState<Value>();
    const [active, setActive] = useState<string | number>('0');

    const modalBody = () => {
        switch (active) {
            case '0' || 0: {
                return (
                    <>
                        <SelectUsers value={value} setValue={setValue} />
                        <StatefulMenu
                            items={ITEMS}
                            overrides={{
                                List: {
                                    style: {
                                        width: '350px',
                                    },
                                },
                                Option: {
                                    component: OptionProfile,
                                    props: {
                                        getProfileItemLabels: ({
                                            title,
                                            subtitle,
                                            body,
                                        }: IItem) => ({
                                            title,
                                            subtitle,
                                            body,
                                        }),
                                        getProfileItemImg: (item: IItem) => item.imgUrl,
                                        getProfileItemImgText: (item: IItem) => item.title,
                                    },
                                    defaultProps : {

                                    }
                                },
                            }}
                        />
                    </>
                );
            }
            case '1' || 1: {
                return <LabelSmall>{'something else'}</LabelSmall>;
            }
        }
    };
    return (
        <Modal
            onClose={() => setModalOpen(false)}
            isOpen={isModalOpen}
            closeable={false}
            animate
            autoFocus
            size={SIZE.default}
            overrides={{
                Dialog: {
                    style: {
                        width: '400px',
                        height: '525px',
                        borderRadius: '8px',
                        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
                    },
                },
                Backdrop: {
                    style: {
                        backgroundColor: 'rgba(41, 44, 49, 0.4)',
                    },
                },
            }}
            role={ROLE.dialog}
        >
            <ModalHeader>
                <LabelSmall
                    color={'#292C31'}
                    overrides={{ Block: { style: { fontFamily: 'Inter', fontWeight: 600 } } }}
                >
                    {'Share'}
                </LabelSmall>
                <LabelXSmall
                    color={'#646D7A'}
                    overrides={{ Block: { style: { fontWeight: 400 } } }}
                >
                    {'Folder name'}
                </LabelXSmall>
                <ShareModalTabs active={active} setActive={setActive} />
            </ModalHeader>
            <ModalBody style={{ flex: '1 1 0' }}>{modalBody()}</ModalBody>
        </Modal>
    );
}

export default ShareModal;
