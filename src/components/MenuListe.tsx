export default function MenuListe({
  list,
  setSelectEffet,
}: {
  list: string[];
  setSelectEffet: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <ul className="flex flex-col gap-2 border-l border-slate-800">
      {list.map((item: string, index: number) => (
        <li
          key={index}
          className="cursor-pointer  px-4 py-2 "
          onClick={() => setSelectEffet(item)}
        >
          <a href="#demo"> {item}</a>
        </li>
      ))}
    </ul>
  );
}
