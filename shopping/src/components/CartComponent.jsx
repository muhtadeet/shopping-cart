import {Badge, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {HeartIcon} from './HeartIcon';

export default function CartComponent() {
  return (
    <div>
      <Badge content="1" color='danger'>
      <Dropdown backdrop="blur">
      <DropdownTrigger>
          <Button isIconOnly color="transparent" className="text-black transition duration-300 ease-in-out hover:text-blue-gray-400" aria-label="Like">
            <HeartIcon />
          </Button> 
      </DropdownTrigger>
        <DropdownMenu variant="faded" aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
      </Dropdown>
      </Badge>
    </div>
  )
}
