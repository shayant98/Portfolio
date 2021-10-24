import SideMenuList from "./SideMenuList";
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
const Sidemenu = ({ isOpen, toggleMenu }: SidemenuProps) => {





  return (
    <>
      {isOpen ? <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto "
          onClose={(e) => toggleMenu(false)}
        >
          <div className="min-h-screen">
             <Dialog.Overlay className="fixed inset-0 bg-navy-normal opacity-50" />
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="bg-navy-normal w-3/4 shadow-lg  h-full z-10 absolute top-0 right-0">

                <SideMenuList toggleMenu={toggleMenu} />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition> : <div></div>  }
    </>

  );
};


interface SidemenuProps {
  isOpen: boolean
  toggleMenu: Function
}

export default Sidemenu;
