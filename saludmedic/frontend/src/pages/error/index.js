import Circle from "components/icons/Circle";

export default function ErrorScreen() {
  return (
    <div class="flex justify-center items-center h-screen">
      <Circle className="animate-spin w-8 h-8" />
      <span className="text-2xl pl-3 font-semibold">Cargando...</span>
    </div>
  );
}
