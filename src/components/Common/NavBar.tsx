import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Search Albums", href: "search" }
];

const NavBar = (props:any) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeIconId, setActiveIconId] = useState(props.active)
 
    return (
        <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 bg-black lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href={"/"} className="-m-1.5 p-1.5 flex items-center gap-4">
              <span className="sr-only">Spotify Trishan</span>
              <img
                className="w-auto h-8"
                src="https://seeklogo.com/images/S/spotify-2015-logo-560E071CB7-seeklogo.com.png?v=637903118310000000"
                alt="Hello"
              />
              <p className="text-[#1ed761] text-2xl font-bold font-primary">Spotify Trishan</p>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={activeIconId == item.name ? 'active' : 'inactive'}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-gray-900 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
            <a href={"/"} className="-m-1.5 p-1.5 flex items-center gap-4">
              <span className="sr-only">Spotify Trishan</span>
              <img
                className="w-auto h-8"
                src="https://seeklogo.com/images/S/spotify-2015-logo-560E071CB7-seeklogo.com.png?v=637903118310000000"
                alt="Hello"
              />
              <p className="text-[#1ed761] text-2xl font-bold font-primary">Spotify Trishan</p>
            </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="py-6 space-y-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    )
}

export default NavBar