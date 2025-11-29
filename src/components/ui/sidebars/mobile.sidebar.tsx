import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

export function MobileSidebar() {
  const [opened, { open, close }] = useDisclosure(false);

  return (

//sm md lg xl 2xl


    <div className='md:hidden'>
      <Drawer offset={8} 
      position='right'
      radius="md" opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <div onClick={open}>
        <img src="/icons/menu-bars.svg" alt="menu-bar" />
      </div>
     
    </div>
  );
}