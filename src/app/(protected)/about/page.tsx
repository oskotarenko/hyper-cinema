import About from "./_module/components/About";
import Contacts from "./_module/components/Contacts";
import { Disclaimer } from "./_module/components/Disclaimer";
import Stack from "./_module/components/Stack";

export default function AboutPage() {
  return (
    <div className="space-y-2">
      <Disclaimer />
      <div className="mx-auto flex flex-col gap-4 tablet:flex-row tablet:justify-between">
        <About />
        <Stack />
      </div>
      <Contacts />
    </div>
  );
}
