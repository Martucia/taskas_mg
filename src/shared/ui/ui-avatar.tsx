export function UiAvatar({
  size,
  path,
}: {
  size: number;
  path: string | null;
}) {
  const imageSrc = path !== null && path !== undefined ? path : "/avatar.png";

  return (
    <div
      className={`h-${size} w-${size} flex rounded-[50%] overflow-hidden border-2 border-terq`}
    >
      <img src={imageSrc} alt="avatar" className="h-[100%] w-[max-content]" />
    </div>
  );
}
