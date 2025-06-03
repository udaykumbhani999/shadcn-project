import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../manual/AppSidebar";
import { AppHeader } from "./AppHeader";
import { InvoicesTable } from "./InvoicesTable";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { AlertDialogDemo } from "./AlertDialogDemo";
import { DialogDemo } from "./DialogDemo";
import { DrawerDemo } from "./DrawerDemo";
import { CardWithForm } from "./CardWithForm";
import { ChartData } from "./ChartData";
import { DataTableDemo } from "./DataTableDemo";
import { CarouselDemo } from "./CarouselDemo";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <AppHeader />
        <div className="bg-transparent p-5 h-full">
          <InvoicesTable />
          <div className="flex align-center flex-col justify-center">
            <div className="w-full max-w-xlg p-4">
              <p className="bg-cyan-100 text-black text-2xl text-center">
                Accordion
              </p>
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
            <div className="Carousel-demo">
              <CarouselDemo />
            </div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}
