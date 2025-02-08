import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode, useEffect, useState } from 'react'

interface Props extends IBasicModal {
  title?: ReactNode
  children?: ReactNode
  content?: ReactNode
}

export default function Modal(
  {
    isOpen,
    title,
    confirmCallback,
    closeCallback,
    children,
    content
  }: Props) {

  function closeModal() {
    if (closeCallback) {
      closeCallback()
    }
  }

  function onConfirm() {
    if (confirmCallback) {
      confirmCallback()
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div"
        className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-full min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* https://github.com/tailwindlabs/headlessui/issues/273 */}
              {
                children ?? (
                  <Dialog.Panel className="w-full max-w-sm text-white transform overflow-hidden rounded-2xl jh-bg opacity-80 p-6 text-left align-middle shadow-xl transition-all">

                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>
                    <div className="mt-2 text-xl text-center">
                      {content}
                    </div>

                    <div className="mt-4 flex justify-around text-md">
                      <button
                        type="button"
                        className="inline-flex
                            focus:outline-none  
                            justify-center border-b px-4 py-2  font-medium  "
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="inline-flex
                            focus:outline-none  
                            justify-center rounded-md shadow-black shadow-lg jh-bg px-4 py-2 font-medium  "
                        onClick={onConfirm}
                      >
                        Confirm
                      </button>
                    </div>
                  </Dialog.Panel>
                )
              }
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
