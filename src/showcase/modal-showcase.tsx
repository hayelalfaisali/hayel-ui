import { Layers } from "lucide-react"
import { useDisclosure } from "@/hooks/use-disclosure"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function ModalShowcase() {
  const { isOpen, open, close } = useDisclosure()

  return (
    <Card className="rounded-md">
      <CardHeader>
        <CardTitle>النوافذ المنبثقة (Modals & Dialogs)</CardTitle>
        <CardDescription>
          نافذة منبثقة تفاعلية بدون أي مكتبة خارجية مع إغلاق بزر Esc وضغط الخلفية.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={open} className="gap-2">
          <Layers className="h-4 w-4" />
          افتح النافذة التفاعلية
        </Button>

        <Modal isOpen={isOpen} onClose={close} title="تأكيد العملية">
          <p className="text-sm text-slate-600 mb-6">
            هذا المكون مبني بنظام Headless خالص وبدون أي حزم خارجية ثقيلة، يمكنك تخصيص المحتوى والأزرار بالكامل.
          </p>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={close}>
              إلغاء
            </Button>
            <Button onClick={close}>
              موافق وحفظ
            </Button>
          </div>
        </Modal>
      </CardContent>
    </Card>
  )
}
