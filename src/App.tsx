import TodoApp from "./apps/todo-app";
import BodyLayout from "./layouts/body/BodyLayout";
import Footer from "./layouts/footer/Footer";
import Header from "./layouts/header/Header";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <BodyLayout>
        <TodoApp />
      </BodyLayout>
      <Footer />
    </div>
  );
}

export default App;
