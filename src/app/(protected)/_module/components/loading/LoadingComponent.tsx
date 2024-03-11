export function LoadingComponent() {
  const type = Math.floor(Math.random() * 5) + 1;

  return (
    <div className="w-[100vw] h-[100dvh] absolute top-0 left-0 flex justify-center items-center">
      <div className={`loading${type}`} />
    </div>
  );
}
