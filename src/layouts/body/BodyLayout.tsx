export default function BodyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="flex-1 w-full bg-gray-50 ">{children}</main>;
}
