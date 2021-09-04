import Image from "next/image";

export function AboutCard() {
  return (
    <aside className="card flex-row p-3 items-start w-64">
      <Image
        src="/me.jpeg"
        alt="my profile image"
        width="70"
        height="70"
        className="rounded-full"
      />
      <div>
        <h4 className="font-medium">Dheeraj Murali</h4>
        <p className="text-sm">Senior software engineer</p>
      </div>
    </aside>
  );
}
