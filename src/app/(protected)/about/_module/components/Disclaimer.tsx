export function Disclaimer() {
  return (
    <div className="p-2 space-y-2 border border-red-500 rounded-lg w-full">
      <h1 className="text-red-500">Disclaimer</h1>
      <div>
        <p>
          This application is <span className="text-red-500">not a real product</span>, but only a training project.{" "}
        </p>
        <p>
          When using Hyper Cinema,{" "}
          <span className="text-red-500">
            do not use confidential information or use it on your own risk (include Google OAuth).
          </span>
          <p>If you provided confidential information, you may contact me to request deletion.</p>
        </p>
        <p>The author of the project is not responsible for the security of the data provided.</p>
      </div>
    </div>
  );
}
