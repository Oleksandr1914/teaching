
import Button from "@/components/Button";
import Text from "@/components/Text";


export default function Home() {
  return (
    <main className="bg-slate-300 min-h-screen min-w-screen flex flex-col gap-10">
      <Text />
      <Button />
      <p className="text-[18px] leading-10 first-line:text-[#FF0000]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet tempore fuga dicta neque, laudan tium ratione nemo architecto tempora consequatur, officia corporis. Officia atque ex minima ac cusantium eius ea excepturi incidunt.</p>
      <p className="text-[25px] leading-8 first-letter:text-[#FF0000]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet tempore fuga dicta neque, laudan tium ratione nemo architecto tempora consequatur, officia corporis. Officia atque ex minima ac cusantium eius ea excepturi incidunt.</p>
    </main>
  );
}
