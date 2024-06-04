import { Button, Card, CardBody, Input, Tab, Tabs } from '@nextui-org/react'
import { ContactRound, PenTool } from 'lucide-react'

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Card className="max-w-full w-[340px]">
        <CardBody className="overflow-hidden">
          <Tabs
            color="primary"
            variant="bordered"
            fullWidth
            size="md"
            aria-label="Tabs form"
          >
            <Tab key="login" title={
              <div className="flex items-center space-x-2">
                <ContactRound />
                <span>Student</span>
              </div>}
            >
              <form className="flex flex-col gap-4">
                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input isRequired label="Password" placeholder="Enter your password" type="password" />
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title={
              <div className="flex items-center space-x-2">
                <PenTool />
                <span>Editor</span>
              </div>}
            >
              <form className="flex flex-col gap-4">
                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input isRequired label="Password" placeholder="Enter your password" type="password" />
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  )
}

export default App
