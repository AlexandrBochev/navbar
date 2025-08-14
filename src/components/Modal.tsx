import { IoCloseSharp } from "react-icons/io5";
import { useAppContext } from "../context";

export const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useAppContext();
  return (
    <div
      className={`
        absolute inset-0 flex items-center justify-center
        ${isModalOpen ? "block" : "hidden"}
      `}
    >
      <div
        className="bg-black opacity-60 absolute inset-0"
        onClick={() => setIsModalOpen(false)}
      />
      <div className="relative bg-white p-10 rounded-md shadow-lg z-10">
        <IoCloseSharp size={24} onClick={() => setIsModalOpen(false)} className="cursor-pointer absolute top-4 right-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Modal Title
        </h2>
        <p className="text-gray-600">This is a modal content area.</p>
      </div>
    </div>
  );
};
