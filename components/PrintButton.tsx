"use client";

import BaseButton from "./BaseButton";

const PrintButton = () => {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <BaseButton
      onClick={handlePrint}
      visual="outline"
      size="sm"
      shape="round"
      className="print-button text-sm border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900"
      title="Print this page"
    >
      🖨️ Print
    </BaseButton>
  );
};

export default PrintButton;