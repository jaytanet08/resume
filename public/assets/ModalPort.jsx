import { Button, Modal } from 'antd'
import React from 'react'
import CarouselDetailPort from './CarouselDetailPort'

function ModalPort({ isModalOpen, handleCancel, imageDetail, textDetail }) {

    return (
        <Modal
            width={1000}
            title="Detail"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={[
                <Button key="Cancle" type="primary" onClick={handleCancel}>
                    Cancel
                </Button>,
            ]}>
            <div>
                <CarouselDetailPort img={imageDetail} />
            </div>
            <div style={{ paddingTop: "1rem" }}>
                <label >{textDetail}</label>
            </div>
        </Modal>
    )
}

export default ModalPort