export default function Disclaimer() {
  return (
    <div className="hidden tablet:block p-2 space-y-2 border border-red-500 rounded-lg w-fit absolute top-0 mt-2 mx-2 max-w-[400px]">
      <h1 className="text-red-500">Disclaimer</h1>
      <div>
        <p>
          This application is <span className="text-red-500">not a real product</span>, but only a training project.{" "}
        </p>
        <p className="text-red-500">
          Please, do not use confidential information or use it on your own risk (include Google OAuth).
        </p>
        <p>If you provided confidential information, you may contact me to request deletion.</p>
      </div>
    </div>
  );
}
