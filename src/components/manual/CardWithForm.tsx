import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CardWithForm() {
  return (
    <Card className="w-[350px] m-8 bg-blue-50 shadow-lg">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name of your project"
                className="bg-white cursor-pointer"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger
                  id="framework"
                  className="w-full bg-white cursor-pointer"
                >
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper" className="w-full bg-white">
                  <SelectItem
                    value="next"
                    className="hover:bg-gray-200 cursor-pointer "
                  >
                    Next.js
                  </SelectItem>
                  <SelectItem
                    value="React"
                    className="hover:bg-gray-200 cursor-pointer"
                  >
                    React.js
                  </SelectItem>
                  <SelectItem
                    value="bootstrap"
                    className="hover:bg-gray-200 cursor-pointer"
                  >
                    Bootstrap
                  </SelectItem>
                  <SelectItem
                    value="Antd"
                    className="hover:bg-gray-200 cursor-pointer"
                  >
                    Ant Design
                  </SelectItem>
                  <SelectItem
                    value="shadcn"
                    className="hover:bg-gray-200 cursor-pointer"
                  >
                    shadcn-ui
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          className="bg-white cursor-pointer hover:bg-red-400 hover:text-white"
        >
          Cancel
        </Button>
        <Button
          variant="outline"
          className="bg-white cursor-pointer hover:bg-black hover:text-white"
        >
          Ok
        </Button>
      </CardFooter>
    </Card>
  );
}
