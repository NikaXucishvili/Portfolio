export default function SectionDivider() {
  return (
    <div className="my-12 md:my-20 flex items-center gap-4">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="w-2 h-2 rounded-full bg-primary"></div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
    </div>
  );
}
