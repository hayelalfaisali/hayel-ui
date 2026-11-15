import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function InputShowcase() {
  return (
    <Card className="rounded-md">
      <CardHeader>
        <CardTitle>حقول الإدخال (Inputs & Forms)</CardTitle>
        <CardDescription>
          حقول إدخال تدعم التخصيص، حالات الأخطاء (Error)، والحالات المعطلة (Disabled).
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs font-medium text-slate-700 block mb-1">
            اسم المستخدم
          </label>
          <Input placeholder="أدخل اسم المستخدم..." />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-700 block mb-1">
            البريد الإلكتروني (حالة خطأ)
          </label>
          <Input
            isError
            defaultValue="invalid-email@"
            placeholder="name@example.com"
          />
          <span className="text-xs text-rose-600 mt-1 block">
            يرجى إدخال بريد إلكتروني صحيح
          </span>
        </div>
        <div>
          <label className="text-xs font-medium text-slate-700 block mb-1">
            حقل معطل (Disabled)
          </label>
          <Input disabled defaultValue="قيمة غير قابلة للتعديل" />
        </div>
        <div>
          <label className="text-xs font-medium text-slate-700 block mb-1">
            تخصيص مباشر (Custom Override)
          </label>
          <Input
            className="bg-slate-50 border-blue-400 focus-visible:ring-blue-600"
            placeholder="حقل بخلفية وإطار مخصص..."
          />
        </div>
      </CardContent>
    </Card>
  )
}
