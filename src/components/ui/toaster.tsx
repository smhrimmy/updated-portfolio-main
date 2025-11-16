import Toast from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <>
      {toasts.map(({ id, message, isVisible, onClose }) => (
        <Toast key={id} message={message} isVisible={isVisible} onClose={onClose} />
      ))}
    </>
  )
}
