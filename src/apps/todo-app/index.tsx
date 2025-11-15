import React from "react";
import { Modal } from "../../shared";

export default function TodoApp() {
  const [todos, setTodos] = React.useState<string[]>([]);
  const [newTodo, setNewTodo] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentEditIndex, setCurrentEditIndex] = React.useState<number | null>(
    null
  );
  const [editText, setEditText] = React.useState("");
  const [isEditing, setIsEditing] = React.useState(false);

  const handleAdd = () => {
    // Logic to add a new todo item
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDelete = (index: number) => {
    // Logic to delete a todo item
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEdit = (index: number, updatedText: string) => {
    // Logic to edit a todo item
    // const updatedTodos = todos.map((todo, i) =>
    //   i === index ? updatedText : todo
    // );
    // setTodos(updatedTodos);
    // setIsModalOpen(true);
    setIsEditing(true);
    setCurrentEditIndex(index);
    setEditText(updatedText);
  };

  const handleUpdate = () => {
    if (currentEditIndex !== null && editText.trim() !== "") {
      const updatedTodos = todos.map((todo, index) =>
        index === currentEditIndex ? editText : todo
      );
      setTodos(updatedTodos);
      handleCancelEdit();
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setCurrentEditIndex(null);
    setEditText("");
  };

  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold mb-20">Todo App</h1>
      <div className="max-w-xl mx-auto ">
        <div className="flex mb-4 gap-2 justify-center">
          <input
            type="text"
            placeholder="Add a new todo"
            className="mx-auto p-2 border-2 border-gray-300 rounded w-full border-rounded"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer font-semibold w-1/4"
            onClick={() => handleAdd()}
          >
            Add Todo
          </button>
        </div>

        <div className="py-4">
          <h2 className="text-xl font-semibold mb-2">Todo List</h2>
          <ol className="list-decimal indent-2 space-y-4 my-auto">
            {todos.map((todo, index) => (
              <li key={index} className="text-left">
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="col-span-2">
                    {isEditing && currentEditIndex === index ? (
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="px-2 py-1 border-2 border-gray-300 rounded-lg w-full"
                      />
                    ) : (
                      <div className="relative group w-56">
                        <span className="text-lg p-2 truncate block w-56 cursor-pointer">
                          {todo}
                        </span>
                        <div className="absolute left-0 top-full z-10 hidden group-hover:block bg-gray-900 text-white text-sm rounded px-3 py-2 mt-1 whitespace-pre-line max-w-xs break-words shadow-lg">
                          {todo}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="col-span-1">
                    {isEditing && currentEditIndex === index ? (
                      <div className="flex justify-end">
                        <button
                          onClick={() => handleUpdate()}
                          className="ml-4 px-3 py-1 text-white rounded hover:bg-green-600 cursor-pointer font-semibold border rounded"
                        >
                          <span>Update</span>
                        </button>
                        <button
                          onClick={() => handleCancelEdit()}
                          className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer font-semibold border rounded"
                        >
                          <span>Cancel</span>
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-end">
                        <button
                          onClick={() => handleEdit(index, todo)}
                          className="ml-4 px-3 py-1 text-white rounded hover:bg-green-600 cursor-pointer font-semibold border rounded"
                        >
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer font-semibold border rounded"
                        >
                          <span>Delete</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Edit Todo"
      >
        {/* <input
          type="text"
          className="w-full p-2 border-2 border-gray-300 rounded"
        /> */}
        <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer font-semibold">
          Save Changes
        </button>
      </Modal>
    </div>
  );
}
