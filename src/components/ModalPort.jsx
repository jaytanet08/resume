import { Button, Modal } from 'antd'
import React from 'react'
import CarouselDetailPort from './CarouselDetailPort'

function ModalPort({ isModalOpen, handleCancel }) {

    return (
        <Modal
            width={1000}
            title="Detail"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={[
                <Button key="Cancle" type="primary" onClick={handleCancel}>
                    Cancle
                </Button>,
            ]}>
            <CarouselDetailPort />
        </Modal>
    )
}

export default ModalPort