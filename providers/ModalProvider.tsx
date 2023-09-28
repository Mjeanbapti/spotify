"use client";
import React, { useEffect, useState } from 'react'

import Modal from '@/components/modal';
import AuthModal from '@/components/auth-modal';
import UploadModal from '@/components/upload-modal';

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    //if modal rendered in server side, return null
    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AuthModal />
            <UploadModal />
        </>
    )
}

export default ModalProvider