import "./App.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { AlertDialogDemo } from "./components/manual/AlertDialogDemo";
import { CardWithForm } from "./components/manual/CardWithForm";
import { ChartData } from "./components/manual/ChartData";
import { DataTableDemo } from "./components/manual/DataTableDemo";
import { DialogDemo } from "./components/manual/DialogDemo";
import { DrawerDemo } from "./components/manual/DrawerDemo";

function App() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200">
      <div className="w-full max-w-xlg p-4">
        <p className="bg-cyan-100 text-black text-2xl text-center">Accordion</p>
        <Accordion
          className="bg-gray-300 text-black p-10"
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="alert-dialog-demo flex items-center justify-center gap-2">
        <AlertDialogDemo />
        <DialogDemo />
        <DrawerDemo />
      </div>
      <div className="card-demo">
        <CardWithForm />
      </div>
      <div className="ChartData-demo w-full">
        <ChartData />
      </div>
      <div className="Table-demo w-full bg-white">
        <DataTableDemo />
      </div>
    </div>
  );
}

export default App;
