// CardBlockAndMenu.tsx
import React from "react";
import CardBlock from "./CardBlock";
import { Props as CardBlockProps } from "./CardBlock"; // Import CardBlock Props

type Props = CardBlockProps & {
  onDeleteClick?: (id: string) => void;
  onCompleteClick?: (id: string) => void;
  onMenuToggle?: (id: string | null) => void;
  isMenuOpen?: boolean;
};

const CardBlockAndMenu = ({
  id,
  onIndicatorClick,
  isMenuOpen = false,
  onMenuToggle = () => {},
  onDeleteClick = () => {},
  onCompleteClick = () => {},
  ...cardBlockProps
}: Props) => {
  const handleComplete = () => {
    onCompleteClick(id);
    onMenuToggle(null); // Close the menu
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Delete this card?");
    if (confirmDelete) {
      onDeleteClick(id);
    }
    onMenuToggle(null); // Close the menu
  };

  const handleCancel = () => {
    onMenuToggle(null); // Close the menu
  };

  return (
    <div className="relative">
      <CardBlock
        id={id}
        {...cardBlockProps}
        onIndicatorClick={() => {
          onMenuToggle(id);
        }}
      />
      {isMenuOpen && (
        <div className="absolute z-10 ml-8 top-0 bg-white border rounded shadow w-32">
          <button
            onClick={handleComplete}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Complete
          </button>
          <button
            onClick={handleDelete}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Delete
          </button>
          <button
            onClick={handleCancel}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default CardBlockAndMenu;
