import { Tabs, Tab, Input, Link, Button } from "@nextui-org/react";
import { Contact, PencilRuler } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [selected, setSelected] = useState<React.Key>("student");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col">
        <Tabs aria-label="Options" color="primary"
          selectedKey={selected.toString()}
          onSelectionChange={setSelected}
        >
          <Tab
            key="student"
            title={
              <div className="flex items-center space-x-2">
                <Contact />
                <span>Student</span>
              </div>
            }
          >
            <form className="flex flex-col gap-4">
              <Input isRequired label="Email" placeholder="Enter your email" type="email" />
              <Input
                isRequired
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
              <p className="text-center text-small">
                Need to create an account?{" "}
                <Link size="sm" onPress={() => setSelected("sign-up")}>
                  Sign up
                </Link>
              </p>
              <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary">
                  Login
                </Button>
              </div>
            </form>
          </Tab>
          <Tab
            key="editor"
            title={
              <div className="flex items-center space-x-2">
                <PencilRuler />
                <span>Editor</span>
              </div>
            }
          >
            <form className="flex flex-col gap-4">
              <Input isRequired label="Email" placeholder="Enter your email" type="email" />
              <Input
                isRequired
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
              <p className="text-center text-small">
                Need to create an account?{" "}
                <Link size="sm" onPress={() => setSelected("sign-up")}>
                  Sign up
                </Link>
              </p>
              <div className="flex gap-2 justify-end">
                <Button fullWidth color="primary">
                  Login
                </Button>
              </div>
            </form>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
