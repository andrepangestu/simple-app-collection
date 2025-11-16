import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function TodoApp() {
  const [todos, setTodos] = React.useState<string[]>([]);
  const [newTodo, setNewTodo] = React.useState("");
  const [currentEditIndex, setCurrentEditIndex] = React.useState<number | null>(
    null
  );
  const [editText, setEditText] = React.useState("");
  const [isEditing, setIsEditing] = React.useState(false);
  const [deleteIndex, setDeleteIndex] = React.useState<number | null>(null);

  const handleAdd = () => {
    // Logic to add a new todo item
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleEdit = (index: number, updatedText: string) => {
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
        <div className="flex mb-4 items-center gap-4">
          <Input
            type="text"
            placeholder="Add a new todo"
            className="py-6 border-gray-500 mx-auto border-2 rounded-xl w-full "
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <Button
            className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 font-semibold"
            onClick={() => handleAdd()}
          >
            Add Todo
          </Button>
        </div>

        <div className="py-4">
          <h2 className="text-xl font-semibold mb-2">Todo List</h2>
          <ol className="list-decimal indent-2 space-y-4 my-auto">
            {todos.map((todo, index) => (
              <li
                key={index}
                className="text-left min-h-[48px] flex items-center"
              >
                <div className="flex items-center w-full">
                  <span className="w-8 text-center text-gray-500 font-semibold select-none">
                    {index + 1}.
                  </span>
                  <div className="grow">
                    {isEditing && currentEditIndex === index ? (
                      <Input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="border-2 rounded-xl w-full border-gray-500 min-h-[40px]"
                      />
                    ) : (
                      <div className="relative w-full">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="text-lg p-2 truncate block w-full min-h-[40px] rounded bg-transparent max-w-xs ">
                              {todo}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>{todo}</TooltipContent>
                        </Tooltip>
                      </div>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    {isEditing && currentEditIndex === index ? (
                      <div className="flex justify-end gap-2">
                        <Button
                          onClick={() => handleUpdate()}
                          className="ml-4 px-3 py-1 text-white rounded bg-green-500 hover:bg-green-600 font-semibold border rounded"
                        >
                          <span>Update</span>
                        </Button>
                        <Button
                          onClick={() => handleCancelEdit()}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 font-semibold border rounded"
                        >
                          <span>Cancel</span>
                        </Button>
                      </div>
                    ) : (
                      <div className="flex justify-end gap-2">
                        <Button
                          onClick={() => handleEdit(index, todo)}
                          className="ml-4 px-3 py-1 text-white bg-gray-500 rounded hover:bg-gray-600  font-semibold border rounded"
                        >
                          <span>Edit</span>
                        </Button>
                        <AlertDialog
                          open={deleteIndex === index}
                          onOpenChange={(open) => {
                            if (open) {
                              setDeleteIndex(index);
                            } else {
                              setDeleteIndex(null);
                            }
                          }}
                        >
                          <AlertDialogAction asChild>
                            <Button
                              onClick={() => setDeleteIndex(index)}
                              className="ml-2 px-3 py-1 bg-red-800 text-white rounded hover:bg-red-900 font-semibold border rounded"
                            >
                              <span>Delete</span>
                            </Button>
                          </AlertDialogAction>
                          <AlertDialogContent className="sm:max-w-[425px]">
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Todo</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete this todo? This
                                action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel asChild>
                                <Button
                                  className="hover:bg-gray-300"
                                  variant="outline"
                                >
                                  Cancel
                                </Button>
                              </AlertDialogCancel>
                              <Button
                                onClick={() => {
                                  setDeleteIndex(null);
                                  setTodos(todos.filter((_, i) => i !== index));
                                }}
                                className="hover:bg-red-500 hover:text-white"
                                type="submit"
                              >
                                Delete
                              </Button>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
