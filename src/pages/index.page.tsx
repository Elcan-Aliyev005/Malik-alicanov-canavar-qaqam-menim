import { TextInput } from "@mantine/core"
import { AuthModal } from "../components/ui/modal/auth.modal"

function HomePage() {
  return (
    <div>


         <TextInput label="test-label" withAsterisk />;
         <AuthModal/>

    </div>
  )
}

export default HomePage