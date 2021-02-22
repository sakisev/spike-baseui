import React, { useState } from 'react';
import { Button } from 'baseui/button';
import ShareModal from './ShareModal';

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <ShareModal isModalOpen={isOpen} setModalOpen={setIsOpen} />
            <Button onClick={() => setIsOpen(true)}>{'Open Share Modal'}</Button>
        </>
    );
}
